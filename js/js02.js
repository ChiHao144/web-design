function showFullscreenImage(element) {
    var fullscreenImage = document.getElementById("fullscreen-image");
    var fullscreenImageImg = fullscreenImage.querySelector("img");
    fullscreenImageImg.src = element.src;
    fullscreenImage.style.display = "flex";
  }
  
  function closeFullscreenImage() {
    var fullscreenImage = document.getElementById("fullscreen-image");
    fullscreenImage.style.display = "none";
  }
  // go to top
window.onscroll = function(){
  console.info(document.documentElement.scrollTop);
  var gototop = document.getElementById("go-to-top");
  if (document.documentElement.scrollTop > 100 || document.body.scrollTop > 100) {
    gototop.style.display = "block";
  } else{
    gototop.style.display = "none";
  }
}
function goToTop(){
    var timer = setInterval(function(){
      document.documentElement.scrollTop-=20;

      if(document.documentElement.scrollTop <= 0)
        clearInterval(timer);
    }, 1);
}