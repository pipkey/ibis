

const swiper = new Swiper(".swiper", {
  // Optional parameters
    direction: "horizontal",
    slidesPerView:2,
    spaceBetween:15,
    loop: true,
    // pagination: {
    //   el: '.swiper-pagination',
    //   clikable:true
    // },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320:{
        slidesPerView:1,
      },
      991:{
        slidesPerView:2,
      },
      1000:{
        spaceBetween:30,
        // slidesPerView:3,
        loop: true,
        
      }
    }
});
