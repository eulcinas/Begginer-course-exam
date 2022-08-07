/* Navbar JS */

const burger = document.getElementById("burger")
const links = document.querySelector(".links")
const anchors = links.querySelectorAll("a")

burger.addEventListener("click", function(){
  this.classList.toggle("rotate")
  links.classList.toggle("open")
})

window.addEventListener("resize", function(){
  if(this.window.innerWidth > 768){
    burger.classList.toggle("rotate")
    links.classList.toggle("open")
  }
})

const sections =document.querySelectorAll("section")
window.addEventListener("scroll", function(){
  let current = ""
  for(var section of sections){
    const sectionTop = section.offsetTop
    if(window.pageYOffset >= sectionTop - 80){
      current = section.getAttribute("id")
    }
  }

  for(var anchor of anchors){
    anchor.classList.remove("selected")
    if(anchor.getAttribute("href") === "#" + current){
      anchor.classList.add("selected")
    }
  }
})

anchors[0].classList.add("selected")


/* COMMENTS SWIPER */

 const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  spaceBetween: 10,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
   1060: {
     slidesPerView: 3,
     slidesPerGroup: 3,
     allowSlidePrev: true,
     allowSlideNext: true,
   }
 }
});