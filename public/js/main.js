document.addEventListener('DOMContentLoaded', function() {

    AOS.init();

  let yearSpan = document.querySelector("#year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  let burgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  burgers.forEach(function (el) {
    el.addEventListener('click', function () {
      let target = el.dataset.target;
      let menu = document.getElementById(target);
      el.classList.toggle('is-active');
      if (menu) {
        menu.classList.toggle('is-active');
      }
    });
  });

  const statics = ["5.webp","11.webp","21.webp","35.webp","39.webp","14.webp","1.webp","44.webp","15.webp"];
  let allImages = Array.from({length: 44}, (_, i) => `${i+1}.webp`).filter(f => f !== "15.webp");
  let shownImages = new Set();
  let currentImageIndex = 0;
  
  // Fisher-Yates shuffle
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  // Get next image, reshuffle when all have been shown
  function getNextImage() {
    if (shownImages.size >= allImages.length) {
      // All images shown, reset and reshuffle
      shownImages.clear();
      currentImageIndex = 0;
      allImages = shuffleArray([...allImages]);
    }
    
    const image = allImages[currentImageIndex];
    shownImages.add(image);
    currentImageIndex++;
    
    return image;
  }
  
  const gallery = document.querySelector('.junkforce-gallery');
  if (gallery) {
    // Initial shuffle
    allImages = shuffleArray(allImages);
    
    // Add all images to gallery
    allImages.forEach((filename, idx) => {
      if (!statics.includes(filename)) {
        const img = document.createElement('img');
        img.src = `/public/images/${filename}`;
        img.alt = `Gallery ${filename.replace('.webp','')}`;
        img.className = 'junkforce-img';
        img.loading = 'lazy';
        img.width = 180;
        img.height = 220;
        gallery.appendChild(img);
      }
    });
  }

  // Glider.js initialization
  let glider;
  if (gallery) {
    glider = new Glider(gallery, {
      slidesToShow: 4,
      slidesToScroll: 1,
      draggable: true,
      dots: '.glider-dots',
      arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
      },
      responsive: [
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  }

  let autoplayInterval;
  let isAutoplayActive = true;
  const autoplayToggle = document.getElementById('autoplay-toggle');
  const pauseIcon = autoplayToggle?.querySelector('.pause-icon');
  const playIcon = autoplayToggle?.querySelector('.play-icon');
  
  function startAutoplay() {
    if (!glider || !isAutoplayActive) return;
    autoplayInterval = setInterval(() => {
      if (!glider) return;
      let next = glider.page + 1;
      if (next >= glider.dots.childElementCount) next = 0;
      glider.scrollItem(next * glider.opt.slidesToShow);
    }, 2000);
  }
  
  function stopAutoplay() {
    clearInterval(autoplayInterval);
  }
  
  function toggleAutoplay() {
    isAutoplayActive = !isAutoplayActive;
    
    if (isAutoplayActive) {
      startAutoplay();
      autoplayToggle.classList.remove('paused');
      autoplayToggle.setAttribute('aria-label', 'Pause autoplay');
      autoplayToggle.setAttribute('title', 'Pause autoplay');
      pauseIcon.style.display = 'block';
      playIcon.style.display = 'none';
    } else {
      stopAutoplay();
      autoplayToggle.classList.add('paused');
      autoplayToggle.setAttribute('aria-label', 'Resume autoplay');
      autoplayToggle.setAttribute('title', 'Resume autoplay');
      pauseIcon.style.display = 'none';
      playIcon.style.display = 'block';
    }
  }
  
  if (gallery) {
    gallery.addEventListener('mouseover', stopAutoplay);
    gallery.addEventListener('mouseout', () => {
      if (isAutoplayActive) startAutoplay();
    });
    startAutoplay();
  }
  
  if (autoplayToggle) {
    autoplayToggle.addEventListener('click', toggleAutoplay);
  }

  document.addEventListener('keydown', function(e) {
    if (!glider) return;
    if (e.key === 'ArrowLeft') {
      glider.scrollItem(Math.max(0, glider._o.slide - 1));
    } else if (e.key === 'ArrowRight') {
      glider.scrollItem(glider._o.slide + 1);
    }
  });

})
