// ============================================
// Loader – style Fantik (barre + texte)
// ============================================
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    const heroReveal = document.querySelector('.hero-reveal');

    function hideLoader() {
        loader.classList.add('hidden');
        setTimeout(() => {
            loader.style.display = 'none';
            if (heroReveal) heroReveal.classList.add('started');
        }, 400);
    }

    setTimeout(hideLoader, 1400);
});

// ============================================
// Navigation
// ============================================
const nav = document.getElementById('nav');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    if (window.scrollY > 60) nav.classList.add('scrolled');
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
            window.scrollTo({ top: target.offsetTop - 78, behavior: 'smooth' });
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
setTimeout(() => { if (typewriterElement) typeWriter(); }, 1800);

// ============================================
// Scroll reveal – GSAP ScrollTrigger (style Fantik / motion)
// ============================================
if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray('.sec-title.scroll-reveal').forEach(el => {
        gsap.fromTo(el, { opacity: 0, y: 36 }, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' },
            onComplete: () => el.classList.add('revealed')
        });
    });

    const staggerEls = [
        '.project-card',
        '.stat',
        '.timeline-item',
        '.skill-block',
        '.contact-link',
        '.about-text',
        '.sec-subtitle',
        '.contact-lead',
        '.soft-skills'
    ];
    staggerEls.forEach(sel => {
        const els = document.querySelectorAll(sel);
        if (els.length) {
            const stagger = /project-card|stat|skill-block|timeline-item|contact-link/.test(sel) ? 0.08 : 0;
            gsap.fromTo(els, { opacity: 0, y: 28 }, {
                opacity: 1,
                y: 0,
                duration: 0.7,
                stagger,
                ease: 'power3.out',
                scrollTrigger: { trigger: els[0].closest('section') || els[0], start: 'top 82%' }
            });
        }
    });
}

// Fallback Intersection Observer
const observerReveal = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('revealed'); });
}, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
document.querySelectorAll('.scroll-reveal').forEach(el => observerReveal.observe(el));

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

console.log('%c Lamine Sow · Portfolio ', 'background: #1a1a1a; color: #f8f6f3; font-size: 12px; padding: 4px 8px; border-radius: 4px;');
