// Green Light App Website JavaScript

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Testimonial Slider
    setupTestimonials();
    
    // FAQ Toggles
    setupFAQs();
    
    // Form Submission
    setupContactForm();
});

// Testimonial Slider Functionality
function setupTestimonials() {
    const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;
    let timer;
    
    // Auto-rotate testimonials
    startTestimonialTimer();
    
    // Event listeners for dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateTestimonial();
            resetTestimonialTimer();
        });
    });
    
    function updateTestimonial() {
        testimonials.forEach((testimonial, index) => {
            testimonial.classList.remove('active');
            dots[index].classList.remove('active');
        });
        
        testimonials[currentIndex].classList.add('active');
        dots[currentIndex].classList.add('active');
    }
    
    function nextTestimonial() {
        currentIndex = (currentIndex + 1) % testimonials.length;
        updateTestimonial();
    }
    
    function startTestimonialTimer() {
        timer = setInterval(nextTestimonial, 5000);
    }
    
    function resetTestimonialTimer() {
        clearInterval(timer);
        startTestimonialTimer();
    }
}

// Current testimonial select function (called from HTML)
function currentTestimonial(index) {
    const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.dot');
    
    // Make index 0-based
    const newIndex = index - 1;
    
    // Remove active class from all testimonials and dots
    testimonials.forEach(testimonial => testimonial.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Add active class to selected testimonial and dot
    testimonials[newIndex].classList.add('active');
    dots[newIndex].classList.add('active');
}

// FAQ Toggle Functionality
function setupFAQs() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    // Add click event to each FAQ item
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Toggle active class
            const isActive = item.classList.contains('active');
            
            // Close all FAQs
            faqItems.forEach(faq => {
                faq.classList.remove('active');
            });
            
            // If the clicked FAQ wasn't active, make it active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}

// Toggle FAQ function (called from HTML)
function toggleFAQ(element) {
    const faqItem = element.parentElement;
    faqItem.classList.toggle('active');
}

// Contact Form Submission
function setupContactForm() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Validate form (simple validation)
            if (!name || !email || !message) {
                alert('Please fill out all required fields.');
                return;
            }
            
            // Simulate form submission
            contactForm.innerHTML = `
                <div style="text-align: center; padding: 2rem;">
                    <i class="fas fa-check-circle" style="color: var(--primary-color); font-size: 3rem; margin-bottom: 1rem;"></i>
                    <h3>Thank You!</h3>
                    <p>Your message has been sent. We'll get back to you as soon as possible.</p>
                </div>
            `;
        });
    }
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        if (href !== '#') {
            e.preventDefault();
            
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
}); 