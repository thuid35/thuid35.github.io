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
    const header = document.querySelector('.cover_title');
    
    if (window.scrollY > cover_title_y) {
      header.classList.add('cover_title_scrolled');
    } else {
      header.classList.remove('cover_title_scrolled');
    }
});

// windows alert for clicking the second button
function click_nope() {
    window.alert("展覽尚未開始 敬請期待！");
};
 