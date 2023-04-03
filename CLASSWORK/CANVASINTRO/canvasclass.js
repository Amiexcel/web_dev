let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");

// ctx.fillStyle = "#222";
// ctx.translate(70, 60);
// // ctx.rotate(45 * Math.PI/180);
// ctx.shadowBlur = 20;
// ctx.shadowOffsetX = 20;
// ctx.shadowOffsetY = 40;
// ctx.shadowColor = "black";
// ctx.fillRect(220,100,200,200); 
// ctx.clearRect(240,120,160,60);
// ctx.clearRect(110,80,1200,100); 
//  (x,y,width,height)

// ctx.strokeStyle = "hotpink";
// ctx.lineWidth = 10;
// ctx.strokeRect(360,180,250,250);
 

// ctx.fillStyle = "#fff";
// ctx.fillRect(240,120,175,175);

// ctx.fillStyle = "#333";
// ctx.fillRect(250,130,150,150);

// ctx.fillStyle = "#fff";
// ctx.fillRect(260,140,125,125);


// ctx.fillStyle = "#333";
// ctx.fillRect(270,150,100,100);


// ctx.fillStyle = "#fff";
// ctx.fillRect(280,160,75,75);


// ctx.fillStyle = "#333";
// ctx.fillRect(290,180,50,50);


// ctx.fillStyle = "#fff";
// ctx.fillRect(300,190,25,25);


ctx.beginPath();
ctx.moveTo(40, 40);
ctx.lineTo(300, 80);
ctx.stroke();

ctx.fillStyle = "green";
ctx.strokeStyle = "red";
ctx.rect(200,200,300,300);
ctx.lineWidth = 20;
ctx.fill()
ctx.stroke()

ctx.beginPath();
ctx.arc(80, 90, 50, 0, Math.PI*2, false);
    //    (x, y, start angle, end angle, counter-clockwise)
ctx.closePath();
ctx.fillStyle = "green";
ctx.fill();

ctx.font = "50px Poppins";
ctx.fillText("Hello World!", 200, 200);