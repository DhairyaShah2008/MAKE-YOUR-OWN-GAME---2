
var titleSlide,titleSlideI1,titleSlideI2,titleSlideI3
var gameState=0
var form, player, game

var next
function preload()
{

titleSlideI1=loadImage("Media/TitleSlide.gif")
titleSlideI2=loadImage("Media/Login-Background.png")
titleSlideI3=loadImage("Media/Background.png")

}
function setup() {
createCanvas(windowWidth, windowHeight); 
game=new Game()
game.start()
}
function draw() {
  background("white");
   
    console.log(gameState)

  
  
  if(gameState===0){
image(titleSlideI1,width-width,height-height,width,height)
}
 
if(gameState===1){

image(titleSlideI2,width-width,height-height,width,height)

}
 drawSprites();
}
function windowResized(){
	resizeCanvas(windowWidth,windowHeight)

}