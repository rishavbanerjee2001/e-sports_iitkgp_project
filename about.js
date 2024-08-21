const swiper = new Swiper('.slider-wrapper', {
  
    loop: true,
    grabCursor : true,
        spaceBetween : 30,



    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable : true,
      dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints:{
    0:{
        slidesPerView : 1
    },
    620:{
        slidesPerView : 2
    },
    1024:{
        slidesPerView : 3
    }
}
  });

  
  const cv = document.querySelector('.download-cv');
cv.addEventListener('click', function() {
  // Code to run when the button is clicked
  alert('Bhai abhi CV maine ERP mein hi upload nhi kiya!');
});  