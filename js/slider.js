$(document).ready(function(){
    $('#main-nav ul li a, .back').click(function(e){
        e.preventDefault();
        $('body, html').animate({
            scrollTop: $(this.hash).offset().top - 72
        }, 1500);
    });
});