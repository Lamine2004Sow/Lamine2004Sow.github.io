// ============================================
// Loader style AVA – pourcentage 0 → 100
// ============================================
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    const loaderPct = document.getElementById('loaderPct');
    const heroReveal = document.querySelector('.hero-reveal');

    function hideLoader() {
        loader.classList.add('hidden');
        setTimeout(() => {
            loader.style.display = 'none';
            if (heroReveal) heroReveal.classList.add('started');
        }, 500);
    }

    if (typeof gsap !== 'undefined') {
        document.documentElement.classList.add('gsap-loaded');
        gsap.fromTo(loaderPct, { textContent: 0 }, {
            textContent: 100,
            duration: 1.2,
            snap: { textContent: 1 },
            ease: 'power2.inOut',
            onComplete: () => {
                gsap.to(loader, { opacity: 0, duration: 0.5, onComplete: hideLoader });
            }
        });
    } else {
        let pct = 0;
        const iv = setInterval(() => {
            pct += Math.random() * 15 + 5;
            if (pct >= 100) {
                pct = 100;
                clearInterval(iv);
                loader.classList.add('hidden');
                setTimeout(hideLoader, 400);
            }
            if (loaderPct) loaderPct.textContent = Math.min(100, Math.floor(pct));
        }, 120);
    }
});

// ============================================
// Navigation
// ============================================
const nav = document.getElementById('nav');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
});

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
}

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

const sections = document.querySelectorAll('section[id]');
function updateActiveNavLink() {
    const scrollY = window.pageYOffset;
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            navLinks.forEach(l => {
                l.classList.remove('active');
                if (l.getAttribute('href') === `#${sectionId}`) l.classList.add('active');
            });
        }
    });
}
window.addEventListener('scroll', updateActiveNavLink);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({ top: target.offsetTop - 70, behavior: 'smooth' });
        }
    });
});

// ============================================
// Typewriter
// ============================================
const typewriterElement = document.getElementById('typewriter');
const phrases = ['AI Engineer', 'RL Researcher', 'Optimization Specialist'];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

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
setTimeout(() => { if (typewriterElement) typeWriter(); }, 2800);

// ============================================
// Scroll reveal (GSAP ScrollTrigger – style AVA)
// ============================================
if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray('.sec-title.scroll-reveal').forEach(el => {
        gsap.fromTo(el, { opacity: 0, y: 32 }, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' },
            onComplete: () => el.classList.add('revealed')
        });
    });

    const staggerConfig = [
        { sel: '.project-ava-card', stagger: 0.1 },
        { sel: '.stat-ava', stagger: 0.08 },
        { sel: '.timeline-ava-item', stagger: 0.12 },
        { sel: '.skills-ava-block', stagger: 0.06 },
        { sel: '.contact-ava-link', stagger: 0.1 }
    ];
    staggerConfig.forEach(({ sel, stagger }) => {
        const els = document.querySelectorAll(sel);
        if (els.length) {
            gsap.fromTo(els, { opacity: 0, y: 28 }, {
                opacity: 1,
                y: 0,
                duration: 0.65,
                stagger,
                ease: 'power3.out',
                scrollTrigger: { trigger: els[0].closest('section') || els[0], start: 'top 82%' }
            });
        }
    });

    const aboutCopy = document.querySelector('.about-copy');
    if (aboutCopy) {
        gsap.fromTo(aboutCopy, { opacity: 0, x: -20 }, {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: { trigger: aboutCopy, start: 'top 85%' }
        });
    }

    const heroVisual = document.querySelector('.hero-visual');
    if (heroVisual) {
        gsap.to(heroVisual, {
            y: 60,
            ease: 'none',
            scrollTrigger: {
                trigger: '.hero',
                start: 'top top',
                end: 'bottom top',
                scrub: 0.6
            }
        });
    }
}

// Fallback sans GSAP
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -30px 0px' };
const observerReveal = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('revealed'); });
}, observerOptions);
document.querySelectorAll('.sec-title.scroll-reveal').forEach(el => observerReveal.observe(el));

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

console.log('%c Lamine Sow · Portfolio ', 'background: #000; color: #fff; font-size: 12px; padding: 4px 8px;');
