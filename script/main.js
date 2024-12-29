
// Use for all pages

var navbar_y_position = 50;

// scroll listener for navbar backdrop blur
window.addEventListener('scroll', function() {
    const header = document.querySelector('.nav-container');
    
    if (window.scrollY > navbar_y_position) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
});

document.addEventListener('DOMContentLoaded', () => {
  const aBlock = document.querySelector('.mobi-nav-bar-icon');
  const toggleBar = document.querySelector('.mobi-nav-bar');
  const toggleBar2 = document.querySelector('.mobi-nav-bar-links');
  const toggleBar3 = document.querySelector('.mobi-nav-items');
  let isBarVisible = false;

  aBlock.addEventListener('click', () => {
    if (!isBarVisible) {
      toggleBar.style.display = 'block';
      toggleBar2.style.display = 'flex';
      toggleBar3.style.display = 'block';
      toggleBar.style.animation = 'slideIn 0.5s forwards';
      isBarVisible = true;
    } else {
      toggleBar.style.animation = 'slideOut 0.5s forwards';
      toggleBar.addEventListener('animationend', () => {
        if (!isBarVisible) {
          toggleBar.style.display = 'none';
          toggleBar2.style.display = 'none';
          toggleBar3.style.display = 'none';
        }
      }, { once: true });
      isBarVisible = false;
    }
  });
});
 