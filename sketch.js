var bullet;
var wall;
var speed, weight, deformation, thickness;
function setup() {
  createCanvas(8000,4000);
  speed = random(223,321);
  weight = random(30, 52);
  thickness = random(22, 88); 
  wall = createSprite(750, 200, thickness, height/2);
  bullet = createSprite(100, 200, 50, 50); 
  bullet.velocityX = speed/4; // this is so that the bullet never passes all the way through the wall

  

}


function draw() {
  background(0);  
  if (isTouching(bullet, wall)) {
    bullet.velocityX = 0;
    deformation = 0.5 * weight * speed * speed / (thickness * thickness * thickness);
  //console.log("speed:" + speed, "weight:" + weight,  "deformation:" + deformation)
    if (deformation < 10) {
      wall.shapeColor = color(0, 255, 0)
    } else if (deformation > 10) {
      wall.shapeColor = color(255, 0, 0);
    } 

  } 
  collide(bullet, wall);
  


  drawSprites();
}