$(document).ready(() => {
    $("#tab01").show();
    $(".tab li").click(function() {
        $(".picture").hide();
        $(".tab > li").removeClass("active");
        $(this).addClass("active");

        let h = $(this).attr("class").replace(" active","");
        $(".tab-content > div").hide();
        $(h).show();

        $(h).css("display","flex");
    });
});

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
  };