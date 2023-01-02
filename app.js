document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Add a click event on each of them
  $navbarBurgers.forEach( el => {
    el.addEventListener('click', () => {

      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle('is-active');
      $target.classList.toggle('is-active');

    });
  });

});
var swiper = new Swiper(".mySwiper", {
  centerslides:true,
  spaceBetween:27,
  loop:true,
  pagination:{
    el:".swiper-pagination",
    clickable: true,
  },

  autoplay:{
    delay:2500,
    disableOnInteraction:false,
  },
  breakpoints:{
    640:{
      slidesPerView:1,
    },
    768:{
      slidesPerView:2,
    },
    1024:{
      slidesPerView:4
    }
  }
});

var swiper = new Swiper(".mySwiper2", {
  centerslides:true,
  spaceBetween:27,
  loop:true,
  pagination:{
    el:".swiper-pagination",
    clickable: true,
  },

  autoplay:{
    delay:2500,
    disableOnInteraction:false,
  },
  breakpoints:{
    640:{
      slidesPerView:1,
    },
    768:{
      slidesPerView:2,
    },
    1024:{
      slidesPerView:3
    }
  }
});

AOS.init();