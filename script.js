// ============================================
// SMOOTH SCROLLING & NAVIGATION
// ============================================

// Get all navigation links
const navLinks = document.querySelectorAll('.nav-link');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

// Smooth scroll to sections
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
        
        // Close mobile menu after clicking
        navMenu.classList.remove('active');
    });
});

// Mobile menu toggle
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// ============================================
// CURSOR TRAIL EFFECT
// ============================================

const cursorDot = document.createElement('div');
const cursorOutline = document.createElement('div');

cursorDot.style.cssText = `
    width: 8px;
    height: 8px;
    background: linear-gradient(135deg, #38BDF8, #6366F1);
    border-radius: 50%;
    position: fixed;
    pointer-events: none;
    z-index: 9999;
    transition: transform 0.1s ease;
    box-shadow: 0 0 20px rgba(56, 189, 248, 0.5);
`;

cursorOutline.style.cssText = `
    width: 30px;
    height: 30px;
    border: 2px solid rgba(56, 189, 248, 0.5);
    border-radius: 50%;
    position: fixed;
    pointer-events: none;
    z-index: 9998;
    transition: all 0.15s ease;
`;

document.body.appendChild(cursorDot);
document.body.appendChild(cursorOutline);

let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;
let outlineX = 0, outlineY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursor() {
    // Smooth following for cursor dot
    cursorX += (mouseX - cursorX) * 0.3;
    cursorY += (mouseY - cursorY) * 0.3;
    
    // Slower following for outline
    outlineX += (mouseX - outlineX) * 0.15;
    outlineY += (mouseY - outlineY) * 0.15;
    
    cursorDot.style.left = cursorX + 'px';
    cursorDot.style.top = cursorY + 'px';
    
    cursorOutline.style.left = (outlineX - 15) + 'px';
    cursorOutline.style.top = (outlineY - 15) + 'px';
    
    requestAnimationFrame(animateCursor);
}

animateCursor();

// Cursor interactions
document.querySelectorAll('a, button, .project-card, .badge-card, .contact-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursorDot.style.transform = 'scale(1.5)';
        cursorOutline.style.width = '50px';
        cursorOutline.style.height = '50px';
        cursorOutline.style.borderColor = '#38BDF8';
    });
    
    el.addEventListener('mouseleave', () => {
        cursorDot.style.transform = 'scale(1)';
        cursorOutline.style.width = '30px';
        cursorOutline.style.height = '30px';
        cursorOutline.style.borderColor = 'rgba(56, 189, 248, 0.5)';
    });
});

// ============================================
// PARALLAX EFFECT FOR FLOATING SHAPES
// ============================================

const shapes = document.querySelectorAll('.shape');

window.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    shapes.forEach((shape, index) => {
        const speed = (index + 1) * 20;
        const xMove = (x - 0.5) * speed;
        const yMove = (y - 0.5) * speed;
        
        shape.style.transform = `translate(${xMove}px, ${yMove}px)`;
    });
});

// ============================================
// ACTIVE NAVIGATION LINK ON SCROLL
// ============================================

function setActiveNavLink() {
    const sections = document.querySelectorAll('.section, .hero');
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Listen for scroll events
window.addEventListener('scroll', setActiveNavLink);

// ============================================
// NAVBAR BACKGROUND ON SCROLL
// ============================================

const navbar = document.querySelector('.navbar');

function handleNavbarScroll() {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 14, 39, 0.95)';
        navbar.style.boxShadow = '0 8px 32px rgba(56, 189, 248, 0.15)';
        navbar.style.backdropFilter = 'blur(30px)';
    } else {
        navbar.style.background = 'rgba(10, 14, 39, 0.9)';
        navbar.style.boxShadow = 'none';
        navbar.style.backdropFilter = 'blur(20px)';
    }
}

window.addEventListener('scroll', handleNavbarScroll);

// ============================================
// SKILL BAR ANIMATION
// ============================================

function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const progress = progressBar.getAttribute('data-progress');
                progressBar.style.width = progress + '%';
                observer.unobserve(progressBar);
            }
        });
    }, {
        threshold: 0.5
    });
    
    skillBars.forEach(bar => observer.observe(bar));
}

// Initialize skill bar animation when DOM is loaded
document.addEventListener('DOMContentLoaded', animateSkillBars);

// ============================================
// FADE-IN ANIMATION ON SCROLL
// ============================================

