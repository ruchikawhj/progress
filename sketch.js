var bird,birdImg,obstacle,ground,bg;
var o1,o2;
function preload(){
bg=loadImage("bg.jpg");
birdImg=loadImage("bird.png");
o1=loadImage("obstacle.png");
o2=loadImage("ob2.png");

}
function setup(){
  createCanvas(windowWidth,windowHeight);
  bird=createSprite(90,height/2);
  bird.addImage(birdImg)
}
function draw(){
  background(bg);
  if(keyDown(UP_ARROW)){
    bird.velocityY=-4;
  }
  if(keyDown(DOWN_ARROW)){
    bird.velocityY=4;
  }
  bird.velocityY+=0.8;
  spawnObstacles();
  drawSprites();
}

function spawnObstacles(){
  if(frameCount%100===0){
    var x=Math.round(random(1,2));
    if(x==1){
      obstacle=createSprite(width,height-100);
      obstacle.addImage(o1);
      obstacle.velocityX=-4;
      obstacle.scale=random(1,1.8)
      obstacle.lifetime=400;
      console.log(obstacle.height)
      

      
    }
    else if(x==2){
      obstacle=createSprite(width,100);
      obstacle.addImage(o2);
      obstacle.velocityX=-4;
      obstacle.lifetime=400;
      console.log(obstacle.height)
      //obstacle.height=Math.round(random(600,800))
      obstacle.scale=random(1,1.8)
     
    }
  }

}
