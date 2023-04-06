const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;
const itemsToShow = 3;
const itemsToScroll = 1;

prevBtn.addEventListener('click', () => {
  const targetIndex = currentIndex - itemsToScroll;
  if (targetIndex < 0) {
    return;
  }
  currentIndex = targetIndex;
  carousel.style.transform = `translateX(-${currentIndex * (100 / itemsToShow)}%)`;
});

nextBtn.addEventListener('click', () => {
  const targetIndex = currentIndex + itemsToScroll;
  if (targetIndex > carousel.children.length - itemsToShow) {
    return;
  }
  currentIndex = targetIndex;
  carousel.style.transform = `translateX(-${currentIndex * (100 / itemsToShow)}%)`;
});