function animateOnScroll() {
    const elements = document.querySelectorAll('.stat-card, .badge-card, .project-card, .contact-card, .timeline-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(30px)';
                
                setTimeout(() => {
                    entry.target.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 100);
                
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    elements.forEach(element => observer.observe(element));
}

// Initialize scroll animations
document.addEventListener('DOMContentLoaded', animateOnScroll);

// ============================================
// TYPING EFFECT FOR HERO SUBTITLE
// ============================================

function typeWriter() {
    const subtitle = document.querySelector('.hero-subtitle');
    if (!subtitle) return;
    
    const text = subtitle.textContent;
    subtitle.textContent = '';
    subtitle.style.opacity = '1';
    
    let i = 0;
    const speed = 100; // Typing speed in milliseconds
    
    function type() {
        if (i < text.length) {
            subtitle.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    // Start typing after a delay
    setTimeout(type, 1000);
}

// Uncomment below to enable typing effect
// document.addEventListener('DOMContentLoaded', typeWriter);

// ============================================
// SCROLL TO TOP BUTTON
// ============================================

const scrollTopBtn = document.querySelector('.footer-links a[href="#home"]');

if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ============================================
// FORM VALIDATION (if you add a contact form)
// ============================================

// Example form validation function
function validateForm(formElement) {
    const inputs = formElement.querySelectorAll('input, textarea');
    let isValid = true;
    
    inputs.forEach(input => {
        if (input.hasAttribute('required') && !input.value.trim()) {
            isValid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
        
        // Email validation
        if (input.type === 'email' && input.value.trim()) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(input.value)) {
                isValid = false;
                input.classList.add('error');
            }
        }
    });
    
    return isValid;
}

// ============================================
// LOADING ANIMATION (Optional)
// ============================================

window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// ============================================
// INTERACTIVE PROJECT CARDS
// ============================================

const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ============================================
// BADGE CARDS HOVER EFFECT
// ============================================

const badgeCards = document.querySelectorAll('.badge-card');

badgeCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        const icon = this.querySelector('.badge-icon');
        if (icon) {
            icon.style.transform = 'rotate(360deg) scale(1.1)';
            icon.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        }
    });
    
    card.addEventListener('mouseleave', function() {
        const icon = this.querySelector('.badge-icon');
        if (icon) {
            icon.style.transform = 'rotate(0deg) scale(1)';
        }
    });
});

// ============================================
// CONTACT CARDS INTERACTION
// ============================================

const contactCards = document.querySelectorAll('.contact-card');

contactCards.forEach(card => {
    card.addEventListener('click', function(e) {
        // Add ripple effect
        const ripple = document.createElement('span');
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(56, 189, 248, 0.3)';
        ripple.style.width = ripple.style.height = '100px';
        ripple.style.left = e.offsetX - 50 + 'px';
        ripple.style.top = e.offsetY - 50 + 'px';
        ripple.style.pointerEvents = 'none';
        ripple.style.animation = 'ripple 0.6s ease-out';
        
        this.style.position = 'relative';
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ============================================
// PERFORMANCE: LAZY LOADING IMAGES
// ============================================

function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

document.addEventListener('DOMContentLoaded', lazyLoadImages);

// ============================================
// CONSOLE MESSAGE
// ============================================

console.log('%c🚀 Portfolio Website', 'font-size: 20px; font-weight: bold; color: #38BDF8;');
console.log('%cBuilt with HTML, CSS, and JavaScript', 'font-size: 14px; color: #9CA3AF;');
console.log('%cDesigned by Sofyan Asifudin', 'font-size: 14px; color: #9CA3AF;');

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Debounce function for performance
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

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Use throttled scroll handler for better performance
const throttledScrollHandler = throttle(() => {
    handleNavbarScroll();
    setActiveNavLink();
}, 100);

window.addEventListener('scroll', throttledScrollHandler);

// ============================================
// ACCESSIBILITY IMPROVEMENTS
// ============================================

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    // Press 'Escape' to close mobile menu
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
    }
});

// Add focus styles for keyboard navigation
const focusableElements = document.querySelectorAll('a, button, input, textarea');

focusableElements.forEach(element => {
    element.addEventListener('focus', function() {
        this.style.outline = '2px solid var(--accent)';
        this.style.outlineOffset = '2px';
    });
    
    element.addEventListener('blur', function() {
        this.style.outline = 'none';
    });
});
