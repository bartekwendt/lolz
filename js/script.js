// hamburger variables
const hamburgerBox = document.querySelector('.hamburger');
const hamburger = document.querySelector('.hamburger-box');
const navMenu = document.querySelector('.navigation-menu');

// toggling hamburger appearance while clicking
hamburgerBox.onclick = () => hamburgerBox.classList.toggle('is-active');

// showing menu on hamburger click
hamburger.onclick = function(){
  if(navMenu.style.display === "none"){
    navMenu.style.display = "flex";
  }
  else{
    navMenu.style.display = "none";
  }
}

//main page bottom dots variables
const dots = document.querySelectorAll('.dot');
const dotsArray = Array.from(dots); //processing dots which is node list to standard es6 list

const mainSection = document.querySelector('.home-section');


// toggling active while clicking DOTS
dots[0].onclick = function(){
  if(dots[1].classList.contains('dotActive') || dots[2].classList.contains('dotActive') || dots[3].classList.contains('dotActive')){
    dots[1].classList.remove('dotActive');
    dots[2].classList.remove('dotActive');
    dots[3].classList.remove('dotActive');
  }
  dots[0].classList.toggle('dotActive');
  mainSection.style.backgroundImage = "url('img/slider/blueGuy.jpg')";
}


dots[1].onclick = function(){
  if(dots[0].classList.contains('dotActive') || dots[2].classList.contains('dotActive') || dots[3].classList.contains('dotActive')){
    dots[0].classList.remove('dotActive');
    dots[2].classList.remove('dotActive');
    dots[3].classList.remove('dotActive');
  }
    dots[1].classList.toggle('dotActive');
    mainSection.style.backgroundImage = "url('img/slider/redGuy.jpg')";
}
dots[2].onclick = function(){
  if(dots[0].classList.contains('dotActive') || dots[1].classList.contains('dotActive') || dots[3].classList.contains('dotActive')){
    dots[0].classList.remove('dotActive');
    dots[1].classList.remove('dotActive');
    dots[3].classList.remove('dotActive');
  }
  dots[2].classList.toggle('dotActive');
  mainSection.style.backgroundImage = "url('img/slider/creepyRedGuy.jpg')";
}
dots[3].onclick = function(){
  if(dots[0].classList.contains('dotActive') || dots[1].classList.contains('dotActive') || dots[2].classList.contains('dotActive')){
    dots[0].classList.remove('dotActive');
    dots[1].classList.remove('dotActive');
    dots[2].classList.remove('dotActive');
  }
  dots[3].classList.toggle('dotActive');
  mainSection.style.backgroundImage = "url('img/slider/blueHustleGuy.jpg')";
}



// arrows variables
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');

// section backgroud image vars


arrowLeft.onclick = function(){
  if(dots[0].classList.contains('dotActive')){
    dots[0].classList.remove('dotActive');
    dots[3].classList.toggle('dotActive');
    mainSection.style.backgroundImage = "url('img/slider/blueHustleGuy.jpg')";
  }
  else if(dots[3].classList.contains('dotActive')){
    dots[3].classList.remove('dotActive');
    dots[2].classList.toggle('dotActive');
    mainSection.style.backgroundImage = "url('img/slider/creepyRedGuy.jpg')";
  }
  else if(dots[2].classList.contains('dotActive')){
    dots[2].classList.remove('dotActive');
    dots[1].classList.toggle('dotActive');
    mainSection.style.backgroundImage = "url('img/slider/redGuy.jpg')";
  }
  else{
    dots[1].classList.remove('dotActive');
    dots[0].classList.toggle('dotActive');
    mainSection.style.backgroundImage = "url('img/slider/blueGuy.jpg')";
  }
}

arrowRight.onclick = function(){
  if(dots[0].classList.contains('dotActive')){
    dots[0].classList.remove('dotActive');
    dots[1].classList.toggle('dotActive');
    mainSection.style.backgroundImage = "url('img/slider/redGuy.jpg')";
  }
  else if(dots[1].classList.contains('dotActive')){
    dots[1].classList.remove('dotActive');
    dots[2].classList.toggle('dotActive');
    mainSection.style.backgroundImage = "url('img/slider/creepyRedGuy.jpg')";
  }
  else if(dots[2].classList.contains('dotActive')){
    dots[2].classList.remove('dotActive');
    dots[3].classList.toggle('dotActive');
    mainSection.style.backgroundImage = "url('img/slider/blueHustleGuy.jpg')";
  }
  else{
    dots[3].classList.remove('dotActive');
    dots[0].classList.toggle('dotActive');
    mainSection.style.backgroundImage = "url('img/slider/blueGuy.jpg')";
  }
}
