const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var crumpledPaper;
var ground;
var dustbin, dustbinImg, dustbinBottom, dustbinSide1, dustbinSide2;

function preload()
{
	//dustbinImg = loadImage ("sprites/dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	crumpledPaper = new Paper (60,595,70);
	ground = new Ground (400,620,800,30);
	dustbin = new Dustbin(600,510,200,200);
	//dustbinBottom = new Dustbin (600,595,200,20);
	//dustbinSide1 = new Dustbin (510,505,20,200);
	//dustbinSide2 = new Dustbin (690,505,20,200);	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");

  Engine.update(engine);


  dustbin.display();
  crumpledPaper.display();
  ground.display();
  /*dustbinBottom.display();
  dustbinSide2.display();
  dustbinSide1.display();*/
  drawSprites();
 
}

function keyPressed ()
{
if (keyCode === UP_ARROW)
{
	Matter.Body.applyForce (crumpledPaper.body, crumpledPaper.body.position, {x:90, y:-95});
}
}