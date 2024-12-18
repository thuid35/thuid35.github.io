var navbar_y = 50;
var cover_title_y =100;

// scroll listener for navbar backdrop blur
window.addEventListener('scroll', function() {
    const header = document.querySelector('.nav-container');
    
    if (window.scrollY > navbar_y) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
});

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

// windows alert for clicking the second button in cover
function click_nope() {
    window.alert(":展覽尚未開始 敬請期待！");
};
 