// ============================================
// NAVEGACIÓN MÓVIL
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    // Toggle menú móvil
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Animación del botón hamburguesa
            navToggle.classList.toggle('active');
        });
    }

    // Cerrar menú al hacer clic en un enlace
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navMenu.contains(event.target);
        const isClickOnToggle = navToggle.contains(event.target);

        if (!isClickInsideNav && !isClickOnToggle && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });
});

// ============================================
// HEADER SCROLL - Cambio de estilo al hacer scroll
// ============================================
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
        header.style.padding = '5px 0';
    } else {
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        header.style.padding = '0';
    }

    lastScroll = currentScroll;
});

// ============================================
// SMOOTH SCROLL para navegación
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Solo aplicar smooth scroll si no es solo '#'
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const headerHeight = header.offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ============================================
// ANIMACIONES AL HACER SCROLL (Intersection Observer)
// ============================================
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Elementos a animar
const animatedElements = document.querySelectorAll(
    '.category-card, .product-card, .testimonial-card, .blog-card, .credential-item'
);

animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ============================================
// CONTADOR DE ESTADÍSTICAS (opcional para credenciales)
// ============================================
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16); // 60 FPS
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// ============================================
// LAZY LOADING de imágenes
// ============================================
const lazyImages = document.querySelectorAll('img[data-src]');

const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
        }
    });
});

lazyImages.forEach(img => imageObserver.observe(img));

// ============================================
// VALIDACIÓN DE FORMULARIO DE CONTACTO (si se agrega)
// ============================================
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// ============================================
// MODAL PARA PRODUCTOS (opcional)
// ============================================
function createProductModal(productName, productDescription, productImage) {
    const modal = document.createElement('div');
    modal.className = 'product-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="modal-close">&times;</span>
            <img src="${productImage}" alt="${productName}">
            <h2>${productName}</h2>
            <p>${productDescription}</p>
            <a href="https://wa.me/51912173821?text=Me%20interesa%20${encodeURIComponent(productName)}" 
               class="btn btn-primary" 
               target="_blank">
                <i class="fab fa-whatsapp"></i> Consultar por WhatsApp
            </a>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Cerrar modal
    const closeBtn = modal.querySelector('.modal-close');
    closeBtn.addEventListener('click', () => modal.remove());
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.remove();
    });
}

// ============================================
// CARRUSEL SIMPLE para testimonios (opcional)
// ============================================
class SimpleCarousel {
    constructor(container, options = {}) {
        this.container = container;
        this.items = container.querySelectorAll('.carousel-item');
        this.currentIndex = 0;
        this.interval = options.interval || 5000;
        this.autoPlay = options.autoPlay !== false;
        
        if (this.autoPlay) {
            this.start();
        }
    }
    
    next() {
        this.currentIndex = (this.currentIndex + 1) % this.items.length;
        this.updateCarousel();
    }
    
    prev() {
        this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
        this.updateCarousel();
    }
    
    updateCarousel() {
        this.items.forEach((item, index) => {
            item.style.display = index === this.currentIndex ? 'block' : 'none';
        });
    }
    
    start() {
        this.timer = setInterval(() => this.next(), this.interval);
    }
    
    stop() {
        clearInterval(this.timer);
    }
}

// ============================================
// TRACKING DE EVENTOS (Google Analytics, etc.)
// ============================================
function trackEvent(category, action, label) {
    // Si tienes Google Analytics configurado
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            'event_category': category,
            'event_label': label
        });
    }
    
    console.log(`Event tracked: ${category} - ${action} - ${label}`);
}

// Tracking de clics en botones de WhatsApp
document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
    link.addEventListener('click', function() {
        const productName = this.closest('.product-card')?.querySelector('h3')?.textContent || 'General';
        trackEvent('WhatsApp', 'Click', productName);
    });
});

// Tracking de clics en productos
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', function(e) {
        if (!e.target.closest('a')) {
            const productName = this.querySelector('h3').textContent;
            trackEvent('Product', 'View', productName);
        }
    });
});

// ============================================
// BACK TO TOP BUTTON (opcional)
// ============================================
const backToTopButton = document.createElement('button');
backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
backToTopButton.className = 'back-to-top';
backToTopButton.setAttribute('aria-label', 'Volver arriba');
backToTopButton.style.cssText = `
    position: fixed;
    bottom: 100px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: var(--color-secondary);
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 998;
    font-size: 1.2rem;
    box-shadow: 0 4px 15px rgba(0, 0, 255, 0.3);
`;

document.body.appendChild(backToTopButton);

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        backToTopButton.style.opacity = '1';
        backToTopButton.style.visibility = 'visible';
    } else {
        backToTopButton.style.opacity = '0';
        backToTopButton.style.visibility = 'hidden';
    }
});

backToTopButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ============================================
// MENSAJES DE CONSOLA
// ============================================
console.log('%c🎉 DISTRINORT E.I.R.L', 'color: #FF0000; font-size: 24px; font-weight: bold;');
console.log('%cSitio web desarrollado con ❤️', 'color: #0000FF; font-size: 14px;');
console.log('%c© 2025 Todos los derechos reservados', 'color: #666; font-size: 12px;');
