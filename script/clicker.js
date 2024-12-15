// Click listener

document.getElementById("info_cal_btn_id").addEventListener('click', function() {
    const ua = navigator.userAgent.toLowerCase();
    
    const googleCalUrl = "https://calendar.app.google/gUYS7n2c956XRj4V6";
    const appleCalUrl = "/assets/special/東海工設期末展.ics";
    
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