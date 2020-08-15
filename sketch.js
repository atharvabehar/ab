const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,520,70,70);
    box2 = new Box(920,520,70,70);
    pig1 = new Pig(810,550);
    log1 = new Log(810,460,300,PI/2);
    box3 = new Box(700,420,70,70);
    box4 = new Box(920,420,70,70);
    pig2 = new Pig(810,420);
    log2 = new Log(810,360,300,PI/2);
    box5 = new Box(810,340,70,70);
    log4 = new Log(760,300,150,PI/7);
    log5= new Log(870,300,150,-PI/7);
    bird = new Bird(200,200);
    ground = new Ground(600,height,1200,200);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
   log2.display();
    box5.display();
    log4.display();
    log5.display();
    bird.display();
}