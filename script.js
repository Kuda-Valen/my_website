document.getElementById('theme-toggle').addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');

  // Optional: Save theme preference to local storage
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

// Optional: Apply theme on page load based on local storage
document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
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