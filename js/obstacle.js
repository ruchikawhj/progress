class Obstacle{
    constructor(x,y,w,h,pos){
      var options={
        restitution:0.2,friction:1,density:1
      }
         this.body = Bodies.rectangle(x,y,w,h,options);
        this.pos=pos
         this.w=w;
         this.h=h;
         this.image = loadImage("obstacles.png")

  
         World.add(world, this.body)
      }
      
       
      display() {
          var pos = this.body.position;
          var angle = this.body.angle;
          push();
          translate(pos.x, pos.y);
          rotate(angle);
          imageMode(CENTER);
          image(this.image, 0, this.pos, this.w, this.h);
          pop();
        }
      move(){
     
        
        Matter.Body.setVelocity(this.body,{x:-0.6,y:0})
     }
   
}
 