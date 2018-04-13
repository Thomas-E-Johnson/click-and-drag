const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  //find where the user clicked
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown)
    return; // stop the function from running
  e.preventDefault(); // stops the selection of text in the browser
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3; // move 3x the pixels
  slider.scrollLeft = scrollLeft - walk;
});
