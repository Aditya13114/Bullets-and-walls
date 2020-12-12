var wall;
var bullet;




function setup() {
  createCanvas(800,400);

  bullet= createSprite(50,200,50,20);
  //car.shapecolor(blue);
  
  speed = random(55,90)
  weight = random(500,1500);
  thick = random(22,83);
  bullet.velocityX =10;


  wall = createSprite(683,197,35,100);

}

function draw() {
  background("blue"); 
  fill("black");
  //text(mouseX+","+mouseY,mouseX,mouseY);
   

 


 if(collide(wall,bullet))
  
 {
  


    bullet.velocityX = 0;
        bullet.x = wall.x-20;
        var damage = (0.5*weight*speed*speed)/(thick*thick*thick);
        if(damage >180)
        {
          wall.shapeColor = "red"
        }

        if(damage < 80)
        {
          wall.shapeColor = "yellow"
        }
        if(damage < 180 && damage  > 80){
          wall.shapeColor = "green"

        }

        

 }



  drawSprites();
}
function collide(lwall,lbullet){
  if(lwall.x-lbullet.x < (lbullet.width+lwall.width)/2){
    return true;
  }else { return false;}
}