var bg1,scene
var knight,knightImage
var fb;

function setup() {
  createCanvas(1000,570);
  scene=createSprite(500,200,1000,570)
  scene.addImage(bg1)
  knight=createSprite(100,displayHeight-350,20,20)
 knight.addImage("knight",knightImage)
 knight.scale=0.3;
 scene.scale=1.5;
}

function preload(){
bg1=loadImage("Images/BG1.png");
knightImage=loadImage("Images/Knight 1.png");
fireBall=loadImage("Images/Fire ball.png");
}

function draw() {
  background("black");  
 console.log("displayWidth:"+displayWidth)
 console.log("displayHeight:"+displayHeight)
 if(keyDown(LEFT_ARROW)){
 knight.velocityX=2.5;
 knight.velocityY=0;
 }
 if(keyDown(RIGHT_ARROW)){
  knight.velocityX=-2.5;
  knightvelocityY=0;
 }
 setInterval(Obstacles,1000);
    drawSprites();
}
function Obstacles (){
  if(frameCount% 80===0){
  fb=createSprite(Math.round(random(0,400)),Math.round(random(0,400)),20,40)
  fb.addImage("fb",fireBall);
  fb.scale=0.5;
  }
}