var brush,gym,eat,bath,sleep,move,astronaut,bg;

function preload(){
  bg= loadImage("iss.png");
sleep = loadAnimation("sleep.png");
 brush = loadAnimation("brush.png");
  gym = loadAnimation("gym1.png","gym1.png","gym2.png","gym2.png"); 
  eat = loadAnimation("eat1.png","eat1.png","eat1.png","eat2.png","eat2.png","eat2.png");
   bath = loadAnimation("bath1.png","bath1.png","bath1.png","bath2.png","bath2.png","bath2.png");
move = loadAnimation("move.png","move.png","move1.png","move1.png"); 
}

function setup() {
  createCanvas(800,400);
  
  astronaut = createSprite(300,230)
  astronaut.addAnimation("sleeping", sleep)
  astronaut.scale = 0.1
}

function draw() {
  background(bg);  
  drawSprites();
  
  textSize(20);
  fill("white")
  text("Instructions:",20, 35);
  textSize(15);
  text("Up Arrow = Brushing",20, 55);
  text("Down Arrow = Gymming",20, 70);
  text("Left Arrow = Eating",20, 85);
  text("Right Arrow = Bathing",20, 100);
  text("m key = Moving",20, 115);
  
  edges=createEdgeSprites();
  astronaut.bounceOff(edges);
  if (keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if (keyDown("Down_Arrow")){
    astronaut.addAnimation("Gymming",gym);
    astronaut.changeAnimation("Gymming");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if (keyDown("Left_ARROW")){
    astronaut.addAnimation("Eating",eat );
    astronaut.changeAnimation("Eating");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if (keyDown("Right_Arrow")){
    astronaut.addAnimation("Bathing",bath );
    astronaut.changeAnimation("Bathing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if (keyDown("m key")){
    astronaut.addAnimation("moving",move);
    astronaut.changeAnimation("moving");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
}
