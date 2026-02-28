// ============================================
// Loader
// ============================================
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    const heroReveal = document.querySelector('.hero-reveal');
    setTimeout(() => {
        loader.classList.add('hidden');
        setTimeout(() => {
            loader.style.display = 'none';
            if (heroReveal) heroReveal.classList.add('started');
        }, 400);
    }, 1400);
});

// ============================================
// Panneaux qui s'ouvrent au scroll + fusée qui avance
// ============================================
const panels = document.querySelectorAll('.panel');
const rocketProgress = document.getElementById('rocketProgress');
const rocketShape = document.getElementById('rocketShape');
const rocketLinks = document.querySelectorAll('.rocket-link');

function getScrollProgress() {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (docHeight <= 0) return 0;
    return Math.min(1, scrollY / docHeight);
}

function updateRocketAndPanels() {
    const progress = getScrollProgress();
    const scrollY = window.scrollY;
    const windowH = window.innerHeight;

    // Barre de progression à droite (avance avec le scroll)
    if (rocketProgress) {
        rocketProgress.style.setProperty('--progress-height', (progress * 100) + '%');
    }

    // Position de la fusée : suit le scroll (top en %)
    if (rocketShape) {
        const topPct = 15 + progress * 60;
        rocketShape.style.top = topPct + '%';
    }

    // Ouvrir le panneau quand il entre dans le viewport
    panels.forEach((panel, i) => {
        const rect = panel.getBoundingClientRect();
        const inView = rect.top < windowH * 0.6 && rect.bottom > windowH * 0.2;
        if (inView) {
            panel.classList.add('panel-open');
        } else if (rect.top > windowH * 0.3) {
            panel.classList.remove('panel-open');
        }
    });

    // Lien actif du menu fusée
    let currentSection = '';
    panels.forEach(panel => {
        const rect = panel.getBoundingClientRect();
        if (rect.top <= windowH / 2 && rect.bottom >= windowH / 2) {
            currentSection = panel.getAttribute('data-section') || panel.id || '';
        }
    });
    rocketLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-section') === currentSection) {
            link.classList.add('active');
        }
    });
}

// Utiliser --progress-height en CSS pour la barre
document.documentElement.style.setProperty('--progress-height', '0%');

window.addEventListener('scroll', updateRocketAndPanels);
window.addEventListener('resize', updateRocketAndPanels);
updateRocketAndPanels();

// Clic sur les liens fusée : scroll vers la section
rocketLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const id = this.getAttribute('href').slice(1);
        const target = document.getElementById(id);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Smooth scroll pour tous les ancres
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ============================================
// Typewriter
// ============================================
const typewriterElement = document.getElementById('typewriter');
const phrases = ['AI Engineer', 'RL Researcher', 'Optimization Specialist'];
let phraseIndex = 0, charIndex = 0, isDeleting = false, typingSpeed = 100;

function typeWriter() {
    if (!typewriterElement) return;
    const currentPhrase = phrases[phraseIndex];
    if (isDeleting) {
        typewriterElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        typewriterElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
    }
    if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        typingSpeed = 2000;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typingSpeed = 500;
    }
    setTimeout(typeWriter, typingSpeed);
}
setTimeout(() => { if (typewriterElement) typeWriter(); }, 1800);

// ============================================
// GSAP : animations d'ouverture des panneaux (optionnel, renforce l'effet)
// ============================================
if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
    panels.forEach((panel, i) => {
        if (panel.id === 'home') return;
        gsap.fromTo(panel.querySelector('.panel-inner'), { opacity: 0, x: 50 }, {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: panel,
                start: 'top 70%',
                toggleActions: 'play none none reverse'
            }
        });
    });
}

// Counter (stats)
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseInt(el.dataset.target, 10) || 0;
        const suffix = el.dataset.suffix || '';
        const duration = 1000;
        const start = performance.now();
        function update(now) {
            const t = Math.min((now - start) / duration, 1);
            const easeOut = 1 - Math.pow(1 - t, 3);
            el.textContent = Math.round(easeOut * target) + suffix;
            if (t < 1) requestAnimationFrame(update);
        }
        requestAnimationFrame(update);
        counterObserver.unobserve(el);
    });
}, { threshold: 0.3 });
document.querySelectorAll('.stat-counter').forEach(el => counterObserver.observe(el));

console.log('%c Lamine Sow · Portfolio ', 'background: #1a1a3a; color: #e8c547; font-size: 12px; padding: 4px 8px;');
