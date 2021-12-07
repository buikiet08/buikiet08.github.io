// product
var swiper = new Swiper(".product-container", {
  slidesPerView: 4,
  spaceBetween: 30,
});
if(window.innerWidth <= 1023) {
  var swiper = new Swiper(".product-container", {
    slidesPerView: 2,
    spaceBetween: 30,
  });
}else if(window.innerWidth < 739 ) {
  var swiper = new Swiper(".product-container", {
    slidesPerView: 1,
    spaceBetween: 30,
  });
}
// company
var swiper = new Swiper(".company", {
  slidesPerView: 5,
  pagination: {
    el: ".swiper-pagination",
  },
});
if(window.innerWidth <= 1023) {
  var swiper = new Swiper(".company", {
    slidesPerView: 4,
    pagination: {
      el: ".swiper-pagination",
    },
  });
}else if(window.innerWidth < 739 ) {
  var swiper = new Swiper(".company", {
    slidesPerView: 2,
    pagination: {
      el: ".swiper-pagination",
    },
  });
}

const btnbar = document.querySelector('.bar-menu');
const btnclose = document.querySelector('.btn-close-menu');

btnbar.addEventListener('click', (e) => {
    document.querySelector('.menu').classList.add('activemenu')
})
btnclose.addEventListener('click', () => {
  console.log('jajjaa')
  document.querySelector('.menu').classList.remove('activemenu')
})