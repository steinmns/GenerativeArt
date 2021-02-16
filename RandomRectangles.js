var canvas = document.querySelector('canvas');
var context = canvas.getContext('2d');

//var size = window.innerWidth;
var size = 800;
var step = size/5;
var dpr = window.devicePixelRatio;
canvas.width = size * dpr;
canvas.height = size * dpr;
context.scale(dpr, dpr);

context.lineCap = 'square';
context.lineWidth = 2;

//Idea 1: Rectangles where shade moves brighter and becames less transparent
function draw(){
    var r = 255
    var g = 255
    var b = 0
    for(x = 0; x < size; x += step){
        for(y = 0; y < size; y += step){
            g += -8
            context.fillStyle = rgbToHex(r,g,b)
            context.fillRect(x, y, step, step);
        }
    }
}



function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function getRandHex(){
    return rgbToHex(getRandomInt(0,255), getRandomInt(0,255), getRandomInt(0,255));
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
