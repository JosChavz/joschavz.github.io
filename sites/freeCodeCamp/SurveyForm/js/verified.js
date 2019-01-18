$(document).ready(function(){
    var submit = $('#submit');
    var reset = $('#reset');
    var requiredCheckboxes = $(':checkbox[required]');
    var isChecked = false;
    window.isFormValid = false;

    //Changes the required attr if one is selected
    //Unsure if it's required still now that the window is prevented from
    //default...
    requiredCheckboxes.change(function(){

        if(requiredCheckboxes.is(':checked')) {
            requiredCheckboxes.removeAttr('required');
            isChecked = true;
        }

        else {
            requiredCheckboxes.attr('required', 'required');
            isChecked = false;
        }
    });

    //Checks if form is complete
    
    function validateForm(e){
        e.preventDefault();
        var answers = [
            $('[name=general]')[0].value,
            $('[name=email-field]')[0].value,
            $('[name=age-field]')[0].value,
            $('[name=year]')[0].value
        ]
        var isValid, isRadioValid;

        for(let x = 0; x < answers.length; x++){
            if(answers[x] == ''){
                isValid = false;
                break;
            }
            else{
                isValid = true;
            }
        }

        for(let i = 0; i < $('[name=gender]').length; i++){
            if($('[name=gender]')[i].checked) isRadioValid = true;
        }

        if(!isValid) alert('Please fill in the input');
        if(!isRadioValid) alert('Please check a gender');
        if(!isChecked) alert('Please check a box');
        
        ((isValid) == true && (isChecked == true) && (isRadioValid == true))?isFormValid = true:isFormValid = false

        if(isFormValid) alert('All ready now! Click next!');
    }

    reset.click(function(){
        isFormValid = false;
    });
    submit.click(validateForm);
});