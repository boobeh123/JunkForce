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

})
