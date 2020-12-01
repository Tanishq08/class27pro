
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint =Matter.Constraint
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  holder=new Holder(180,100,250,30)
    ball1=new Ball(100,300,20,20)
	ball2=new Ball(140,300,20,20)
	ball3=new Ball(180,300,20,20)
	ball4=new Ball(220,300,20,20)
  ball5=new Ball(260,300,20,20)
  sling1=new Sling(ball1.body,{x:100,y:100})
  sling2=new Sling(ball2.body,{x:140,y:100})
  sling3=new Sling(ball3.body,{x:180,y:100})
  sling4=new Sling(ball4.body,{x:220,y:100})
  sling5=new Sling(ball5.body,{x:260,y:100})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  holder.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
  drawSprites();
 
}
function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-40,y:-40})
  }
}


