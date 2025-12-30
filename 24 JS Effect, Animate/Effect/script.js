$(document).ready(function () {

    $("#hide").click(function () {
        $("#img").stop(true, true).hide(800);
    });

    $("#show").click(function () {
        $("#img").stop(true, true).show(800);
    });

    $("#toggle").click(function () {
        $("#img").stop(true, true).toggle(800);
    });

    $("#fadeIn").click(function () {
        $("#img").stop(true, true).fadeIn(1000);
    });

    $("#fadeOut").click(function () {
        $("#img").stop(true, true).fadeOut(1000);
    });

    $("#fadeToggle").click(function () {
        $("#img").stop(true, true).fadeToggle(1000);
    });

    $("#slideUp").click(function () {
        $("#img").stop(true, true).slideUp(1000);
    });

    $("#slideDown").click(function () {
        $("#img").stop(true, true).slideDown(1000);
    });

    $("#slideToggle").click(function () {
        $("#img").stop(true, true).slideToggle(1000);
    });

   
    $("#stop").click(function () {
        $("#img").stop(true, true);
    });

});
