const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var hexagon,constraint,ground,platform1, slingshot;
var block1,block2,block3,block4,block5,block6,block7,block8,
block9,block10,block11,block12,block13,block14,block15,block16;

var gameState = "onSling";



function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform1 = new Ground(800,305,300,10);

    hexagon = new Hexagon(150,height/2)

    //top
    block1 = new Block(800,160,30,40);
    //2nd layer
    block2 = new Block(770,200,30,40);
    block3 = new Block(800,200,30,40);
    block4 = new Block(830,200,30,40);
    //3rd layer
    block5 = new Block(740,240,30,40);
    block6 = new Block(770,240,30,40);
    block7 = new Block(800,240,30,40);
    block8 = new Block(830,240,30,40);
    block9 = new Block(860,240,30,40);
    //4thlayer
    block10 = new Block(710,280,30,40);
    block11 = new Block(740,280,30,40);
    block12 = new Block(770,280,30,40);
    block13 = new Block(800,280,30,40);
    block14 = new Block(830,280,30,40);
    block15 = new Block(860,280,30,40);
    block16 = new Block(890,280,30,40);

    constraint = new Sling(hexagon.body,{x:200, y:height/2});

}

function draw(){
    background(0);

    
    Engine.update(engine);

    if (gameState!=="launched"){
        textAlign(CENTER);
        textSize(17);
        text("drag and release the hexagon to launch it",300,350);
    }

    if (gameState ==="launched"){
        textAlign(CENTER);
        textSize(17);
        text("press space to reset the hexagon",300,325);
        //text("press R to reset the blocks",300,355);
    } 

    //strokeWeight(4);
    
    constraint.display();

    ground.display();
    platform1.display();

    fill(255,255,255);
    constraint.display();

    fill(220);
    block1.display();

    fill(0,255,255);
    block2.display();
    block3.display();
    block4.display();


    fill(255,128,128);
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();


    fill(0,128,255);
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();

    hexagon.display();
      
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(hexagon.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    constraint.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
        constraint.attach(hexagon.body);
      Matter.Body.setPosition(hexagon.body, {x:200 , y:height/2 });
      gameState= "onSling";
    }
    //if(keyCode === 82){
      //Matter.Body.setPosition(block1.body, {x:800 , y:160 });

      //Matter.Body.setPosition(block2.body, {x:770 , y:200 });
      //Matter.Body.setPosition(block3.body, {x:800 , y:200 });
      //Matter.Body.setPosition(block4.body, {x:830 , y:200});

      ///Matter.Body.setPosition(block5.body, {x:740 , y:240 });
      //Matter.Body.setPosition(block6.body, {x:770 , y:240 });
      //Matter.Body.setPosition(block7.body, {x:800 , y:240 });
      //Matter.Body.setPosition(block8.body, {x:830 , y:240 });
      //Matter.Body.setPosition(block9.body, {x:860 , y:240 });

      //Matter.Body.setPosition(block10.body, {x:710 , y:280 });
      //Matter.Body.setPosition(block11.body, {x:740 , y:280 });
      //Matter.Body.setPosition(block12.body, {x:770 , y:280 });
      //Matter.Body.setPosition(block13.body, {x:800 , y:280 });
      //Matter.Body.setPosition(block14.body, {x:830 , y:280 });
      //Matter.Body.setPosition(block15.body, {x:860 , y:280 });
      //Matter.Body.setPosition(block16.body, {x:890 , y:280 });
        //}
}
