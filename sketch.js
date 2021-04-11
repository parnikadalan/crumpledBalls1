
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	paper = new Paper(50,630,20,20);
	ground = new Ground(400,660, 800, 20)

	box1 = new Box(600,640,200,20)
	box2 = new Box(700,610,20,80)
	box3 = new Box(500,610,20,80)
}


function draw() {
  rectMode(CENTER);
  background("black");
  paper.display()
  ground.display()
  box1.display()
  box2.display()
  box3.display()

  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position,{x:60,y:-60})
	}
}



