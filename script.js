// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});

// Close mobile menu on link click
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
  });
});

// Form submission (fake success message)
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const submitBtn = contactForm.querySelector('button[type="submit"]');
  submitBtn.textContent = 'Sending...';
  submitBtn.disabled = true;

  setTimeout(() => {
    contactForm.reset();
    formSuccess.style.display = 'block';
    submitBtn.textContent = 'Send Message';
    submitBtn.disabled = false;

    setTimeout(() => {
      formSuccess.style.display = 'none';
    }, 5000);
  }, 1000);
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ===== Featured card carousels =====
document.querySelectorAll("[data-carousel]").forEach((carousel) => {
  const track = carousel.querySelector("[data-track]");
  const prevBtn = carousel.querySelector("[data-prev]");
  const nextBtn = carousel.querySelector("[data-next]");
  const slides = Array.from(track.querySelectorAll("img"));

  let index = 0;

  function update() {
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  nextBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    index = (index + 1) % slides.length;
    update();
  });

  prevBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    index = (index - 1 + slides.length) % slides.length;
    update();
  });

  update();
});

