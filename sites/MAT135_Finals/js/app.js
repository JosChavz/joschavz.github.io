$(window).ready(function(){
    //On Screen Fixed Header
    const headersArray = $('.cat');
    const sectionArray = $('.wrapper');
    const initialWidth = $(window).width();
    var screenWidth;
    let isLarge = initialWidth >= 1024;

    //First check to initialize class
    if(isLarge) $('#home').addClass('header-pc');
    /**
     * Whenever the window is being resized, this will update the variable. Accommodates the while loop at the bottom
     */
    $(window).resize(function(){
        screenWidth = $(window).width();
        if(screenWidth >= 1024) $('#home').addClass('header-pc');
        else $('#home').removeClass('header-pc');
    }); 

    /**
     * TitleTop function will ONLY be runned whenever the window's width is small as mobile
     * BUG: It works, but when resizing, it breaks due to one of the condition being satisfied. Also, it seems that the browser crashes when it goes in mobile view and I suspect it has to do with the while loop. Could infinite looping cause this problem? Overloading?
     * SOLUTION: Because Initial Width seems to be the issue, while should run another window width check.
     */
    /*while(isSmall){
        titleTop();
        isSmall = (initialWidth < 400) || (screenWidth < 400);
    };*/



    /*function titleTop(){
        let windowTop = $(window).scrollTop();
        $(window).scroll(location(windowTop));
        $(window).scroll(() => { windowTop = $(window).scrollTop() });
    }

    function location(loc){*/
        /**
         * Might slow down the browser, but this will allow for a reset to not hard code it all the times in the if statemenets
         */
        /*$(headersArray).removeClass('fixed');
        $(headersArray).removeClass('stop');

        if((loc >= 0) && (loc < $(sectionArray[1]).offset().top )){
            $(headersArray[0]).removeClass('fixed');
            $(headersArray[0]).addClass('fixed');

            /**
             * This allows to set the fixed header on the bottom of its section
             */
            /*if(loc >= $(sectionArray[1]).offset().top - 80){
                $(headersArray[0]).removeClass('fixed');
                $(headersArray[0]).addClass('stop');
            }
        } else if((loc >= $(sectionArray[1]).offset().top) && (loc < $(sectionArray[2]).offset().top)){
            $(headersArray[1]).addClass('fixed');
        }
    }*/
});