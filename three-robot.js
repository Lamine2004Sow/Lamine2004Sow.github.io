/**
 * Scène 3D Hero - Robot animé (style CES / Maddys)
 * Remplace l'ancien "crayon" par un robot 3D avec animations.
 */
(function () {
    'use strict';

    let scene, camera, renderer, robot, particles;
    let clock = new THREE.Clock();
    const accentColor = 0x6366f1;
    const accentLight = 0xa5b4fc;

    function init() {
        const wrap = document.getElementById('hero-canvas-wrap');
        const canvas = document.getElementById('hero-canvas');
        if (!wrap || !canvas) return;

        const width = wrap.offsetWidth;
        const height = wrap.offsetHeight;

        // Scene
        scene = new THREE.Scene();
        scene.background = null; // transparent
        scene.fog = new THREE.FogExp2(0x0a0a0a, 0.012);

        // Camera
        camera = new THREE.PerspectiveCamera(28, width / height, 0.1, 1000);
        camera.position.set(0, 0, 6);

        // Renderer
        renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setClearColor(0x000000, 0);
        if (typeof THREE.SRGBColorSpace !== 'undefined') {
            renderer.outputColorSpace = THREE.SRGBColorSpace;
        } else if (renderer.outputEncoding !== undefined) {
            renderer.outputEncoding = THREE.sRGBEncoding;
        }
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1;
        if (renderer.shadowMap) {
            renderer.shadowMap.enabled = true;
            renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        }

        // Lights
        const ambient = new THREE.AmbientLight(0x404060, 0.6);
        scene.add(ambient);

        const mainLight = new THREE.DirectionalLight(0xffffff, 0.9);
        mainLight.position.set(3, 5, 4);
        mainLight.castShadow = true;
        scene.add(mainLight);

        const fillLight = new THREE.PointLight(accentLight, 0.5, 20);
        fillLight.position.set(-2, 1, 3);
        scene.add(fillLight);

        const accentPoint = new THREE.PointLight(accentColor, 0.4, 15);
        accentPoint.position.set(0, 2, 2);
        scene.add(accentPoint);

        // Robot (groupe parent pour rotation / flottement)
        robot = new THREE.Group();

        const matBody = new THREE.MeshStandardMaterial({
            color: 0x2a2a3a,
            metalness: 0.6,
            roughness: 0.35,
            emissive: accentColor,
            emissiveIntensity: 0.08
        });
        const matAccent = new THREE.MeshStandardMaterial({
            color: accentColor,
            metalness: 0.5,
            roughness: 0.4,
            emissive: accentColor,
            emissiveIntensity: 0.2
        });
        const matEye = new THREE.MeshStandardMaterial({
            color: 0xffffff,
            emissive: accentLight,
            emissiveIntensity: 0.6
        });

        // Base
        const baseGeom = new THREE.CylinderGeometry(0.5, 0.6, 0.15, 32);
        const base = new THREE.Mesh(baseGeom, matBody);
        base.position.y = -0.9;
        base.castShadow = true;
        robot.add(base);

        // Corps
        const bodyGeom = new THREE.BoxGeometry(0.55, 0.7, 0.35);
        const body = new THREE.Mesh(bodyGeom, matBody);
        body.position.y = -0.4;
        body.castShadow = true;
        robot.add(body);

        // Plaque pectorale (accent)
        const chestGeom = new THREE.BoxGeometry(0.35, 0.2, 0.36);
        const chest = new THREE.Mesh(chestGeom, matAccent);
        chest.position.set(0, -0.35, 0.18);
        robot.add(chest);

        // Tête
        const headGeom = new THREE.BoxGeometry(0.4, 0.4, 0.4);
        const head = new THREE.Mesh(headGeom, matBody);
        head.position.y = 0.05;
        head.castShadow = true;
        robot.add(head);

        // Antenne
        const antennaGeom = new THREE.CylinderGeometry(0.02, 0.02, 0.25, 8);
        const antenna = new THREE.Mesh(antennaGeom, matAccent);
        antenna.position.set(0, 0.35, 0);
        robot.add(antenna);
        const antennaBall = new THREE.Mesh(
            new THREE.SphereGeometry(0.04, 12, 12),
            new THREE.MeshStandardMaterial({ color: accentColor, emissive: accentColor, emissiveIntensity: 0.3 })
        );
        antennaBall.position.set(0, 0.145, 0);
        antenna.add(antennaBall);

        // Yeux
        const eyeGeom = new THREE.SphereGeometry(0.06, 16, 16);
        const leftEye = new THREE.Mesh(eyeGeom, matEye);
        leftEye.position.set(-0.1, 0.08, 0.22);
        robot.add(leftEye);
        const rightEye = new THREE.Mesh(eyeGeom, matEye);
        rightEye.position.set(0.1, 0.08, 0.22);
        robot.add(rightEye);

        // Bras (stockés pour animation)
        const armGeom = new THREE.BoxGeometry(0.12, 0.4, 0.12);
        const leftArm = new THREE.Mesh(armGeom, matBody);
        leftArm.position.set(-0.38, -0.1, 0);
        leftArm.rotation.z = 0.3;
        leftArm.castShadow = true;
        robot.add(leftArm);
        const rightArm = new THREE.Mesh(armGeom, matBody);
        rightArm.position.set(0.38, -0.1, 0);
        rightArm.rotation.z = -0.3;
        rightArm.castShadow = true;
        robot.add(rightArm);

        robot.userData.leftArm = leftArm;
        robot.userData.rightArm = rightArm;

        scene.add(robot);

        // Particules en arrière-plan (style CES / Maddys)
        const particleCount = 120;
        const particleGeom = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);
        for (let i = 0; i < particleCount; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 12;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 12;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 8 - 2;
        }
        particleGeom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        const particleMat = new THREE.PointsMaterial({
            color: accentColor,
            size: 0.06,
            transparent: true,
            opacity: 0.4,
            sizeAttenuation: true
        });
        particles = new THREE.Points(particleGeom, particleMat);
        scene.add(particles);

        window.addEventListener('resize', onResize);

        function onResize() {
            if (!wrap || !camera || !renderer) return;
            const w = wrap.offsetWidth;
            const h = wrap.offsetHeight;
            camera.aspect = w / h;
            camera.updateProjectionMatrix();
            renderer.setSize(w, h);
        }

        animate();
    }

    function animate() {
        if (!renderer || !scene || !camera) return;
        requestAnimationFrame(animate);
        const t = clock.getElapsedTime();

        if (robot) {
            robot.rotation.y = t * 0.25;
            robot.position.y = Math.sin(t * 0.6) * 0.08;
            if (robot.userData.leftArm) {
                robot.userData.leftArm.rotation.z = 0.3 + Math.sin(t * 1.2) * 0.15;
                robot.userData.rightArm.rotation.z = -0.3 - Math.sin(t * 1.2) * 0.15;
            }
        }

        if (particles) {
            particles.rotation.y = t * 0.03;
        }

        renderer.render(scene, camera);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
