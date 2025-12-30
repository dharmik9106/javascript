$(document).ready(function () {

    // CLICK → image zoom
    $("#btn").on("click", function () {
        $("#img").css({
            width: "600px",
            height: "500px"
        });
    });

    // DOUBLE CLICK → reset size
    $("#btn").on("dblclick", function () {
        $("#img").css({
            width: "400px",
            height: "200px"
        });
    });

    // MOUSE ENTER → glow effect
    $("#btn").on("mouseenter", function () {
        $("#img").css({
            boxShadow: "0 0 25px rgba(255,150,0,0.9)",
            transform: "scale(1.05)"
        });
    });

    // MOUSE LEAVE → normal
    $("#btn").on("mouseleave", function () {
        $("#img").css({
            boxShadow: "none",
            transform: "scale(1)"
        });
    });

    // KEYBOARD EVENTS
    $(document).on("keydown", function (e) {

        // Arrow Up → zoom in
        if (e.key === "ArrowUp") {
            $("#img").css("transform", "scale(1.2)");
        }

        // Arrow Down → zoom out
        if (e.key === "ArrowDown") {
            $("#img").css("transform", "scale(1)");
        }
    });

});
