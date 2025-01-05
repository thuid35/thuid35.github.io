
// OLNY Use for index page

var cover_title_y =130;
// scroll listener for cover_title blur
window.addEventListener('scroll', function() {
    const covertitle = document.querySelector('.cover_title');
    const circle = document.querySelector('.cover_circle');
    const btn = document.querySelector('.cover_btn_space');
    
    if (window.scrollY > cover_title_y) {
      covertitle.classList.add('cover_title_scrolled');
      circle.classList.add('cover_circle_scrolled');
      btn.classList.add('cover_btn_space_blur');
    } else {
      covertitle.classList.remove('cover_title_scrolled');
      circle.classList.remove('cover_circle_scrolled');
      btn.classList.remove('cover_btn_space_blur');
    }
});
