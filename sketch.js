var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var box1, box2, box3;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true, friction:5.0, density:2.0});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);

    boxleftSprite=createSprite(500, 620, 20,100);
	boxleftSprite.shapeColor=color(255,0,0);
    boxleftBody = Bodies.rectangle(550, 600, 20,100 , {isStatic:true} ); 
	World.add(world, boxleftBody);

	boxrightSprite=createSprite(300, 620, 20,100);
	boxrightSprite.shapeColor=color(255,0,0);
    boxrightBody = Bodies.rectangle(350, 600, 20,100 , {isStatic:true} ); 
	World.add(world, boxrightBody);

	boxdownSprite=createSprite(width/2, 670, 220,20);
	boxdownSprite.shapeColor=color(255,0,0);
   boxdownBody = Bodies.rectangle(width/2, 700, 20,100 , {isStatic:true} ); 
	World.add(world, boxdownBody);
	


	
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  

  drawSprites();

  
  //ground.display();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }
}


function isTouching(packageSprite, boxdownSprite){
	if (packageSprite.x - boxdownSprite.x < boxdownSprite.width/2 + packageSprite.width/2
 && boxdownSprite.x - packageSprite.x < boxdownSprite.width/2 + packageSprite.width/2 && packageSprite.y - boxdownSprite.y <
 boxdownSprite.height/2 + packageSprite.height/2 && boxdownSprite.y - packageSprite.y < boxdownSprite.height/2 + packageSprite.height/2) {
	 return false; }
   }
 




  //boxPosition+20, boxY, 20,100 ,