// ===================================
// Smooth Scroll Navigation
// ===================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        
        if (targetId === '#') return;
        
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = targetSection.offsetTop - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            const navMenu = document.querySelector('.nav-menu');
            const navToggle = document.querySelector('.nav-toggle');
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        }
    });
});

// ===================================
// Sticky Navigation
// ===================================

const navbar = document.getElementById('navbar');
const hero = document.querySelector('.hero');
let heroHeight = hero ? hero.offsetHeight : 600;

// Initial state - navbar is hidden
navbar.classList.remove('hero-nav');

function handleNavbar() {
    const scrollPosition = window.scrollY;
    
    // Show navbar when scrolled past 100px
    if (scrollPosition > 100) {
        navbar.classList.add('visible');
    } else {
        navbar.classList.remove('visible');
    }
}

// Call on load and scroll
window.addEventListener('scroll', handleNavbar);
window.addEventListener('load', handleNavbar);

// ===================================
// Mobile Menu Toggle
// ===================================

const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });
}

// ===================================
// Scroll Animations with Intersection Observer
// ===================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Optional: unobserve after animation to improve performance
            // observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all elements with animation classes
const animatedElements = document.querySelectorAll(
    '.fade-in-up, .slide-in-left, .slide-in-right'
);

animatedElements.forEach(element => {
    observer.observe(element);
});

// ===================================
// Service Cards Staggered Animation
// ===================================

const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
});

// ===================================
// Active Nav Link on Scroll
// ===================================

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    const scrollPosition = window.scrollY + 150;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);
window.addEventListener('load', updateActiveNavLink);

// ===================================
// Hero Fade-in Animation
// ===================================

window.addEventListener('load', () => {
    const heroElements = document.querySelectorAll('.hero-content .fade-in');
    heroElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.2}s`;
    });
});

// ===================================
// Parallax Effect for Hero (Subtle)
// ===================================

function parallaxEffect() {
    const scrolled = window.scrollY;
    const hero = document.querySelector('.hero');
    
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
}

window.addEventListener('scroll', parallaxEffect);

// ===================================
// Phone Number Click Tracking (Optional Analytics)
// ===================================

const phoneButton = document.querySelector('.phone-button');
if (phoneButton) {
    phoneButton.addEventListener('click', () => {
        console.log('Phone number clicked - Booking intent tracked');
        // You can add analytics tracking here
        // Example: gtag('event', 'click', { 'event_category': 'booking', 'event_label': 'phone' });
    });
}

// ===================================
// Smooth Page Load
// ===================================

window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// ===================================
// Handle Window Resize
// ===================================

let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // Recalculate hero height
        heroHeight = hero ? hero.offsetHeight : 600;
        
        // Close mobile menu on resize to desktop
        if (window.innerWidth > 768) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    }, 250);
});

// ===================================
// Scroll Progress Indicator (Optional Enhancement)
// ===================================

function updateScrollProgress() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    
    // You can add a progress bar element if desired
    // document.getElementById('progressBar').style.width = scrolled + '%';
}

window.addEventListener('scroll', updateScrollProgress);

// ===================================
// Enhanced Keyboard Navigation
// ===================================

document.addEventListener('keydown', (e) => {
    // ESC key closes mobile menu
    if (e.key === 'Escape') {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
});

// ===================================
// Prevent Flash of Unstyled Content
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('loaded');
});

// ===================================
// Intersection Observer for Performance
// ===================================

// Lazy load images if you add real images later
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            }
        });
    });
    
    // Observe all images with data-src attribute
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===================================
// Smooth Scroll Behavior for Service Cards
// ===================================

const approachSteps = document.querySelectorAll('.approach-step');
const approachObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
        }
    });
}, { threshold: 0.2 });

approachSteps.forEach(step => {
    step.style.opacity = '0';
    step.style.transform = 'translateY(30px)';
    step.style.transition = 'all 0.6s ease-out';
    approachObserver.observe(step);
});

// ===================================
// CTA Button Pulse Effect
// ===================================

const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    // Add subtle pulse effect every 5 seconds using class-based approach
    // This preserves the fade-in animation while adding pulse effect
    setInterval(() => {
        ctaButton.classList.add('pulse-active');
        setTimeout(() => {
            ctaButton.classList.remove('pulse-active');
        }, 500);
    }, 5000);
}

// Add pulse animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
    }
    .cta-button.pulse-active {
        animation: pulse 0.5s ease;
    }
`;
document.head.appendChild(style);

// ===================================
// Performance Optimization
// ===================================

// Throttle scroll events for better performance
function throttle(func, wait) {
    let timeout;
    let lastRan;
    
    return function executedFunction(...args) {
        if (!lastRan) {
            func.apply(this, args);
            lastRan = Date.now();
        } else {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                if ((Date.now() - lastRan) >= wait) {
                    func.apply(this, args);
                    lastRan = Date.now();
                }
            }, wait - (Date.now() - lastRan));
        }
    };
}

