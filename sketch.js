var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
   

    //create 4 different surfaces

    canvas = createCanvas(800,600);

    surface1 = createSprite(0,580,360,30) ; 
   surface1.shapeColor = rgb(200,255,0) ; 

    surface2 = createSprite(295,580,200,30) ; 
    surface2.shapeColor = rgb(0,100,0) ;

    surface3 = createSprite(515,580,200,30) ; 
   surface3.shapeColor = rgb(289,200,2) ; 

    surface4 = createSprite(740,580,220,30) ; 
   surface4.shapeColor = rgb(0,0,255) ; 



    //create box sprite and give velocity

    box = createSprite(random(20,750),100,40,40) 
    box.shapeColor = rgb(233,150,8) ; 
    box.velocityX = 4 ; 
    box.velocityY = 8 ; 
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
edges = createEdgeSprites()
box.bounceOff(edges)
if(surface1.isTouching(box)&& box.bounceOff(surface1)) {
    box.shapeColor = rgb(300,241,6)
    music.play()
}
if(surface2.isTouching(box)){
    box.shapeColor = rgb(259,173,10)
    box.velocityX = 0 ; 
    box.velocityY = 0 ; 
    music.stop()
}
if(surface3.isTouching(box)&& box.bounceOff(surface3)) {
    box.shapeColor = rgb(210,174,15)
}
if(surface4.isTouching(box)&& box.bounceOff(surface4)) {
    box.shapeColor = rgb(210,104,6)
}
 drawSprites()
}
