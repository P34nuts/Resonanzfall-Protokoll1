
const burger=document.getElementById('burger');
const navUl=document.querySelector('#nav ul');
burger.addEventListener('click',()=>navUl.classList.toggle('show'));

// Guestbook
document.addEventListener('DOMContentLoaded',()=>{
  const form=document.getElementById('guestbook-form');
  const entries=document.getElementById('guestbook-entries');
  form.addEventListener('submit',e=>{
    e.preventDefault();
    const name=document.getElementById('guest-name').value.trim();
    const msg=document.getElementById('guest-message').value.trim();
    if(name&&msg){
      const entry=document.createElement('div');
      entry.className='guest-entry';
      entry.innerHTML=`<strong>${name}</strong><p>${msg}</p>`;
      entries.prepend(entry);
      form.reset();
    }
  });
});
