$(document).ready(function(){

    $("#btn").click(function(){

        $("#img")
        .animate({
            opacity: 1,
            width: "420px",
            height: "280px"
        }, 700)

        .animate({
            left: "30px"
        }, 400)

        .animate({
            borderRadius: "40px"
        }, 300)

        .animate({
            left: "0px"
        }, 400);
    });

});
