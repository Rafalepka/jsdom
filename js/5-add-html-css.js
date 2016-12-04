"use strict";

var mainHeaer = document.getElementById('main_header');

mainHeaer.innerHTML = "Treść nagłówka";

var changeLink = document.getElementsByClassName('link');

changeLink[0].href="Wartość dowolna";

console.log(changeLink);


