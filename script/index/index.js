
// Use for index page

var cover_title_y =100;
// scroll listener for cover_title blur
window.addEventListener('scroll', function() {
    const covertitle = document.querySelector('.cover_title');
    
    if (window.scrollY > cover_title_y) {
      covertitle.classList.add('cover_title_scrolled');
    } else {
      covertitle.classList.remove('cover_title_scrolled');
    }
});

window.addEventListener('scroll', function() {
  const circle = document.querySelector('.cover_circle');
  
  if (window.scrollY > cover_title_y) {
    circle.classList.add('cover_circle_scrolled');
  } else {
    circle.classList.remove('cover_circle_scrolled');
  }
});

