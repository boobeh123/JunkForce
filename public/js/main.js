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
        navToggle.classList.toggle('is-active');
      });

      // Close menu when clicking a nav link
      navLinks.forEach(link => {
        link.addEventListener('click', () => {
          navToggle.setAttribute('aria-expanded', 'false');
          navMenu.classList.remove('is-active');
          navToggle.classList.remove('is-active');
        });
      });

      // Close menu when clicking outside
      document.addEventListener('click', (e) => {
        if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
          navToggle.setAttribute('aria-expanded', 'false');
          navMenu.classList.remove('is-active');
          navToggle.classList.remove('is-active');
        }
      });

      // Close menu on Escape key
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu.classList.contains('is-active')) {
          navToggle.setAttribute('aria-expanded', 'false');
          navMenu.classList.remove('is-active');
          navToggle.classList.remove('is-active');
        }
      });
    }

    // Sticky nav — solidify background on scroll
    const mainHeader = document.querySelector('header');
    if (mainHeader) {
      window.addEventListener('scroll', () => {
        mainHeader.classList.toggle('is-scrolled', window.scrollY > 60);
      }, { passive: true });
    }

    // Active nav link tracking via IntersectionObserver
    const navSections = document.querySelectorAll('main section[id]');
    const navLinkItems = document.querySelectorAll('.navbar-links a');

    if (navSections.length && navLinkItems.length) {
      const activeLinkObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            navLinkItems.forEach((link) => link.classList.remove('is-active'));
            const activeLink = document.querySelector(
              `.navbar-links a[href="#${entry.target.id}"]`
            );
            if (activeLink) activeLink.classList.add('is-active');
          }
        });
      }, { rootMargin: '-20% 0px -75% 0px' });

      navSections.forEach((section) => activeLinkObserver.observe(section));
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

    // Gallery scroll-reveal
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

    // Auto-pause other videos when one starts playing
    const allVideos = document.querySelectorAll('.video-container video');

    allVideos.forEach((video) => {
      video.addEventListener('play', () => {
        allVideos.forEach((other) => {
          if (other !== video && !other.paused) {
            other.pause();
          }
        });
      });
    });

    // Video card scroll-reveal
    const videoCards = document.querySelectorAll('.video-card');

    if (videoCards.length) {
      const videoCardObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const card = entry.target;
            const delay = Array.from(videoCards).indexOf(card) * 130;
            setTimeout(() => {
              card.classList.add('is-visible');
              card.addEventListener('transitionend', () => {
                card.classList.remove('will-animate');
              }, { once: true });
            }, delay);
            videoCardObserver.unobserve(card);
          }
        });
      }, { threshold: 0.15 });

      videoCards.forEach((card) => {
        card.classList.add('will-animate');
        videoCardObserver.observe(card);
      });
    }

    // Videos section — rising particle background
    const particleCanvas = document.querySelector('.videos-particles');

    if (particleCanvas) {
      const ctx = particleCanvas.getContext('2d');
      const videosSection = document.querySelector('#videos');
      const PARTICLE_COUNT = 55;
      let animationId = null;
      let particles = [];

      function resizeCanvas() {
        particleCanvas.width = videosSection.offsetWidth;
        particleCanvas.height = videosSection.offsetHeight;
      }

      function createParticle(randomiseY = false) {
        const maxLife = Math.random() * 420 + 1080;
        return {
          x: Math.random() * particleCanvas.width,
          y: randomiseY
            ? Math.random() * particleCanvas.height
            : particleCanvas.height + Math.random() * 40,
          size: Math.random() * 7.5 + 1,
          speedY: Math.random() * 0.85 + 0.2,
          speedX: (Math.random() - 0.15) * 0.75,
          maxOpacity: Math.random() * 0.92 + 0.06,
          opacity: 0,
          life: randomiseY ? Math.floor(Math.random() * maxLife) : 0,
          maxLife,
        };
      }

      function updateParticle(p) {
        p.life++;
        p.x += p.speedX;
        p.y -= p.speedY;

        const progress = p.life / p.maxLife;
        if (progress < 0.2) {
          p.opacity = (progress / 0.2) * p.maxOpacity;
        } else if (progress > 0.7) {
          p.opacity = ((1 - progress) / 0.3) * p.maxOpacity;
        } else {
          p.opacity = p.maxOpacity;
        }

        if (p.life >= p.maxLife || p.y < -10) {
          Object.assign(p, createParticle(false));
        }
      }

      function drawParticle(p) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(141, 53%, 31%, ${p.opacity})`;
        ctx.fill();
      }

      function animate() {
        ctx.clearRect(0, 0, particleCanvas.width, particleCanvas.height);
        particles.forEach((p) => {
          updateParticle(p);
          drawParticle(p);
        });
        animationId = requestAnimationFrame(animate);
      }

      function init() {
        resizeCanvas();
        particles = Array.from(
          { length: PARTICLE_COUNT },
          (_, i) => createParticle(i < PARTICLE_COUNT)
        );
      }

      // Only animate when the section is visible
      const particleObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              if (!animationId) animate();
            } else {
              cancelAnimationFrame(animationId);
              animationId = null;
            }
          });
        },
        { threshold: 0.05 }
      );

      particleObserver.observe(videosSection);

      window.addEventListener('resize', () => {
        resizeCanvas();
      });

      init();
    }

    // Contact section scroll-reveal
    const contactCta = document.querySelector('.contact-cta');
    const contactFormWrap = document.querySelector('.contact-form-wrap');

    if (contactCta && contactFormWrap) {
      const contactObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            entry.target.addEventListener('transitionend', () => {
              entry.target.classList.remove('will-animate');
            }, { once: true });
            contactObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15 });

      [contactCta, contactFormWrap].forEach((el, i) => {
        el.classList.add('will-animate');
        el.style.transitionDelay = `${i * 120}ms`;
        contactObserver.observe(el);
      });
    }

    // Back to Top
    const backTopLink = document.querySelector('.footer-back-top');
    if (backTopLink) {
      backTopLink.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // Gallery page — dynamic photo count
    const photoCountEl = document.querySelector('#photo-count');
    const galleryPageGrid = document.querySelector('.gallery-page-grid');

    if (photoCountEl && galleryPageGrid) {
      const total = galleryPageGrid.querySelectorAll('.gallery-item').length;
      photoCountEl.textContent = total;
    }

    // Gallery page — observe all items (no See More needed)
    const galleryPageCols = document.querySelectorAll('.gallery-page-grid .masonry-column');

    if (galleryPageCols.length) {
      const pageGalleryObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const item = entry.target;
            const col = item.closest('.masonry-column');
            const colIndex = Array.from(galleryPageCols).indexOf(col);
            item.classList.add('will-animate');
            setTimeout(() => {
              item.classList.add('is-visible');
              item.addEventListener('transitionend', () => {
                item.classList.remove('will-animate');
              }, { once: true });
            }, colIndex * 80);
            pageGalleryObserver.unobserve(item);
          }
        });
      }, { threshold: 0.1 });

      galleryPageCols.forEach((col) => {
        col.querySelectorAll('.gallery-item').forEach((item) => {
          pageGalleryObserver.observe(item);
        });
      });
    }

  });