$(window).ready(() => {
    //Nav Button Animation
    $('#nav-button').click(function(){
        $('html').toggleClass('active');

        /**
         * Debug: In case user clicks on link when the class is added,
         * this will remove the class immediately
         */
        $('nav ul li a').click(function(){$('html').removeClass('active');});
    });
});