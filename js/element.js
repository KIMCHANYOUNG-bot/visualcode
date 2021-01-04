let show = document.getElementById('show');
console.log(show.id);

function turnOn(){
    let img1 = document.getElementsByTagName('img');
    img1[0].src = 'https://www.w3schools.com/js/pic_bulbon.gif';
    console.log(img1[0]);
}    
function  turnOff(){
    let img1 = document.getElementsByTagName('img');
    img1[0].src = 'https://www.w3schools.com/js/pic_bulboff.gif';
    console.log(img1[0]);
  
}
    
