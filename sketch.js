var fixed_rect,moving_rect;
var ob1,ob2,ob3,ob4
function setup() {
 
  createCanvas(800,400);
  fixed_rect=createSprite(200,200,50,80)
  moving_rect=createSprite(400,200,80,30)
  moving_rect.shapeColor="green"
  fixed_rect.shapeColor="green"
  ob1=createSprite(30,30,50,50)
  ob2=createSprite(100,30,50,50)
  ob3=createSprite(180,30,50,50)
  ob4=createSprite(250,30,50,50)
  ob1.shapeColor="green"
  ob2.shapeColor="green"
  ob3.shapeColor="green"
  ob4.shapeColor="green"
}  

function draw() {
  background(0);  
  moving_rect.x=mouseX
  moving_rect.y=mouseY

  text(mouseX+ ","+ mouseY,mouseX,mouseY)
if (isTouching(moving_rect,ob1))
{
  moving_rect.shapeColor="yellow"
  ob1.shapeColor="yellow"
}
else if (isTouching(moving_rect,ob2)){
  moving_rect.shapeColor="yellow"
  ob2.shapeColor="yellow" 
}
else{
  moving_rect.shapeColor="green"
  ob1.shapeColor="green"
  ob2.shapeColor="green"
}

  drawSprites();
}
