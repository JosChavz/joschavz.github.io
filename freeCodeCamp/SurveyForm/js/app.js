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
            clearTable();
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
            output();
        } else if (current == 1 && !isFormValid)
            alert('Please click submit before advancing.');
    });

    function slideNext(){
        current++;
        sections[current-1].css('display', 'none');
        sections[current].css('display', 'block');
        circles.eq(current).addClass('fill');
        circles.eq(current-1).removeClass('fill');
    }

    /* Output for Table */
    function output(){
        let response = [
            $('[name=general]')[0].value,
            $('[name=email-field]')[0].value,
            $('[name=age-field]')[0].value,
            $('[name=year]')[0].value,
            $('[name=gender]:checked').val(),
            $('[name=moreOptions]').val(),
            $('[name=feedback').val()
        ];
        var tr = $('#output tr');

       for(let i = 0; i < response.length; i++){
            tr.eq(i).append("<td>" + response[i] + "</td>");
        }  
    }

    /* Clear Table */
    function clearTable(){
        var tr = $('#output tr');

        for(let i = 0; i < tr.length; i++){
            $('#output tr td').remove();
        }
    }
});