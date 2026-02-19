// ===== Mobile menu toggle =====
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle?.addEventListener('click', () => {
  navLinks?.classList.toggle('active');
  navToggle?.setAttribute('aria-expanded', navLinks?.classList.contains('active'));
});

// Close menu when clicking a link (mobile)
navLinks?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks?.classList.remove('active');
  });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (navLinks?.classList.contains('active') && 
      !navLinks.contains(e.target) && 
      !navToggle?.contains(e.target)) {
    navLinks.classList.remove('active');
  }
});

// ===== Header scroll effect =====
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;
  if (currentScroll > 100) {
    header?.classList.add('scrolled');
  } else {
    header?.classList.remove('scrolled');
  }
  lastScroll = currentScroll;
});

// ===== Intersection Observer for fade-in animations =====
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.querySelectorAll('.section').forEach((section) => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(20px)';
  section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(section);
});

// Add visible class styles
const style = document.createElement('style');
style.textContent = `
  .section.visible {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
`;
document.head.appendChild(style);
