let can=document.querySelector('canvas');
let cc=can.getContext('2d');
can.width=window.innerWidth;
can.height=window.innerHeight;
function draw_circle(radius=0,x=0,y=0,color="#EBF4FA"){
    cc.beginPath();
    cc.arc(x,y,radius,0,Math.PI*2);
    cc.fillStyle=color;
    cc.fill();
}
function draw_rect(x=0,y=0,w=0,h=0,angle=0,color="blue"){
    cc.fillStyle=color;
    cc.fillRect(x,y,w,h);
    
}
document.addEventListener("click",function(e){
    new Circle(10,20,e.clientX,e.clientY,0,0,0,40);
    new Circle(10,20,e.clientX+19,e.clientY,0,0,0,40);
    new Circle(10,20,e.clientX+39,e.clientY,0,0,0,40);
    new Circle(10,20,e.clientX+56,e.clientY,0,0,0,40);
    new Circle(10,20,e.clientX+69,e.clientY,0,0,0,40);
})
