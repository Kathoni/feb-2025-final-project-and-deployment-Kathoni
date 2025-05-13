// ================================
// 🌙 Dark/Light Mode Toggle
// ================================
const toggleBtns = document.querySelectorAll('#toggle-mode');

// Apply theme on page load based on localStorage
if (localStorage.getItem('theme') === 'dark') {
  document.documentElement.setAttribute('data-theme', 'dark');
  toggleBtns.forEach(btn => btn.textContent = '☀️');
}

// Toggle between dark and light themes
toggleBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    if (isDark) {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
      toggleBtns.forEach(btn => btn.textContent = '🌙');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      toggleBtns.forEach(btn => btn.textContent = '☀️');
    }
  });
});


// ================================
// 🖼️ Home Page Slider (optional)
// ================================
const sliderImg = document.getElementById('slider-img');
if (sliderImg) {
  const images = [
    'images/download.jpg',
    'images/download2.jpg',
    'images/jolly rogers.jpg'
  ];
  let currentIndex = 0;

  setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    sliderImg.src = images[currentIndex];
  }, 5000);
}


// ================================
// ✉️ Contact Form Validation
// ================================
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    const email = document.getElementById('email').value;
    if (!email.includes('@')) {
      alert('Please enter a valid email address.');
      e.preventDefault();
    }
  });
}


// ================================
// 🎭 Fade-In Animation for .fade-in elements
// ================================
const revealOnScroll = () => {
  const fadeInElements = document.querySelectorAll('.fade-in');
  fadeInElements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;
    if (position < screenHeight - 100) {
      el.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll); // In case elements are already in view on load
