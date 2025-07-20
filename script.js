// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.offsetTop;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Fade-in animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all elements with fade-in class
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });

    // Active navigation link highlighting
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    function updateActiveNav() {
        const scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const top = section.offsetTop;
            const bottom = top + section.offsetHeight;
            const id = section.getAttribute('id');

            if (scrollPos >= top && scrollPos <= bottom) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', updateActiveNav);

    // Project card hover effects
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Skill items hover animation delay
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
    });

    // Typing effect for hero subtitle (optional enhancement)
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        const text = heroSubtitle.textContent;
        heroSubtitle.textContent = '';
        
        let i = 0;
        function typeWriter() {
            if (i < text.length) {
                heroSubtitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        
        // Start typing effect after a delay
        setTimeout(typeWriter, 1000);
    }

    // Parallax effect for hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('.hero');
        if (parallax) {
            const speed = scrolled * 0.5;
            parallax.style.transform = `translateY(${speed}px)`;
        }
    });

    // Add loading animation
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
        
        // Trigger initial fade-in animations
        setTimeout(() => {
            document.querySelectorAll('.hero .fade-in').forEach(el => {
                el.classList.add('visible');
            });
        }, 500);
    });
});

// Resume modal functions
function viewResume() {
    const modal = document.getElementById('resumeModal');
    const iframe = document.getElementById('resumeFrame');
    
    iframe.src = 'resume.pdf';
    modal.style.display = 'block';
    
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
}

function closeResume() {
    const modal = document.getElementById('resumeModal');
    const iframe = document.getElementById('resumeFrame');
    
    modal.style.display = 'none';
    iframe.src = '';
    
    // Restore body scroll
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const modal = document.getElementById('resumeModal');
    if (event.target === modal) {
        closeResume();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeResume();
    }
});

// Contact form functionality (if needed in future)
function handleContactForm(event) {
    event.preventDefault();
    
    // Get form data
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Simple validation
    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }
    
    // Here you would typically send the data to a server
    // For now, we'll just show a success message
    alert('Thank you for your message! I\'ll get back to you soon.');
    event.target.reset();
}

// Social media link tracking (optional analytics)
function trackSocialClick(platform) {
    console.log(`Social link clicked: ${platform}`);
    // Add analytics tracking here if needed
}

// Add click tracking to social links
document.addEventListener('DOMContentLoaded', function() {
    const socialLinks = document.querySelectorAll('.social-link');
    
    socialLinks.forEach(link => {
        link.addEventListener('click', function() {
            const href = this.getAttribute('href');
            let platform = 'unknown';
            
            if (href.includes('github')) platform = 'GitHub';
            else if (href.includes('linkedin')) platform = 'LinkedIn';
            else if (href.includes('mailto')) platform = 'Email';
            
            trackSocialClick(platform);
        });
    });
});

// Performance optimization: Lazy load project images
function initLazyLoading() {
    const projectImages = document.querySelectorAll('.project-image');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                // Add any image loading logic here
                imageObserver.unobserve(img);
            }
        });
    });
    
    projectImages.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', initLazyLoading);

// Add smooth reveal animation for timeline items
function initTimelineAnimation() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateX(0)';
                }, index * 200);
            }
        });
    }, { threshold: 0.3 });
    
    timelineItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-50px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        timelineObserver.observe(item);
    });
}

// Initialize timeline animation
document.addEventListener('DOMContentLoaded', initTimelineAnimation);

// Add particles or background animation (lightweight)
function createParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgba(99, 102, 241, 0.3);
            border-radius: 50%;
            pointer-events: none;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${5 + Math.random() * 10}s infinite linear;
        `;
        hero.appendChild(particle);
    }
    
    // Add CSS animation for particles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0% { transform: translateY(0px) rotate(0deg); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
}

// Initialize particles
document.addEventListener('DOMContentLoaded', createParticles);
