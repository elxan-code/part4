$(document).ready(function(){

    $('.nav-link').click(function() {
        console.log("Clicked");
        $('.nav-link.active').removeClass('active');
        $('nav-link').addClass('active');
    });

    // $('.dropendd').click(function() {
    //     console.log("Clicked");
    //     $('.submenu-1.active').removeClass('active');
    //     $(".submenu-1").addClass('active');
    // });
    window.addEventListener("scroll",function(){
        var nav =document.querySelector("nav");
        nav.classList.toggle("fixed-top",window.scrollY>80);
    })


        window.addEventListener("scroll",function(){
            var nav =document.getElementsByClassName("top_button")[0];
            nav.classList.toggle("fixedd-top",window.scrollY>20);

        

    })

});