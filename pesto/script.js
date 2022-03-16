$(document).ready(function(){
    $(".nav h2").click(function(){
        let datos = $(this).attr("data-nav");
        console.log(datos);

        $(".nav h2, .carta_entera div").removeClass("activo");
        $(this).addClass("activo");
        $("#" + datos).addClass("activo");
    });
});