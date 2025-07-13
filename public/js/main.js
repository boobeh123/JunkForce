document.addEventListener('DOMContentLoaded', function() {

    AOS.init();
  // Dynamic date copyright
  let yearSpan = document.querySelector("#year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
  // Hamburger menu functionality
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

  // Dynamic image distribution
  const statics = ["5.webp","11.webp","21.webp","35.webp","39.webp","14.webp","1.webp","44.webp","15.webp"];
  let allImages = Array.from({length: 44}, (_, i) => `${i+1}.webp`).filter(f => f !== "15.webp");
  
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  function createImageArrays() {
    const shuffledImages = shuffleArray([...allImages]);
    const arrays = [[], [], []];
    const availableImages = shuffledImages.filter(image => !statics.includes(image));
    
    // Calculate how many images each column should get
    const totalImages = availableImages.length;
    const imagesPerColumn = Math.floor(totalImages / 3);
    const remainder = totalImages % 3;
    
    // Distribute images evenly across 3 arrays
    let currentIndex = 0;
    
    for (let columnIndex = 0; columnIndex < 3; columnIndex++) {
      // Calculate how many images this column should get
      let imagesForThisColumn = imagesPerColumn;
      
      // Distribute remainder images to first few columns
      if (columnIndex < remainder) {
        imagesForThisColumn++;
      }
      
      // Add the calculated number of images to this column
      for (let i = 0; i < imagesForThisColumn; i++) {
        if (currentIndex < availableImages.length) {
          arrays[columnIndex].push(availableImages[currentIndex]);
          currentIndex++;
        }
      }
    }
    
    return arrays;
  }
  
  // Populate masonry columns
  function populateMasonryGallery() {
    const imageArrays = createImageArrays();
    const columns = document.querySelectorAll('.masonry-column');
    
    columns.forEach((column, columnIndex) => {
      const images = imageArrays[columnIndex];
      
      images.forEach((filename) => {
        const img = document.createElement('img');
        img.src = `/public/images/${filename}`;
        img.alt = `Gallery ${filename.replace('.webp','')}`;
        img.className = 'masonry-img';
        img.loading = 'lazy';
        column.appendChild(img);
      });
    });
  }
  
  // Initialize masonry gallery
  const masonryGallery = document.querySelector('.masonry-gallery');
  if (masonryGallery) {
    populateMasonryGallery();
  }



  // Lightbox/modal
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxImage = document.getElementById('lightbox-image');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxBackdrop = document.querySelector('.lightbox-backdrop');

  function openLightbox(imageSrc, imageAlt) {
    lightboxImage.src = imageSrc;
    lightboxImage.alt = imageAlt;
    lightboxModal.classList.add('active');
    lightboxModal.setAttribute('aria-hidden', 'false');
    
    // Prevent background scrolling
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
    document.body.style.top = `-${window.scrollY}px`;
  }

  function closeLightbox() {
    lightboxModal.classList.remove('active');
    lightboxModal.setAttribute('aria-hidden', 'true');
    
    // Restore background scrolling
    const scrollY = document.body.style.top;
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.overflow = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
  }

  // Clickable images
  function addLightboxListeners() {
    const masonryImages = document.querySelectorAll('.masonry-img');
    masonryImages.forEach(img => {
      img.addEventListener('click', () => {
        openLightbox(img.src, img.alt);
      });
    });
  }

  // Click beside image to side to close
  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }
  if (lightboxBackdrop) {
    lightboxBackdrop.addEventListener('click', closeLightbox);
  }

  // ESC to close image 
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && lightboxModal.classList.contains('active')) {
      closeLightbox();
    }
  });

  // Listen for clicks/keypresses after images are distributed
  if (masonryGallery) {
    setTimeout(addLightboxListeners, 100);
  }

})
