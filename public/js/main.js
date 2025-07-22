document.addEventListener('DOMContentLoaded', function() {

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

  // Close mobile menu when navigation links are clicked
  const navbarLinks = document.querySelectorAll('.navbar-menu .navbar-item');
  const navbarBurger = document.querySelector('.navbar-burger');
  const navbarMenu = document.getElementById('navbarBasicExample');

  navbarLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navbarBurger && navbarMenu) {
        navbarBurger.classList.remove('is-active');
        navbarMenu.classList.remove('is-active');
      }
    });
  });

  // Dynamic image distribution
  const statics = ["JunkForce company vehicles and hero.webp","JunkForce team with Solid Waste Disposal Card.webp"];
  let allImages = [
    "JunkForce team arriving at the job site.webp",
    "JunkForce team at the job site and company vehicle loaded with garbage.webp",
    "JunkForce team at the job site 6.webp",
    "JunkForce team at the job site 5.webp",
    "JunkForce team loading company vehicle with garbage.webp",
    "JunkForce team operating power tools at the job site 3.webp",
    "JunkForce team operating power tools at the job site 2.webp",   
    "JunkForce team operating power tools at the job site.webp",
    "JunkForce team at the job site with company vehicle loaded with garbage.webp",
    "JunkForce team at the job site 4.webp",
    "JunkForce and TheBus.webp",
    "JunkForce team and company vehicle throwing shakas.webp",
    "JunkForce company vehicle loaded with garbage 3.webp",
    "JunkForce company vehicle loaded with garbage 2.webp",
    "Crawl space of residence at the job site.webp",
    "JunkForce company vehicle.webp",
    "Garbage at the job site 3.webp",
    "Garbage at the job site 2.webp",
    "JunkForce team fueling up at gas station.webp",
    "JunkForce team and company vehicle loaded with garbage 5.webp",
    "JunkForce team and company vehicle loaded with garbage 4.webp",
    "JunkForce team and company vehicle loaded with garbage 3.webp",
    "Garbage at the job site.webp",
    "JunkForce team and company vehicle loaded with garbage 2.webp",
    "JunkForce team and company vehicle at the job site.webp",
    "JunkForce team sweeping at the job site.webp",
    "JunkForce team at the job site 3.webp",
    "JunkForce company vehicle loaded with garbage.webp",
    "JunkForce team at Solid Waste Disposal.webp",
    "JunkForce team and company vehicle loaded with garbage.webp",
    "JunkForce team and company vehicle loaded.webp",
    "JunkForce Team at the job site 2.webp",
    "Garbage disposal at job site.webp",
    "JunkForce team operating vehicle.webp",
    "Disposing a pallet.webp",
    "JunkForce company vehicle loaded 2.webp",
    "JunkForce company vehicle loaded.webp",
    "JunkForce team at the job site.webp",
    "JunkForce Team and company vehicle.webp"
  ].filter(f => !statics.includes(f));
  
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
        const altText = filename
          .replace('.webp', '')
          .replace(/-/g, ' ')
          .replace(/\b\w/g, l => l.toUpperCase())
          .replace(/\d+$/, '');
        img.alt = altText;
        img.className = 'masonry-img';
        img.loading = 'lazy';
        img.setAttribute('role', 'listitem');
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
    lightboxClose.focus();
  }

  function closeLightbox() {
    lightboxModal.classList.remove('active');
    lightboxModal.setAttribute('aria-hidden', 'true');

    const lastFocusedElement = document.querySelector('.masonry-img:focus');
    if (lastFocusedElement) {
      lastFocusedElement.focus();
    }
  }

  // Clickable images
  function addLightboxListeners() {
    const masonryImages = document.querySelectorAll('img');
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

  // Form validation and submission handling
  const contactForm = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');
  const buttonText = submitBtn.querySelector('.button-text');
  const spinner = submitBtn.querySelector('.spinner');
  const submitStatus = document.getElementById('submit-status');

  // Validation functions
  function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorElement = document.getElementById(`${fieldId}-error`);
    field.classList.add('is-danger');
    field.setAttribute('aria-invalid', 'true');
    errorElement.textContent = message;
    errorElement.classList.remove('is-hidden');
  }

  function clearError(fieldId) {
    const field = document.getElementById(fieldId);
    const errorElement = document.getElementById(`${fieldId}-error`);
    field.classList.remove('is-danger');
    field.setAttribute('aria-invalid', 'false');
    errorElement.classList.add('is-hidden');
  }

  function validateName(name) {
    if (!name.trim()) return 'Name is required';
    if (name.length < 2) return 'Name must be at least 2 characters';
    if (!/^[A-Za-z\s]+$/.test(name)) return 'Name can only contain letters and spaces';
    return null;
  }

  function validateEmail(email) {
    if (!email.trim()) return 'Email is required';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return 'Please enter a valid email address';
    return null;
  }

  function validateMessage(message) {
    if (!message.trim()) return 'Message is required';
    if (message.length < 10) return 'Message must be at least 10 characters';
    if (message.length > 1000) return 'Message must be less than 1000 characters';
    return null;
  }

  // Real-time validation
  const formFields = ['name', 'email', 'message'];
  formFields.forEach(fieldId => {
    const field = document.getElementById(fieldId);
    if (field) {
      field.addEventListener('blur', () => {
        const value = field.value;
        let error = null;

        switch (fieldId) {
          case 'name':
            error = validateName(value);
            break;
          case 'email':
            error = validateEmail(value);
            break;
          case 'message':
            error = validateMessage(value);
            break;
        }

        if (error) {
          showError(fieldId, error);
        } else {
          clearError(fieldId);
        }
      });

      field.addEventListener('input', () => {
        clearError(fieldId);
      });
    }
  });

  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();

      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      const nameError = validateName(name);
      const emailError = validateEmail(email);
      const messageError = validateMessage(message);

      if (nameError) showError('name', nameError);
      if (emailError) showError('email', emailError);
      if (messageError) showError('message', messageError);

      if (!nameError && !emailError && !messageError) {
        // Show loading state
        buttonText.classList.add('is-hidden');
        spinner.classList.remove('is-hidden');
        submitBtn.disabled = true;
        submitStatus.textContent = 'Sending message...';
        submitStatus.classList.remove('is-hidden');

        contactForm.submit();
      }
    });
  }

})
