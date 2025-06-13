
const burger=document.getElementById('burger');
const navUl=document.querySelector('#nav ul');
burger.addEventListener('click',()=>navUl.classList.toggle('show'));
window.addEventListener('scroll',()=>{
  const y=window.pageYOffset;
  document.querySelector('.hero').style.backgroundPositionY=`${y*0.5}px`;
});
