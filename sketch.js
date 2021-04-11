const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload() {
backgroundImage = loadImage("GamingBackground.jpg");
}

function setup() {
  createCanvas(1200,700);
  // create sprites here
  engine = Engine.create();
  world = engine.world;

  ground = new Ground (600,680,1200,20);
  superhero = new Superhero (300,800,300,150);
  attach = new Fly(superhero.body,{x:300,y:60});
  block1 = new Block(590,550,80,80);
  block2 = new Block(590,520,80,80);
  block3 = new Block(590,490,80,80);
  block4 = new Block(590,460,80,80);
  block5 = new Block(690,550,80,80);
  block6 = new Block(690,520,80,80);
  block7 = new Block(690,490,80,80);
  block8 = new Block(690,460,80,80);

  monster = new Monster(1000,500,300,300);

  Engine.run(engine);


}

function draw() {
  rectMode(CENTER);
  Engine.update(engine)
  background(backgroundImage);

  superhero.display();
  ground.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  
  monster.display();
}

function mouseDragged(){
  Matter.Body.setPosition(superhero.body,{x:mouseX, y:mouseY})
}



