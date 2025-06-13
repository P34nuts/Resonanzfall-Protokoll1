
// Burger Menu Toggle
const burger=document.getElementById('burger');
const navUl=document.querySelector('#nav ul');
burger.addEventListener('click',()=>navUl.classList.toggle('show'));

// Simple Parallax Effect on Scroll
window.addEventListener('scroll',()=>{
  const scrolled=window.pageYOffset;
  document.querySelector('.hero').style.backgroundPositionY=`${scrolled * 0.5}px`;
});
