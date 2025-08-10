document.getElementById('year').textContent=new Date().getFullYear();
const b=document.createElement('div');b.className='lightbox-backdrop';document.body.appendChild(b);
document.querySelectorAll('[data-lightbox]').forEach(el=>{el.addEventListener('click',e=>{e.preventDefault();const img=document.createElement('img');img.src=el.getAttribute('href')||el.querySelector('img')?.src;b.innerHTML='';b.appendChild(img);b.classList.add('show');});});
b.addEventListener('click',()=>b.classList.remove('show'));