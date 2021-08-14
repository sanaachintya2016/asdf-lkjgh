class Pinko {
    constructor(x,y){
   var options = {
       isStatic : true
   }

   this.pinko = Bodies.circle(x,y,15,options);
   World.add(world , this.pinko);

}
display(){
    var angle = this.pinko.angle;
    push();
    translate(this.pinko.position.x, this.pinko.position.y);
    rotate(angle);
    ellipseMode(CENTER);
    ellipse(0, 0, 15);
    pop()   
    
}
}