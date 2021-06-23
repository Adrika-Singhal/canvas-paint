var mouseevent = "empty";
var lastx,lasty;
canvas = document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

color = "black";
width = 1;

canvas.addEventListener("mousedown",mydown);
function mydown(e){
mouseevent="mousedown";
color = document.getElementById("color").value;
width = document.getElementById("width").value;
}


canvas.addEventListener("mouseup",myup);
function myup(e){
mouseevent="mouseup";
}

canvas.addEventListener("mouseleave",myl);
function myl(e){
mouseevent="mouseleave";
}

canvas.addEventListener("mousemove",mymove);
function mymove(e){
currentx=e.clientX-canvas.offsetLeft;
currenty=e.clientY-canvas.offsetTop;

if(mouseevent=="mousedown"){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width;
    ctx.moveTo(lastx,lasty);
    ctx.lineTo(currentx,currenty);
    ctx.stroke();
}
lastx = currentx;
lasty = currenty;
}

function cleararea()
{
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
