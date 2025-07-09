// // Toast utility
// function showToast(message, type = 'is-success') {
//   const toast = document.getElementById('toast');
//   toast.className = `notification ${type}`;
//   toast.textContent = message;
//   toast.classList.remove('is-hidden');
//   setTimeout(() => {
//     toast.classList.add('is-hidden');
//   }, 3500);
// }

// // Input sanitization
// function sanitizeInput(str) {
//   return str.replace(/[<>]/g, '').trim();
// }

// // Validation helpers
// function isValidName(name) {
//   return /^[A-Za-z\s]{2,50}$/.test(name);
// }
// function isValidEmail(email) {
//   return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
// }
// function isValidMessage(msg) {
//   return msg.length >= 10 && msg.length <= 1000;
// }

document.addEventListener('DOMContentLoaded', function() {
  // Footer year
  var yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Contact form handler
//   var contactForm = document.getElementById('contactForm');
//   if (contactForm) {
//     contactForm.addEventListener('submit', function(e) {
//       e.preventDefault();
//       let name = sanitizeInput(document.getElementById('name').value);
//       let email = sanitizeInput(document.getElementById('email').value);
//       let message = sanitizeInput(document.getElementById('message').value);

//       if (!isValidName(name)) {
//         showToast('Please enter a valid name (letters and spaces, 2-50 characters).', 'is-danger');
//         return;
//       }
//       if (!isValidEmail(email)) {
//         showToast('Please enter a valid email address.', 'is-danger');
//         return;
//       }
//       if (!isValidMessage(message)) {
//         showToast('Message must be between 10 and 1000 characters.', 'is-danger');
//         return;
//       }

//     });
//   }
// }); 