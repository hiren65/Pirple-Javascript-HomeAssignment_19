console.log('Hello, world');


module.exports.ff = function createElement(){
    let br = document.getElementById("brr");
    let createEle = document.createElement('div');
    createEle.innerHTML = "<span> Something Created Second Time!!  </span> <br>" +
        "<h2>Hi How are you</h2> ";
    br.appendChild(createEle);
};
