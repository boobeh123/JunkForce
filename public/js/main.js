document.addEventListener('DOMContentLoaded', function() {
    
    // Copyright year
    const yearSpan = document.querySelector("#year");
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
    }
  
    // Hamburger nav functionality
    const navToggle = document.querySelector('.navbar-burger');
    const navMenu = document.querySelector('.navbar-menu');
    const navLinks = document.querySelectorAll('.navbar-links a');
    
    if (navToggle && navMenu) {
      // Toggle menu on burger click
      navToggle.addEventListener('click', () => {
        const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
        navToggle.setAttribute('aria-expanded', !isExpanded);
        navMenu.classList.toggle('is-active');
      });
  
      // Close menu when clicking a nav link
      navLinks.forEach(link => {
        link.addEventListener('click', () => {
          navToggle.setAttribute('aria-expanded', 'false');
          navMenu.classList.remove('is-active');
        });
      });
  
      // Close menu when clicking outside
      document.addEventListener('click', (e) => {
        if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
          navToggle.setAttribute('aria-expanded', 'false');
          navMenu.classList.remove('is-active');
        }
      });
  
      // Close menu on Escape key
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu.classList.contains('is-active')) {
          navToggle.setAttribute('aria-expanded', 'false');
          navMenu.classList.remove('is-active');
        }
      });
    }
  
    // Lightbox modal functionality
    const lightboxModal = document.getElementById('lightbox-modal');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxClose = document.getElementById('lightbox-close');
    const lightboxBackdrop = document.querySelector('.lightbox-backdrop');
  
    function openLightbox(imageSrc, imageAlt) {
      lightboxImage.src = imageSrc;
      lightboxImage.alt = imageAlt;
      lightboxModal.classList.add('active');
      lightboxModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      lightboxClose.focus();
    }
  
    function closeLightbox() {
      lightboxModal.classList.remove('active');
      lightboxModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  
    // Add click listeners gallery images only
    const galleryImages = document.querySelectorAll('.masonry-gallery img');
    galleryImages.forEach(img => {
      img.addEventListener('click', () => {
        openLightbox(img.src, img.alt);
      });
      
      // Make images keyboard accessible
      img.setAttribute('tabindex', '0');
      img.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openLightbox(img.src, img.alt);
        }
      });
    });
  
    // Close lightbox on close button click
    if (lightboxClose) {
      lightboxClose.addEventListener('click', closeLightbox);
    }
  
    // Close lightbox on backdrop click
    if (lightboxBackdrop) {
      lightboxBackdrop.addEventListener('click', closeLightbox);
    }
  
    // Close lightbox on Escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && lightboxModal.classList.contains('active')) {
        closeLightbox();
      }
    });
  
  });