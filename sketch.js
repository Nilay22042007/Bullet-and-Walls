var wall,bullet
var  width,speed,weight

function setup() {
  createCanvas(1600,400);
  width=random(22,83)
  createSprite(400, 200, 50, 50);
  speed=random(223,321)
  weight=random(30,52)
  bullet=createSprite(50,200,50,50)
  wall=createSprite(1200,200,thickness,height/2)
  bullet.velocityX=speed;

}

function draw() {
  background(255,255,255);  
  drawSprites();
  if(hasCollided(bullet,wall))
{
  bullet.velocityX=0
  var damage=0.5*weight*speed*speed/(width*width*width);
  if(damage>10)
{
  wall.shapeColor=color(255,0,0)
}

if(damage<10)

{
wall.shapoeColor=color(0,230,0)
}
}}
function hasCollided(lBullet,lWall){
  bulletRightEdge=lBullet.x+lBullet.width
  wallLeftEdge=lWall.x
  if(bulletRightEdge>=walleftEdge){
    return true
  }
  return false
}


