document.getElementById('theme-toggle').addEventListener('click', function () {
  const body = document.body;
  const themeToggle = this;
  
  body.classList.toggle('dark-mode');

  // Optional: Save theme preference to local storage
  if (body.classList.contains('dark-mode')) {
    themeToggle.textContent = 'Light Mode';
    localStorage.setItem('theme', 'dark');
  } else {
    themeToggle.textContent = 'Dark Mode';
    localStorage.setItem('theme', 'light');
  }
});

// Optional: Apply theme on page load based on local storage
document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const themeToggle = document.getElementById('them-toggle')

  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.textContent = 'Light Mode';
  } else {
    body.classList.remove('dark-mode');
    themeToggle.textContent = 'Dark Mode'
  }
});


const typingText = document.getElementById("typing-text");
const cursor = document.getElementById("cursor");

const phrases = [
  "Passionate Student",
  "Web Developer",
  "Robotics Explorer",
  "Lifelong Learner",
  "Python Enthusiast",
  "Mathematics Lover"
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typePhrase() {
  const currentPhrase = phrases[phraseIndex];

  if (!isDeleting) {
    typingText.textContent = currentPhrase.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === currentPhrase.length) {
      setTimeout(() => {
        isDeleting = true;
        typePhrase();
      }, 2000);
      return;
    }
  } else {
    typingText.textContent = currentPhrase.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      setTimeout(typePhrase, 500);
      return;
    }
  }

  setTimeout(typePhrase, isDeleting ? 80 : 120);
}

typePhrase();