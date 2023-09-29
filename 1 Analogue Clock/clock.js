var canvas = document.getElementById("canvas");
var ctx= canvas.getContext("2d");
var radius = canvas.height/2;
ctx.translate(radius,radius);
radius=radius*0.90;
drawClock();
function drawClock()
{
    drawFace(ctx,radius);
    drawNumbers(ctx,radius);
    drawTime(ctx,radius);
}
function drawFace(ctx,radius)
{
    //black big circle of the clock
    ctx.beginPath();
    ctx.arc(0,0,radius,0,2*Math.PI);
    ctx.fillStyle= "white";
    ctx.fill();
    var grad = ctx.createRadialGradient(0,0, radius*0.95, 0,0, radius*1.05); 
    //border of the clock
    grad.addColorStop (0, '#333');
    grad.addColorStop(0.5, 'white');
    grad.addColorStop(1, '#333');       
    ctx.strokeStyle= grad;
    ctx.lineWidth = radius*0.1; 
    ctx.stroke();
    //The most centre circle in black
    ctx.beginPath();
    ctx.arc(0, 0, radius*0.09, 0, 2*Math.PI); 
    ctx.fillStyle = '#333';//color
    ctx.fill();//fills the above color
}
function drawNumbers (ctx, radius) 
{ 
    var ang;
    var num;    
    ctx.font = radius*0.15+ "px arial"; 
    //Places number in a proper circle   
    ctx.textBaseline="middle";    
    ctx.textAlign="center"; 
    for (num = 1; num <= 12; num++)
    {    
    ang = num * Math.PI / 6; // pi= semiccircle, semicircle is divided in 6 parts as half clock is divided into 6 parts
    ctx.rotate(ang);    
    ctx.translate(0, -radius*0.85);    
    ctx.rotate(-ang);
    ctx.fillText(num, 0, 0);    
    ctx.rotate(ang);    
    ctx.translate(0, radius*0.85);    
    ctx.rotate(-ang);
    }
}
function drawTime(ctx,radius)
{
    //get time
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds(); 
    //hour
    hour=hour%12; //converts 24hr clock to 12hr clock
    hour=(hour* Math.PI/6)+ (minute*Math.PI/(6*60))+ (second*Math.PI/(360*60)); //Calculate angle of the hour hand
    drawHand(ctx, hour, radius*0.5, radius*0.06);//length and width is specified
    //minute
    minute=(minute* Math.PI/30)+(second*Math.PI/(30*60)); 
    drawHand (ctx, minute, radius*0.8, radius*0.06);
    // second
    second=(second* Math.PI/30);
    drawHand(ctx, second, radius*0.9, radius* 0.02);
}

function drawHand (ctx, pos, length, width) 
{
    ctx.beginPath();    
    ctx.lineWidth = width;    
    ctx.lineCap = "round";    //sets the end of the line
    ctx.moveTo(0,0);    
    ctx.rotate(pos); 
    ctx.lineTo(0, -length);    
    ctx.stroke();
    ctx.rotate(-pos);
}
