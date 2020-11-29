var bullet,speed,weight;
var wall,thikness;

function setup() {
  createCanvas(1600,400);
  
  speed = random(223,321);
  weight = random(400,1500);
  thikness = random(30,52);

  bullet = createSprite(100,200,75,10)
  
  wall = createSprite(1200,200,thikness,200)

  bullet.velocityX = speed

  bullet.shapeColor = color(255)
  wall.shapeColor = color(80,80,80)

}

function draw() {
  background("black");
  
  if(hasCollided(bullet,wall)){
     bullet.velocityX = 0; 
    
     var damage = 0.5 * weight * speed * speed / (thikness * thikness * thikness)

     if(damage > 10){
     wall.shapeColor = color(255,0,0); 
    }

     if(damage < 10){
     wall.shapeColor = color(0,225,0)
    }


  }
bullet.depth = wall.depth
bullet.depth = bullet.depth+1;

drawSprites();

}

