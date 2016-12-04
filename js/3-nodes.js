"use strict";

var znajdzParagraf = document.getElementsByTagName('p')[0].parentNode;

console.log(znajdzParagraf);

var dopiszElement = document.getElementById('parFirst').children[1];

console.log(dopiszElement);

var sibling = document.getElementById('parFirst').children[0].nextElementSibling;

console.log(sibling);