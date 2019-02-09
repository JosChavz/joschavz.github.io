var first = document.createElement('script');
first.src = 'firstPart.js';
var second = document.createElement('script');
second.src = 'secondPart.js';
var third = document.createElement('script');
third.src = 'thirdPart.js'
var scripts = [first, second, third];


$(window).ready(function() {
    let buttons = [
        $('#first'),
        $('#second'),
        $('#third')
    ];
    /*for(let i = 0; i < buttons.length; i++){
        buttons[i].click(function(){
            alert(i);
        });
    }*/

    for(let i = 0; i < buttons.length; i++){
        buttons[i].click(function(){
            let head = $('head')[0];
            let script = scripts[i];
            $('.tempJS').remove();
            //reset canvas
            resetCanvas();

            //adds in script plus a class
            head.append(script);
            $(script).addClass('tempJS');

        });
    }

    function resetCanvas(){
        let temp = $('#canvas')[0];
        let drawing = temp.getContext('2d');
        
        drawing.clearRect(0, 0, canvas.width, canvas.height);
    }
    
});