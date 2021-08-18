var img;
var bg,timeImage;
function preload(){
  img=loadImage("images/forest.jpg")
  timeImage=loadImage("images/timeturner.png")
}


function setup() {
  createCanvas(1380,600);
  bg=createSprite(650,400)
  
  bg.addImage(img)
  bg.scale=0.7
  bg.velocityX=3

}

function draw() {
 
  background("black");
  if(bg.x>650){
    bg.x=550
  }
time();

  drawSprites();
  fill("white")
text(mouseX+","+mouseY,200,200)
}
function time(){
  if (frameCount%300===0){
    var timeTurner=createSprite(1239,514,50,50)
    timeTurner.addImage(timeImage)
    timeTurner.scale=0.5
    timeTurner.velocityX=-1
    timeTurner.lifetime=700
  }
}