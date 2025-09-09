// ===== Typing Animation =====
const typingText = document.querySelector('.typing-text');
const words = ['Full-Stack Developer', 'C++ Enthusiast', 'AI Explorer', 'Problem Solver'];
let i = 0, j = 0;
let currentWord = '';
let isDeleting = false;

function type() {
    if (i >= words.length) i = 0;
    currentWord = words[i];

    if (isDeleting) {
        typingText.textContent = currentWord.substring(0, j--);
    } else {
        typingText.textContent = currentWord.substring(0, j++);
    }

    if (!isDeleting && j === currentWord.length + 1) {
        isDeleting = true;
        setTimeout(type, 1500);
    } else if (isDeleting && j === 0) {
        isDeleting = false;
        i++;
        setTimeout(type, 300);
    } else {
        setTimeout(type, isDeleting ? 50 : 150);
    }
}

type();

// ===== Smooth Scroll =====
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// ===== Contact Form Submission =====
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Message sent! (This is just a demo, integrate backend to send real messages)');
    contactForm.reset();
});
