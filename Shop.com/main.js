// product
var swiper = new Swiper(".product-container", {
  slidesPerView: 4,
  spaceBetween: 30,
});
if(window.innerWidth <= 1023) {
  var swiper = new Swiper(".product-container", {
    slidesPerView: 1,
    spaceBetween: 30,
  });
}
if(window.innerWidth <= 739 ) {
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
}else if(window.innerWidth <= 739 ) {
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
  document.querySelector('.menu').classList.remove('activemenu')
})
// scroll menu
const menu = document.querySelector('.menu');

window.addEventListener('scroll', () => {
  if(window.scrollY >= 300) {
    menu.classList.add('active');
  }else{
    menu.classList.remove('active');
  }
  // màn hình tablet & mobile remove active
  if(window.innerWidth <= 1023) {
    menu.classList.remove('active');
  }
})
// scroll menu tablet & mobile
const menutablet = document.querySelector('.header-top');

window.addEventListener('scroll', () => {
  if(window.scrollY >= 300) {
    menutablet.classList.add('activemobile');
  }else{
    menutablet.classList.remove('activemobile');
  }
})
// to top
const btntop = document.querySelector('.toTop');
window.addEventListener('scroll', () => {
  if(window.scrollY >= 600) {
    btntop.classList.add('activeTop');
  }else{
    btntop.classList.remove('activeTop');
  }
})
  
