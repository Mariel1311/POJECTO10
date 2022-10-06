var ship, ship_1, ship_3;
function preload(){
  ship_1 = loadAnimation("ship-1.png", "ship-2.png");
}



function setup(){
  createCanvas(400,400);
  ship = createSprite(50,160,20,50);
  ship.addAnimation("running",ship_1);
  ship.scale = 0.5;
  ship.x = 50;
}

function draw() {
  background("blue");
 console.log(ship_1.x);

 if (keyDown("space") && ship_1.x >= 100){
  ship_1.velocityX = -10;
} 

  ship_1.velocityX = ship_1.velocityX + 0.4;
  drawSprites();
}
