

let momentoClick = document.querySelector('.cor-theme');
momentoClick.addEventListener('click', funClick);


var body = document.querySelector('body');
var title = document.querySelector('.title');
var label = document.querySelector('.label');
var labelTwo = document.querySelector('.labelTwo');

var input = document.querySelector('.input');
var inputTwo = document.querySelector('#inputTwo');

var iconSol = document.getElementById('iconsol');
var iconLua = document.getElementById('iconlua');


var corEscura = "black";
var corClara = "#FFF"


function funClick(){
    var circle = document.querySelector('.circle');
    label.classList.toggle('label-active');
    if(circle.classList.toggle('circle-active')){
        body.style.background = corEscura;
        input.style.color = corClara;
        label.style.color = corClara;
        labelTwo.style.color = corClara;
        inputTwo.style.color = corClara
        
    }else{
        body.style.background = corClara;
        input.style.color = corEscura;
        label.style.color = corEscura;
        labelTwo.style.color = corEscura;
        inputTwo.style.color = corEscura;
       
    }
}

