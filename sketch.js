 var wall,car
 var speed,weight
 var deform

 function setup() {
  createCanvas(800,400);
 wall= createSprite(700, 200, 30, 80);
 car= createSprite(100, 200, 30, 30);
speed=random(45,90)
weight=random(400,1500)
car.velocityX=speed

}

function draw() {
 background(255,255,255);  
 if(wall.x-car.x<wall.width/2+car.width/2){
   car.velocityX=0
    deform=(0.5*weight*speed*speed)/22500
  
  if(deform > 180){
    car.shapeColor="red"
  }
  else if(deform < 180 && deform > 80){
    car.shapeColor="yellow"
  }
  else{car.shapeColor="green"}
  }

 drawSprites()
}