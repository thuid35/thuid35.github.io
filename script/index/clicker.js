// Click listener

document.getElementById("info_cal_btn_id").addEventListener('click', function() {
    const ua = navigator.userAgent.toLowerCase();
    
    const googleCalUrl = "https://calendar.app.google/gUYS7n2c956XRj4V6";
    const appleCalUrl = "webcal://p120-caldav.icloud.com/published/2/MTY4MDM3Njk2NDAxNjgwM2_IsGOs3hnXxeYibaoPDkxoxo9XNguDG1he_qFmtC5xAX7H8EaOEemQ_K0ErF3pQei3P_UCfIRak__8WvltERQ";
    
    if (/android/.test(ua)) {
      window.open(googleCalUrl, '_blank');
    } else if (/iphone|ipad/.test(ua)) {
      window.open(appleCalUrl);
    } else {
      window.open(googleCalUrl, '_blank');
    };
});


function mobinav() {
  if (document.getElementById("mobi-nav-bar").style.display === "block") {
      document.getElementById("mobi-nav-bar").style.display = "none";
  } else {
      document.getElementById("mobi-nav-bar").style.display = "block";
  }
}

// windows alert for clicking the second button in cover
function click_nope() {
  window.alert(":正在趕工");
};