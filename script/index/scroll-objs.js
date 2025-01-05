const topLeftBlock = document.querySelector('.top-left');
const topRightBlock = document.querySelector('.top-right');
const bottomLeftBlock = document.querySelector('.bottom-left');
const bottomRightBlock = document.querySelector('.bottom-right');

const MAX_BLUR = 10;

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const blurValue = Math.min(scrollY * 0.02, MAX_BLUR);

  // Top-left moves upward & left
  topLeftBlock.style.transform = `translate(-${scrollY * 0.7}px, -${scrollY * 0.7}px)`;
  topLeftBlock.style.filter = `blur(${blurValue}px)`;

  // Top-right moves upward & right
  topRightBlock.style.transform = `translate(${scrollY * 0.7}px, -${scrollY * 0.7}px)`;
  topRightBlock.style.filter = `blur(${blurValue}px)`;

  // Bottom-left moves downward & left
  bottomLeftBlock.style.transform = `translate(-${scrollY * 0.7}px, ${scrollY * 0.7}px)`;
  bottomLeftBlock.style.filter = `blur(${blurValue}px)`;

  // Bottom-right moves downward & right
  bottomRightBlock.style.transform = `translate(${scrollY * 0.7}px, ${scrollY * 0.7}px)`;
  bottomRightBlock.style.filter = `blur(${blurValue}px)`;
});