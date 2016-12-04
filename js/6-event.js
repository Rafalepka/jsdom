'use strict';


function showText() {
    alert("Czemu mnie kliknąłeś :D");
}


document.getElementsByClassName('link')[1].onclick = showText;

function showText() {
    alert('Click Click');
}

var klikDrugi = document.getElementsByTagName('a')[2];
klikDrugi.addEventListener('click', alarm);

function alarm() {
    alert("czego tak klikasz");
}

var naglowekClick = document.getElementById('main_header');

naglowekClick.onmouseover = resize;
naglowekClick.onmouseout=resize;


function resize(e) {
    if (e.type == "mouseover") {
        
        naglowekClick.style.color = "red";
        
    } else {
        
        naglowekClick.style.color= "black";
    }
}

/*
function resizeout() {
    naglowekClick.style.fontSize= "60px";
}*/