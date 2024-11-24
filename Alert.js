// Menampilkan pesan di layar
window.onload = function(){
  alert("Halo Semuanya");
};


//scroll
const scrollbutton = document.getElementById('scrollbutton'); // Pastikan id-nya sama

window.onscroll = function(){
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollbutton.style.display = "block";
      } else {
        scrollbutton.style.display = "none";
      }
};

scrollbutton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

scrollbutton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


//dark-mode
const togglebttn = document.getElementById('togglebttn');
const body = document.body;

togglebttn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  
  if (body.classList.contains('dark-mode')) {
    togglebttn.innerHTML = '<i class="bi bi-sun"></i> ';  // Ganti ikon ke matahari
  } else {
    togglebttn.innerHTML = '<i class="bi bi-moon-stars"></i>';  // Ganti ikon ke bulan
  }
});