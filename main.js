const menuBtn = document.querySelector('.menu-btn');
const menuLinks = document.querySelector('.links');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuLinks.classList.add('openMenu');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuLinks.classList.remove('openMenu');
    menuOpen = false;
  }
});