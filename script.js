// ==========================================
// UTILITAIRE : DEBOUNCE
// ==========================================

/**
 * Limite la fréquence d'exécution d'une fonction
 * @param {Function} func - Fonction à débouncer
 * @param {number} wait - Délai en millisecondes
 * @returns {Function}
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ==========================================
// ANIMATION AU SCROLL (INTERSECTION OBSERVER)
// ==========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observer tous les éléments avec animation
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.section, .experience-item, .project-item, .education-item').forEach(el => {
        observer.observe(el);
    });
});

// ==========================================
// EFFET DE TYPING SUR LE TITRE
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('.title');
    if (!title) return;

    const titleText = title.textContent;
    title.textContent = '';

    setTimeout(() => {
        let i = 0;
        const typeWriter = () => {
            if (i < titleText.length) {
                title.textContent += titleText.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        typeWriter();
    }, 1000);
});

// ==========================================
// PARALLAX SUR LES FORMES FLOTTANTES
// ==========================================

const handleParallax = debounce((e) => {
    const shapes = document.querySelectorAll('.shape');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    shapes.forEach((shape, index) => {
        const speed = (index + 1) * 0.5;
        const xPos = x * speed * 10;
        const yPos = y * speed * 10;

        // Utilisation de translate3d pour l'accélération GPU
        shape.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
    });
}, 50); // Debounce à 50ms pour de meilleures performances

window.addEventListener('mousemove', handleParallax);

// ==========================================
// EFFET HOVER SUR LES COMPÉTENCES
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.skill-list li').forEach(skill => {
        skill.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(10px)';
            this.style.transition = 'transform 0.3s ease';
        });

        skill.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });
});

// ==========================================
// SCROLL SMOOTH POUR LES ANCRES
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    // Si vous ajoutez des liens d'ancrage dans le futur
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});

// ==========================================
// ANALYTICS / TRACKING (Optionnel)
// ==========================================

/**
 * Fonction pour tracker les clics sur les boutons sociaux
 * Remplacez console.log par votre système d'analytics
 */
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.social-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const btnText = this.textContent.trim();
            console.log(`Clic sur: ${btnText}`);
            // Exemple avec Google Analytics (si configuré) :
            // gtag('event', 'click', { 'event_category': 'Social', 'event_label': btnText });
        });
    });
});

// ==========================================
// DÉTECTION DU MODE SOMBRE (Futur)
// ==========================================

/**
 * Détecte les préférences de thème du système
 * Prêt pour une future implémentation de dark mode
 */
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

if (prefersDarkScheme.matches) {
    console.log('Mode sombre détecté');
    // Ajoutez ici votre logique de dark mode si nécessaire
}

// Écouter les changements de préférence
prefersDarkScheme.addEventListener('change', (e) => {
    if (e.matches) {
        console.log('Passage au mode sombre');
    } else {
        console.log('Passage au mode clair');
    }
});

// ==========================================
// GESTION DES ERREURS GLOBALES
// ==========================================

window.addEventListener('error', (e) => {
    console.error('Erreur détectée:', e.message);
    // Vous pouvez envoyer ces erreurs à un service de monitoring
});

// ==========================================
// PERFORMANCE MONITORING (Optionnel)
// ==========================================

window.addEventListener('load', () => {
    // Mesurer les performances de chargement
    if (window.performance) {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`Temps de chargement total: ${pageLoadTime}ms`);
    }
});