document.getElementById('theme-toggle').addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');
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
        typePhrase(); // Call again after delay
      }, 2000); // Pause on full word
      return;
    }
  } else {
    typingText.textContent = currentPhrase.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      setTimeout(typePhrase, 500); // Pause before typing new word
      return;
    }
  }

  setTimeout(typePhrase, isDeleting ? 80 : 120); // Smoother typing/deleting
}

typePhrase();

const hamburger = document.getElementById('hamburger');
const navlinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navlinks.classList.toggle('show');
});