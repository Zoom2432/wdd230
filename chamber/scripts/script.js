// Slider
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const slideInterval = 3000;
 
function changeSlide() {
  slides[currentIndex].style.opacity = 0;
  currentIndex = (currentIndex + 1) % slides.length;
  slides[currentIndex].style.opacity = 1;
}
 
setInterval(changeSlide, slideInterval);


// Last modified date
const modified = document.querySelector('#modified');

modified.textContent = document.lastModified;


// Burger button
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const socials = document.querySelector('.socials');
const h1 = document.querySelector('h1');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');

  if (socials.style.display !== 'none'){
  	socials.style.display="none";
  }else{
  	socials.style.display="flex";
  }

  if (h1.style.display !== 'none'){
  	h1.style.display="none";
  }else{
  	h1.style.display="flex";
  }
});
