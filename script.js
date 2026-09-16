// Countdown Timer Logic
let countdownSeconds = 10;
const telegramLink = 'https://t.me/+jp67h0LYAeo0NGY1';

function startCountdown() {
    const timerElement = document.getElementById('timer');
    
    const countdownInterval = setInterval(() => {
        timerElement.textContent = countdownSeconds;
        
        if (countdownSeconds <= 0) {
            clearInterval(countdownInterval);
            // Automatically redirect to Telegram channel after 10 seconds
            window.open(telegramLink, '_blank');
            // Reset the timer for next visit
            countdownSeconds = 10;
            timerElement.textContent = '10';
        } else {
            countdownSeconds--;
        }
    }, 1000);
}

// Start countdown when page loads
window.addEventListener('DOMContentLoaded', () => {
    startCountdown();
});

// Scroll to telegram section when CTA button is clicked
function scrollToChannel() {
    const telegramSection = document.getElementById('telegram');
    telegramSection.scrollIntoView({ behavior: 'smooth' });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all service cards and testimonial cards
document.querySelectorAll('.service-card, .testimonial-card').forEach(card => {
    card.style.opacity = '0';
    observer.observe(card);
});