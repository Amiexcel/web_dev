let e = document.getElementById("emCanvas");
let ctx = e.getContext("2d");

ctx.beginPath();
ctx.arc(200,180,100,0,Math.PI*2,false);
ctx.closePath();
ctx.fillStyle = "hotpink";
ctx.fill();

ctx.beginPath();
ctx.arc(200,200,60,0,Math.PI,false);
ctx.closePath();
ctx.fillStyle = "#fff";
ctx.fill();


