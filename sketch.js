var fixedRect, movingRect;
var fixedRect2, fixedRect3, fixedRect4;
var object1,object2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(200, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  fixedRect2 = createSprite(300, 400, 50, 80);
  fixedRect2.shapeColor = "green";
  fixedRect2.debug = true;
  fixedRect3 = createSprite(400, 400, 50, 80);
  fixedRect3.shapeColor = "green";
  fixedRect3.debug = true;
  fixedRect4 = createSprite(500, 400, 50, 80);
  fixedRect4.shapeColor = "green";
  fixedRect4.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(fixedRect,movingRect)|| isTouching(fixedRect2,movingRect)
  || isTouching(fixedRect3,movingRect)||isTouching(fixedRect4,movingRect)){
    
  }
  else{
    
  }
  
  drawSprites();
}
