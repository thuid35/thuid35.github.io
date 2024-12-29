
// Use for "back to top" button
var btn = document.querySelector('#btt_button');

window.addEventListener('scroll', function() {
  
  if (window.scrollY > 300) {
    btn.classList.add('show');
  } else {
    btn.classList.remove('show');
  }
});

btn.addEventListener('click', () => {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
});