// Apply throttling to scroll handlers
const throttledParallax = throttle(parallaxEffect, 16);
const throttledNavbar = throttle(handleNavbar, 16);
const throttledActiveLink = throttle(updateActiveNavLink, 100);

window.removeEventListener('scroll', parallaxEffect);
window.removeEventListener('scroll', handleNavbar);
window.removeEventListener('scroll', updateActiveNavLink);

window.addEventListener('scroll', throttledParallax);
window.addEventListener('scroll', throttledNavbar);
window.addEventListener('scroll', throttledActiveLink);

// ===================================
// Section Title and Content Color Change on Hero Overlap
// ===================================

function updateSectionTitleColors() {
    const hero = document.querySelector('.hero');
    const sectionTitles = document.querySelectorAll('.section-title');
    const leadParagraphs = document.querySelectorAll('.about-content .lead');
    const aboutIntro = document.querySelector('.about-intro');
    
    if (!hero) return;
    
    const heroRect = hero.getBoundingClientRect();
    
    // Update section titles
    sectionTitles.forEach(title => {
        const titleRect = title.getBoundingClientRect();
        
        // Check if the title overlaps with the hero section
        const isOverlapping = (
            titleRect.bottom > heroRect.top &&
            titleRect.top < heroRect.bottom
        );
        
        if (isOverlapping) {
            title.classList.add('over-hero');
        } else {
            title.classList.remove('over-hero');
        }
    });
    
    // Update lead paragraphs
    leadParagraphs.forEach(lead => {
        const leadRect = lead.getBoundingClientRect();
        
        const isOverlapping = (
            leadRect.bottom > heroRect.top &&
            leadRect.top < heroRect.bottom
        );
        
        if (isOverlapping) {
            lead.classList.add('over-hero');
        } else {
            lead.classList.remove('over-hero');
        }
    });
    
    // Update about intro section
    if (aboutIntro) {
        const introRect = aboutIntro.getBoundingClientRect();
        
        const isOverlapping = (
            introRect.bottom > heroRect.top &&
            introRect.top < heroRect.bottom
        );
        
        if (isOverlapping) {
            aboutIntro.classList.add('over-hero');
        } else {
            aboutIntro.classList.remove('over-hero');
        }
    }
}

// Throttle the function for performance
const throttledTitleColorUpdate = throttle(updateSectionTitleColors, 16);

window.addEventListener('scroll', throttledTitleColorUpdate);
window.addEventListener('load', updateSectionTitleColors);
window.addEventListener('resize', updateSectionTitleColors);

// ===================================
// Console Welcome Message
// ===================================

console.log('%c👋 Welcome to Meghann Stoneham\'s Website', 'font-size: 20px; font-weight: bold; color: #2563eb;');
console.log('%cFind the root cause. Treat from within.', 'font-size: 14px; color: #64748b;');
console.log('%cBook a consultation: 0452 319 179', 'font-size: 14px; color: #2563eb;');

// ===================================
// Service Worker Registration
// ===================================

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('Service Worker registered successfully:', registration.scope);
            })
            .catch(error => {
                console.log('Service Worker registration failed:', error);
            });
    });
}

