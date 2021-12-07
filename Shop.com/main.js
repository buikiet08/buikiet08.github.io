var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });
  var swiper = new Swiper(".product-container", {
    slidesPerView: 4,
    spaceBetween: 30,
  });
  if(window.innerWidth <= 490) {
    var swiper = new Swiper(".product-container", {
      slidesPerView: 2,
      spaceBetween: 30,
    });
  }

  var swiper = new Swiper(".company", {
    slidesPerView: 5,
    pagination: {
      el: ".swiper-pagination",
    },
  });

const btnbar = document.querySelector('.bar-menu');
const btnclose = document.querySelector('.btn-close-menu');

btnbar.addEventListener('click', (e) => {
    document.querySelector('.menu').classList.add('activemenu')
})
btnclose.addEventListener('click', () => {
  console.log('jajjaa')
  document.querySelector('.menu').classList.remove('activemenu')
})