const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var nst;
var stat;
var chain;
var gameState = "swing";
var mousee;
function setup(){
    var canvas = createCanvas(1270,605);
    engine = Engine.create();
    world = engine.world;
    nst = new BaseClass2(635,50,170,100,PI/2);
    stat = new BaseClass(635,300,170,100,PI/2);
    chain = new Cons(nst.body,stat.body);
}
function draw(){
    background(255);
    Engine.update(engine);
    chain.display();
    nst.display();
    stat.display();
    console.log(gameState);
    mousee = rect(mouseX,mouseY,0.1,0.1);
    if(keyIsDown(32)){
        gameState = "hold";
    }
    if(keyIsDown(13) && gameState == "hold"){
        Matter.Body.setPosition(stat.body,{x:635,y:300});
        Matter.Body.setVelocity(stat.body,{x: 0,y:0});
        gameState = "reset";
    }
    if(gameState == "hold"){
        Matter.Body.setPosition(stat.body,{x:mouseX,y:mouseY});
    }
}
function keyPressed(){
    if(gameState == "hold" && keyCode != 13 && keyCode != 32){
        gameState = "rel";
        
    }
}