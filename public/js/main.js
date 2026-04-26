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
  
    // Service card scroll-reveal
    const serviceCards = document.querySelectorAll('.service-card');

    if (serviceCards.length) {
      const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const card = entry.target;
            const delay = Array.from(serviceCards).indexOf(card) * 130;
            setTimeout(() => {
              card.classList.add('is-visible');
              card.addEventListener('transitionend', () => {
                card.classList.remove('will-animate');
              }, { once: true });
            }, delay);
            cardObserver.unobserve(card);
          }
        });
      }, { threshold: 0.15 });

      serviceCards.forEach((card) => {
        card.classList.add('will-animate');
        cardObserver.observe(card);
      });
    }

    // Gallery scroll-reveal + See More
    const galleryGrid = document.querySelector('.masonry-gallery');
    const seeMoreBtn = document.querySelector('.gallery-see-more');
    const galleryCols = document.querySelectorAll('.masonry-column');

    const revealItem = (item, colIndex) => {
      item.classList.add('will-animate');
      setTimeout(() => {
        item.classList.add('is-visible');
        item.addEventListener('transitionend', () => {
          item.classList.remove('will-animate');
        }, { once: true });
      }, colIndex * 80);
    };

    const galleryObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const item = entry.target;
          const col = item.closest('.masonry-column');
          const colIndex = Array.from(galleryCols).indexOf(col);
          revealItem(item, colIndex);
          galleryObserver.unobserve(item);
        }
      });
    }, { threshold: 0.1 });

    // Observe initially visible items (first 3 per column)
    galleryCols.forEach((col) => {
      col.querySelectorAll('.gallery-item').forEach((item, i) => {
        if (i < 3) galleryObserver.observe(item);
      });
    });

    // See More — reveal hidden items then observe them
    if (seeMoreBtn && galleryGrid) {
      seeMoreBtn.addEventListener('click', () => {
        galleryGrid.classList.add('is-expanded');
        seeMoreBtn.setAttribute('aria-expanded', 'true');
        seeMoreBtn.style.display = 'none';

        requestAnimationFrame(() => {
          galleryCols.forEach((col) => {
            col.querySelectorAll('.gallery-item').forEach((item, i) => {
              if (i >= 3) galleryObserver.observe(item);
            });
          });
        });
      });
    }

    // About feature scroll-reveal
    const aboutFeatures = document.querySelectorAll('.about-feature');

    if (aboutFeatures.length) {
      const aboutObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const feature = entry.target;
            const delay = Array.from(aboutFeatures).indexOf(feature) * 100;
            setTimeout(() => {
              feature.classList.add('is-visible');
              feature.addEventListener('transitionend', () => {
                feature.classList.remove('will-animate');
              }, { once: true });
            }, delay);
            aboutObserver.unobserve(feature);
          }
        });
      }, { threshold: 0.15 });

      aboutFeatures.forEach((feature) => {
        feature.classList.add('will-animate');
        aboutObserver.observe(feature);
      });
    }

  });