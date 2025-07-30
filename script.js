// Modern JavaScript for IEEE Computer Society Website

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Sticky Navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = '0.5rem 2rem';
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        navbar.style.padding = '1rem 2rem';
        navbar.style.boxShadow = 'none';
    }
});

// Back to Top Button
const backToTopButton = document.getElementById('backToTop');
window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Contact Form Validation
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Simple validation
    if (name && email && message) {
        // In a real application, you would send this data to a server
        // For now, show a success message
        alert(`Thank you, ${name}! Your message has been sent successfully. We'll get back to you at ${email} soon.`);
        
        // Reset form
        this.reset();
    } else {
        alert('Please fill in all required fields.');
    }
});

// FAQ Accordion functionality
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const icon = question.querySelector('i');
        
        // Toggle answer visibility
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
        
        // Toggle icon
        icon.className = icon.className === 'fas fa-plus' ? 'fas fa-minus' : 'fas fa-plus';
    });
});

// Animate sections on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.section-title, .goal-card, .team-member, .blog-card, .contact-item, .faq-item');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Initialize animations
window.addEventListener('load', () => {
    // Set initial styles for animation
    const animatedElements = document.querySelectorAll('.section-title, .goal-card, .team-member, .blog-card, .contact-item, .faq-item');
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Trigger animations
    setTimeout(animateOnScroll, 100);
});

window.addEventListener('scroll', animateOnScroll);