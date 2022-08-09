/* Navbar JS */

const burger = document.getElementById("burger")
const links = document.querySelector(".links")
const anchors = links.querySelectorAll("a")

burger.addEventListener("click", function(){
  this.classList.toggle("rotate")
  links.classList.toggle("open")
})

window.addEventListener("resize", function(){
  if(window.innerWidth > 768){
    burger.classList.toggle("rotate")
    links.classList.toggle("open")
  }
})

const sections = document.querySelectorAll("section")
window.addEventListener("scroll", function(){
  let current = ""
  for(var section of sections){
    const sectionTop = section.offsetTop
    if(window.pageYOffset >= sectionTop - 80){
      current = section.getAttribute("id")
    }
  }

  console.log(current)
  for(var anchor of anchors){
    anchor.classList.remove("selected")
    if(anchor.getAttribute("href") === "#" + current){
      anchor.classList.add("selected")
    }
  }
})

anchors[0].classList.add("selected")



/* input alert */

const submitBtn = document.getElementById("submit-btn")

const validate = (e) => {
  e.preventDefault();
  const inputName = document.getElementById("input-name")
  const inputSurname = document.getElementById("input-surname")
  const inputPhone = document.getElementById("input-phone")
  
  if (inputName.value === ""){
    alert("Įveskite vardą")
    inputName.focus()
    return false
  }
  if (inputSurname.value === ""){
    alert("Įveskite pavardę")
    inputSurname.focus()
    return false
  }
  if (inputPhone.value === ""){
    alert("Įveskite telefono numerį")
    inputPhone.focus()
    return false
  }
  inputName.value = "";
  inputSurname.value = ""
  inputPhone.value = ""
  return true

}
submitBtn.addEventListener("click", validate);

/* second contacts form */

const submitBtn2 = document.getElementById("submit-btn2")

const validate2 = (e) => {
  e.preventDefault();
  const inputName2 = document.getElementById("input-name2")
  const inputSurname2 = document.getElementById("input-surname2")
  const inputPhone2 = document.getElementById("input-phone2")

  if (inputName2.value === ""){
    alert("Įveskite vardą")
    inputName2.focus()
    return false
  }
  if (inputSurname2.value === ""){
    alert("Įveskite pavardę")
    inputSurname2.focus()
    return false
  }
  if (inputPhone2.value === ""){
    alert("Įveskite telefono numerį")
    inputPhone2.focus()
    return false
  }
  inputName2.value = "";
  inputSurname2.value = ""
  inputPhone2.value = ""
  return true

}
submitBtn2.addEventListener("click", validate2);


/* TAB */

const tabsBox = document.getElementsByClassName("tab-link")
const buttons = document.getElementById("tab-btn")

for(var x of tabsBox){
  x.style.display = "none"
}

function changeTab(event, name){

  for(var x of tabsBox){
    x.style.display = "none"
  }
  document.getElementById(name).style.display = "block"

  for(var x of buttons){
    x.classList.remove("selected")
  }
  event.currentTarget.classList.add("selected")
}



/* SWIPER for pricing and comments */

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