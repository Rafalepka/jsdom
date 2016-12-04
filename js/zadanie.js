"use strict";

var link = document.querySelectorAll('a');

console.log(link);
/*

for (var i=0;i<link.length; i++) {
    var br = document.createElement('br');
    
    link[i].parentNode.insertBefore(br, link[i].nextSibling);
}
*/

function add() {

     //Create an input type dynamically.
        var br = document.createElement("br");
        var link = document.getElementsByClassName("link");
        link.appendChild(br);
    } 