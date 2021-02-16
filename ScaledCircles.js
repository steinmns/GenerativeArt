var canvas = document.querySelector('canvas');
var context = canvas.getContext('2d');

//var size = window.innerWidth;
var size = 1200;
var step = 50;
var dpr = window.devicePixelRatio;
canvas.width = size * dpr;
canvas.height = size * dpr;
context.scale(dpr, dpr);

context.lineCap = 'square';
context.lineWidth = 2;

//Idea 1: Make circles where each is larger than the last, but not a random amount more. The shade of the color should scale off of the size differential. Dark background

function draw(x, y, width, height) {
    var leftToRight = Math.random() >= 0.5;

    if(leftToRight) {
        context.moveTo(x, y);
        context.lineTo(x + width, y + height);    
    } else {
        context.moveTo(x + width, y);
        context.lineTo(x, y + height);
    }

    context.stroke();
}


for(var x = 0; x < size; x += step) {
    for(var y = 0; y < size; y+= step) {
        draw(x, y, step, step);  
    }
}