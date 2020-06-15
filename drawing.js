const BACKGROUND_COLOUR = '#000000';
const LINE_COLOUR = '#FFFFFF';
const LINE_WIDTH = 15;

var currentX = 0;
var currentY = 0;
var previousX = 0;
var previousY = 0;

var canvas;
var context;

var isPainting = false;

function prepareCanvas() {
    
    canvas = document.getElementById('myCanvas');
    context = canvas.getContext('2d');

    context.fillStyle = BACKGROUND_COLOUR;
    context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);
    
    context.strokeStyle = LINE_COLOUR;
    context.lineWidth = LINE_WIDTH;
    context.lineJoin = 'round';

    document.addEventListener('mousedown', function (event){
        isPainting = true;
        currentX = event.clientX - canvas.offsetLeft;
        currentY = event.clientY - canvas.offsetTop;
    });

    canvas.addEventListener('touchstart', function (event){
        var touch = event.touches[0];
        isPainting = true;
        currentX = touch.clientX - canvas.offsetLeft;
        currentY = touch.clientY - canvas.offsetTop;
    });

    document.addEventListener('mouseup', function(event){
        isPainting = false;
    });

    document.addEventListener('touchend', function(event){
        isPainting = false;
    });

    canvas.addEventListener('mouseleave', function(event){
        isPainting = false;
    });

    canvas.addEventListener('touchcancel', function(event){
        isPainting = false;
    });

    document.addEventListener('mousemove', function (event){
        
        if(isPainting){    
            previousX = currentX;
            previousY = currentY;
            currentX = event.clientX - canvas.offsetLeft;
            currentY = event.clientY - canvas.offsetTop;
 
            draw();
        }
    });

    document.addEventListener('touchmove', function (event){
        
        if(isPainting){    
            
            var touch = event.touches[0];

            previousX = currentX;
            previousY = currentY;
            currentX = touch.clientX - canvas.offsetLeft;
            currentY = touch.clientY - canvas.offsetTop;
 
            draw();
        }
    });

    
}

function draw() {
    context.beginPath();
    context.moveTo(previousX, previousY);
    context.lineTo(currentX, currentY);
    context.closePath();
    context.stroke();
}

function clearCanvas() {
    currentX = 0;
    currentY = 0;
    previousX = 0;
    previousY = 0;
    context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight)
}