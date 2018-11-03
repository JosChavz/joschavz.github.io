var ol = document.querySelectorAll('#direction-list > li');
var wasClicked = [];

for(let x = 0; x < ol.length; x++){
    wasClicked.push(false);
}

for(let i = 0; i < ol.length; i++){
    ol[i].onclick = function(){
        
        if(wasClicked[i]){
            ol[i].classList.remove('selected');
            wasClicked[i] = false;
        }else{
            ol[i].classList.add('selected');
            wasClicked[i] = true;
        }
    };
}