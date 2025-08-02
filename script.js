let currentIndex = 0;
const images = document.querySelectorAll('.gallery-item img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

function openLightbox(el) {
  currentIndex = [...images].indexOf(el);
  lightbox.style.display = "flex";
  lightboxImg.src = el.src;
}

function closeLightbox() {
  lightbox.style.display = "none";
}

function navigate(dir) {
  currentIndex += dir;
  if (currentIndex < 0) currentIndex = images.length - 1;
  if (currentIndex >= images.length) currentIndex = 0;
  lightboxImg.src = images[currentIndex].src;
}

// Filter functionality
function filterImages(category) {
  const items = document.querySelectorAll('.gallery-item');
  items.forEach(item => {
    item.style.display = category === 'all' || item.classList.contains(category) ? 'block' : 'none';
  });
}
