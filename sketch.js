const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var fairy,fairyImage;
var starImage;
var bkImage;
var engine,world,starBody;



function preload()
{
   //preload the images here
   fairyImage=loadImage("images/fairy1.png");
   starImage=loadImage("images/star.png");
   bkImage=loadImage("images/starnight.png"); 

}

function setup() {
  engine=Engine.create();
  world=engine.world;
  starBody=Bodies.rectangle(500,50,50,50);
  World.add(world,starBody);

  createCanvas(800, 750);
  fairy=createSprite(20,300,400,400);
  //fairy.scale=3;
 // fairy.loadImage(fairyImage);
 
}


function draw() {
  Engine.update(engine);
  
  background(bkImage);
  image(fairyImage,fairy.x,fairy.y,fairy.width,fairy.height);

  if (keyDown(LEFT_ARROW)){
    fairy.x=fairy.x-10;
  }
  if (keyDown(RIGHT_ARROW)){
    fairy.x=fairy.x+10;
   }
  
  rectMode(CENTER);
  image(starImage,starBody.position.x,starBody.position.y,50,50);

  console.log(fairy.x);
  if(starBody.position.y>=fairy.y+140 && (fairy.x>190 && fairy.x<230)){
     Matter.Body.setStatic(starBody,true);
  }
 
}
