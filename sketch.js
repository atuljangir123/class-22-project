
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

    var options_ball={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2

	   }

	//Create the Bodies Here.
	fill("yellow")
	ball = Bodies.circle(100,100,10,options_ball);
	World.add(world,ball);

	Engine.run(engine);
  
	ground =new Ground(400,500,800,10);

	leftSide =new Ground(400,500,10,120);
	rightSide =new Ground(550,500,10,120);
}


function draw() {
	rectMode(CENTER);
	ellipseMode(RADIUS);
  background(0);
  
  ground.show();
  leftSide.show();
  rightSide.show();
  ellipse(ball.position.x,ball.position.y,10);



  drawSprites();
 
}


function keyPressed(){
	if (keyCode === UP_ARROW) {
	  Matter.Body.applyForce(ball,{x:0,y:0},{x:5,y:1});
		}
  }	
		
	  
