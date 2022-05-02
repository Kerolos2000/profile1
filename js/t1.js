var dots = [],
mouse = {
x: 0,
y: 0
};
var Dot = function() {
this.x = 0;
this.y = 0;
this.node = (function(){
var z = document.createElement("div");
z.className = "trail";
document.body.appendChild(z);
return z;
}());
};
Dot.prototype.draw = function() {
this.node.style.left = this.x + "0px";
this.node.style.top = this.y + "0px";
};
for (var i = 0; i < 200; i+=1) {
var d = new Dot();
dots.push(d);
}
function draw() {
var x = mouse.x,
y = mouse.y;
dots.forEach(function(dot, index, dots) {
var nextDot = dots[index + 1] || dots[0]; 
dot.x = x;
dot.y = y;
dot.draw();
 x += (nextDot.x - dot.x) * 0.3;
 y += (nextDot.y - dot.y) * 0.5;
});
}
addEventListener("mousemove", function(event) {
mouse.x = event.pageX;
mouse.y = event.pageY;
});
function animate() {
draw();
requestAnimationFrame(animate);
}
animate();
