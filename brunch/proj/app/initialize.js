require('./logger');
let gg = require('./logger');

document.addEventListener('DOMContentLoaded', () => {
  // do your setup here
  console.log('Initialized app ///');
  createElement();
  gg.ff();
});


function createElement(){
  let br = document.getElementById("brr");
  let createEle = document.createElement('div');
  createEle.innerHTML = "<span> Something Created </span>";
  br.appendChild(createEle);
}




