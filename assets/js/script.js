
// Burger + language switch
const burger=document.getElementById('burger');const navUl=document.querySelector('#nav ul');
burger&&burger.addEventListener('click',()=>navUl.classList.toggle('show'));
document.getElementById('lang-btn')?.addEventListener('click',()=>alert('English version coming soon!'));

// Guestbook
document.getElementById('guestbook-form')?.addEventListener('submit',e=>{
 e.preventDefault();
 const name=document.getElementById('guest-name').value.trim();
 const msg=document.getElementById('guest-message').value.trim();
 if(name&&msg){
  const entry=document.createElement('div');entry.className='guest-entry';
  entry.innerHTML=`<strong>${name}</strong><p>${msg}</p>`;
  document.getElementById('guestbook-entries').prepend(entry);
  localStorage.setItem('guestbook',document.getElementById('community').innerHTML);
  e.target.reset();
 }
});
window.addEventListener('load',()=>{const saved=localStorage.getItem('guestbook');if(saved)document.getElementById('community').innerHTML=saved;});

// Frequency Simulator
let audioCtx,tone;
function play(freq){audioCtx=new(window.AudioContext||window.webkitAudioContext)();tone=audioCtx.createOscillator();tone.frequency.setValueAtTime(freq,audioCtx.currentTime);tone.connect(audioCtx.destination);tone.start();}
function stop(){tone&&tone.stop();}
const slider=document.getElementById('freqSlider');const val=document.getElementById('freqVal');
slider&&slider.addEventListener('input',()=>{val.textContent=slider.value;if(tone)tone.frequency.setValueAtTime(slider.value,audioCtx.currentTime);});
document.getElementById('playTone')?.addEventListener('click',()=>play(slider.value));
document.getElementById('stopTone')?.addEventListener('click',stop);

// AI dummy
document.getElementById('askAI')?.addEventListener('click',()=>{
 const q=document.getElementById('aiQuestion').value.trim();
 document.getElementById('aiReply').textContent=q?`[KI] ${q.length%2? 'Unzureichende Daten…' : 'Analyse läuft … Signal instabil.'}`:'';
});

// Heartbeat
document.getElementById('triggerHeart')?.addEventListener('click',()=>{
 const audio=document.getElementById('heartAudio');audio.play();setTimeout(()=>{audio.pause();alert('Frequenz unterbrochen – Stille');},5000);
});

// Rating
let ratings=[];function updateAvg(){const avg=ratings.length? (ratings.reduce((a,b)=>a+b,0)/ratings.length).toFixed(1):'?';document.getElementById('avgRating').textContent=`Ø ${avg}/5`;}
updateAvg();
document.getElementById('submitRating')?.addEventListener('click',()=>{
 const val=parseInt(document.getElementById('ratingInput').value);if(val>=1&&val<=5){ratings.push(val);localStorage.setItem('ratings',JSON.stringify(ratings));updateAvg();}
});
window.addEventListener('load',()=>{const saved=JSON.parse(localStorage.getItem('ratings')||'[]');ratings=saved;updateAvg();});

// Three.js simple starfield + planet markers
const canvas=document.getElementById('starCanvas');
if(canvas){
 const scene=new THREE.Scene();const camera=new THREE.PerspectiveCamera(60,canvas.clientWidth/canvas.clientHeight,1,1000);
 const renderer=new THREE.WebGLRenderer({canvas:canvas,alpha:true});renderer.setSize(canvas.clientWidth,canvas.clientHeight);
 camera.position.z=50;
 const starsGeom=new THREE.BufferGeometry();const starCount=500;
 const positions=new Float32Array(starCount*3);
 for(let i=0;i<starCount*3;i++){positions[i]=(Math.random()-0.5)*200;}
 starsGeom.setAttribute('position',new THREE.BufferAttribute(positions,3));
 const starsMat=new THREE.PointsMaterial({color:0xffffff,size:0.8});
 const starField=new THREE.Points(starsGeom,starsMat);scene.add(starField);
 function animate(){requestAnimationFrame(animate);starField.rotation.y+=0.0005;renderer.render(scene,camera);}animate();
}
