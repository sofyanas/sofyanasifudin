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
// 3D TILT EFFECT FOR PROJECT CARD
// ============================================

const tiltCards = document.querySelectorAll('.project-card');

tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -10; // Max rotation deg
        const rotateY = ((x - centerX) / centerX) * 10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    });
});

// ============================================
// MAGNETIC BUTTONS EFFECT
// ============================================

const magneticButtons = document.querySelectorAll('.btn');

magneticButtons.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const xMove = (x - centerX) * 0.2; // Move 20% of mouse distance
        const yMove = (y - centerY) * 0.2;

        btn.style.transform = `translate(${xMove}px, ${yMove}px)`;
    });

    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate(0, 0)';
    });
});

// ============================================
// TYPING EFFECT FOR HERO
// ============================================

function typeWriter() {
    const typedTextSpan = document.querySelector('.typed-text');
    if (!typedTextSpan) return;

    const phrases = ["Laravel Developer", "Next.js Developer", "School Data Admin"];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function type() {
        const currentPhrase = phrases[phraseIndex];

        if (isDeleting) {
            typedTextSpan.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 50;
        } else {
            typedTextSpan.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 100;
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            typeSpeed = 2000; // Pause at end
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    }

    type();
}

document.addEventListener('DOMContentLoaded', typeWriter);

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
    return function () {
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
    element.addEventListener('focus', function () {
        this.style.outline = '2px solid var(--accent)';
        this.style.outlineOffset = '2px';
    });

    element.addEventListener('blur', function () {
        this.style.outline = 'none';
    });
});
