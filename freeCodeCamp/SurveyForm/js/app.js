$(document).ready(function(){
    var sections = [
        $('#intro'),
        $('#them'),
        $('#complete'),
    ];
    var backButton = $('#back');
    var nextButton = $('#next');
    const circles = $('.circle');
    var current = 0;

    //Previous Slider
    backButton.click(function(){
        if(current > 0){
            current--;
            slidePrevious();
        }
    });

    function slidePrevious(){
        sections[current + 1].css('display', 'none');
        sections[current].css('display', 'block');
        circles.eq(current).addClass('fill');
        circles.eq(current+1).removeClass('fill');
    }

    //Next Slider
    nextButton.click(function(){
        if((current < sections.length - 1) && current != 1){
            slideNext();
        } 
        //Prevents Slide to go next if form isn't complete
        else if(current == 1 && isFormValid){
            slideNext();
        }
    });

    function slideNext(){
        current++;
        sections[current-1].css('display', 'none');
        sections[current].css('display', 'block');
        circles.eq(current).addClass('fill');
        circles.eq(current-1).removeClass('fill');
    }
});
