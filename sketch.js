const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world,canvas;
var bgimg;
var bird,touch;
var br,br2;
var test;
var ob;
var obstacles=[]
var ground

function preload(){
    bgimg = loadImage("bg.jpg")
    bimg = loadImage("bird.png")
}
function setup(){
canvas =  createCanvas(windowWidth,windowHeight);

engine = Engine.create();
world = engine.world;
ground = Bodies.rectangle(0, height - 1, width * 2, 1, { isStatic: true });
World.add(world, ground);

bird = new Bird(200,100,200,150);
br = new Barrier(600,500,10000,15)
br2 = new Barrier(600,-290,1000,10)
ob = new Obstacle(width,height-100,200,500)


}


function draw(){
  background(bgimg);
 
  Engine.update(engine);
  br.display();
  bird.display();
  //ob.display();
  push();
  translate(ground.position.x, ground.position.y);
  fill("brown");
  rectMode(CENTER);
  rect(0, 0, width * 2, 1);
  pop();
   bird.fly();
   //ob.move();
  
 //colide()
 //collide2()
 showObstacles();
 drawSprites();
}
function colide(){
  if (bird !== undefined && br !== undefined &&  br !== undefined) {
    var collision = Matter.SAT.collides(bird.body, br.body);
    

    if (collision.collided) {
        swal(
          {
            title: `Game Over!!!`,
            text: "Thanks for playing!!",
            imageUrl:
              "https://preview.redd.it/vxgdzt3eecr41.jpg?auto=webp&s=7449dc00d6d0558b3352107b916a66739f53ba72",
            imageSize: "150x150",
            confirmButtonText: "Play Again"
          },
          function(isConfirm) {
            if (isConfirm) {
              location.reload();
            }
          }
        );
      }
      
    
    }
    }
  function collide2(){
    if (bird !== undefined && br2 !== undefined) {
      var collision = Matter.SAT.collides(bird.body, br2.body);
      if (collision.collided) {
        swal(
          {
            title: `Game Over!!!`,
            text: "Thanks for playing!!",
            imageUrl:
              "https://preview.redd.it/vxgdzt3eecr41.jpg?auto=webp&s=7449dc00d6d0558b3352107b916a66739f53ba72",
            imageSize: "150x150",
            confirmButtonText: "try again"
          },
          function(isConfirm) {
            if (isConfirm) {
              location.reload();
            }
          }
        );
      }
  
    
    }
  }
   

  function showObstacles() {
    if (obstacles.length > 0) {
      if (
        obstacles[obstacles.length - 1]==undefined||
        obstacles[obstacles.length - 1].body.position.x < width - 300
      ) {
        var positions = [-40, -60, -70, -20];
        var position = random(positions);
        var obstacle = new Obstacle(
          width,
          height - 100,
          170,
          170,
          position
        );
  
        obstacles.push(obstacle);
      }
  
      for (var i = 0; i < obstacles.length; i++) {
        Matter.Body.setVelocity(obstacles[i].body, {
          x: -0.9,
          y: 0
        });
  
        obstacles[i].display();
        //obstacles[i].animate();
      /*  var collision = Matter.SAT.collides(this.tower, obstacles[i].body);
        if (collision.collided && !obstacles[i].isBroken) {
            //Added isLaughing flag and setting isLaughing to true
            if(!isLaughing && !pirateLaughSound.isPlaying()){
              pirateLaughSound.play();
              isLaughing = true
            }
          isGameOver = true;
          gameOver();
        }*/
      }
    } else {
      var obstacle = new Obstacle(width, height - 60, 170, 170, -60);
      obstacles.push(obstacle);
    }
  }
  