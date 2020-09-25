var fixedrect, movingrect;

function setup() {
  createCanvas(800,400);
  movingrect=createSprite(400, 200, 80, 30);
  movingrect.shapeColor="green";
  movingrect.debug=true;
  fixedrect=createSprite(200,200,50,50)
  fixedrect.shapeColor="green";
  fixedrect.debug=true;
}

function draw() {
  background(255,255,255);  
  movingrect.y=World.mouseY;
  movingrect.x=World.mouseX;
  if(isTouching()){
    movingrect.shapeColor="red";
    fixedrect.shapeColor="red";
  }
 console.log(movingrect.width/2+fixedrect.width/2)
 isTouching();
  drawSprites();
}
function isTouching(){
  if(movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2&&
    fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2&& movingrect.y-fixedrect.y<movingrect.
    width/2+fixedrect.width/2 && fixedrect.y-movingrect.y<
    movingrect.width/2+fixedrect.width/2){
     return true;
   }
   else{
     return false;
   }
}