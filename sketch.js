const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
 
  //level one
  block1 = new Block(300,275,30,40);
  
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);

  blck1 = new Block(640,155,30,40);
  blck2 = new Block(670,155,30,40);
  blck3 = new Block(700,155,30,40);
  blck4 = new Block(730,155,30,40);
  blck5 = new Block(760,155,30,40);

  blck6 = new Block(670,115,30,40);
  blck7 = new Block(700,115,30,40);
  blck8 = new Block(730,115,30,40);
  
  blck9 = new Block(700,75,30,40);

  ball = Bodies.circle(100,200,15);
  
  World.add(world,ball);

  slingShot = new Slingshot(this.ball,{x:100,y:210});

  console.log(this.ball);
  

}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  var pos = ball.position
  imageMode(CENTER)
  image(polygon_img,pos.x,pos.y,40,40)
  
  ground.display();
  stand1.display();
  stand2.display();
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();

  slingShot.display();

  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  blck1.display();
  blck2.display();
  blck3.display();
  blck4.display();
  blck5.display();
  fill("pink");
  blck6.display();
  blck7.display();
  blck8.display();
  fill("turquoise")
  blck9.display();

}

function mouseDragged(){
 Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingShot.fly();
}
