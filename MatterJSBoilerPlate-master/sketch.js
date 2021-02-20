const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;
var ball ;
var bin1 , bin2 , bin3 , bin4 ;
var land ;

function preload(){
 //ball = creatSprites()
}

    function setup(){
        var canvas = createCanvas(400,400);
        engine = Engine.create();
        world = engine.world;
    
        var ground_options ={
            isStatic: true
        }
    
        ground = Bodies.rectangle(200,390,200,20,ground_options);
        World.add(world,ground);
    
        var ball_options ={
            restitution : 0.5 }
    
    
        ball= Bodies.circle(200,100,20,ball_options);
        World.add(world,ball);
    }

	



	
  








