$(document).ready(function () {
    /* Animates the header element from 0, which is the 
    * initial value, to 1 in 4 seconds (4000ms)
    */
    $('header').animate({opacity: 1,}, 4000);

    /**
     * A simple animation WHEN the Y offset is greater than the value given
     * for comparison. 
     * Link:
     * https://www.youtube.com/watch?v=TjBDjw0cZVo
     */
    $(window).on('scroll', function(){
        /**
         * This wasn't included in the video but I wanted to make this code flexible (not robust) enough to my webpage therefore I added all the section IDs into an array which will then be read EVERY TIME the window hears an event of the user scrolling. (If you console log this, site will be slow. >=[ !!!)
         */
        var slides = [
            '#first',
            '#second',
            '#third',
            '#fourth'
        ];
        var value = 400;

        for(let i = 0; i < slides.length; i++){
            if($(this).scrollTop() > value){
                $(slides[i]).css('opacity', '1');
                value += 600;
            }
            else{
                $(slides[i]).css('opacity', '0');
            }
        }

        /**
         * Note to self, and reader:
         * 'this' refers to the window (top part of the window at least),
         * and the number next to it is the value of the Y axis. 
         * I believe 100vh = 1000, at least for my computer.
         * 
         * Starts: 
         * First = 700
         * Second = 1400
         * 
         * A better way for effiency? 
         */
    });

    /**
     * The smooth scroll when an anchor tag with the class of 'scroll' is clicked.
     */
    $('.scroll').click(function(event){
        event.preventDefault();
        $('body, html').animate({
            scrollTop: $(this.hash).offset().top //'this hash' simply states that the class that was clicked on to see the 'href' attribute and do this animation when it starts with a '#'. Offset is a method to find the Y-Position that it starts at based on window and '.top' just has that method return the top part of it. 
        }, 1500);
    });
});

 /**
  * Link Scroll Tutorial By:
  * https://www.youtube.com/watch?v=x0YnVwAuNQI&t=644s
  */