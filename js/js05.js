$(document).ready(() => {
    $("#tab01").show();
    $(".tab a").click(function() {
        $(".picture").hide();
        $(".tab > li").removeClass("active");
        $(this).parent().addClass("active");

        let h = $(this).attr("href");
        $(".tab-content > div").hide();
        $(h).show();

        $(h).css("display","flex");
    });
});
