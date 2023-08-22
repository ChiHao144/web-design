$(document).ready(() => {
    let n =$(".thongbao > div").length;
    let h = "";
    for (let i = 0; i < n; i++)
    h +=      
   ` <button class = "digit">${i + 1}</button>   
    `;
    $(".thongbao-button :first-child").after(h);
    $(".thongbao").height($(".thongbao img").height() + 5);
    let current = -1;
let showThongbao = (current) =>{
    $(".thongbao > div").hide();
    $(".thongbao > div").eq(current).show();

    $("button.digit").removeClass("active");
    $("button.digit").eq(current).addClass("active");
}
$("button.digit").click(function(){
    current = parseInt($(this).text()) - 1;
    showThongbao(current);
});

$(".next").click(function() {
    current++;
    if (current === n)
    current = 0;
showThongbao(current);

    clearInterval(timer);
    runThongbao();

});

$(".prev").click(function() {
    current--;
    if (current < 0)
    current = n - 1;
showThongbao(current);
});

let timer = null;
let runThongbao = () => {
    timer = setInterval(() => {
        $(".next").click();
    }, 3000);
};
runThongbao();

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
  }