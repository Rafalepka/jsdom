"use strict";

var istniejacyWezel = document.getElementById('parFirst').children[2];

console.log(istniejacyWezel);

var nowyElement = document.createElement('p');
var nowyElementContent = document.createTextNode('To jest dodany paragraf');

nowyElement.appendChild(nowyElementContent);

var podmianaWezla = document.getElementById('parFirst').replaceChild(nowyElement, istniejacyWezel);


