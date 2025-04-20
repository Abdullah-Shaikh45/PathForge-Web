const imgs = document.querySelectorAll('.carousel-img');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');
let currentIndex = 0;

function showImage(index) {
  imgs.forEach((img, i) => {
    img.classList.toggle('active', i === index);
  });
}
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + imgs.length) % imgs.length;
  showImage(currentIndex);
});
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % imgs.length;
  showImage(currentIndex);
});



document.getElementById('download-apk').addEventListener('click', () => {
  const link = document.createElement('a');
  link.href = 'pathforge.apk';
  link.download = 'pathforge.apk';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});
