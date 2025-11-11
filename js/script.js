document.addEventListener("DOMContentLoaded", () => {


 let swiperslider = new Swiper('.swiper-slider', {

  loop: true,
  slidesPerView: 1,
   navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
   },
   spaceBetween: 30,

  });

})


const catalogcontainer = document.querySelector('.catalog-container');
const catalogbtn = document.querySelector('.catalog-btn');

catalogbtn.addEventListener('click', function () {
  catalogcontainer.classList.contains('open') ? catalogcontainer.classList.remove('open') : catalogcontainer.classList.add('open');
});



const imgshow = document.querySelector('.show-img');

const imgs = document.querySelectorAll('.img');

for (let img of imgs) {
  img.addEventListener('click', function() {
    imgshow.innerHTML = '<img src=" '  + img.src.replace('http://127.0.0.1:5500', '.') + '" >'
  });
}