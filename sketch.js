function preload() {
  //load game assets
  snakeimg=loadImage("snake.png")
  snakeimg2=loadImage("snake2.png")
  back=loadImage("background.png")
  car=loadImage("Carrot.png")
  bun=loadImage("Rabbit.jpg")
  brick=loadImage("brick.png")
}


function setup() {
  createCanvas(900,600);
 bunny=createSprite(100,500,50,80)
 bunny.addImage(bun)
 bunny.scale=0.1
 carrot=createSprite(860,50,30,50)
 carrot.addImage(car)
 carrot.scale=0.05
  obs1=createSprite(450,200,150,30)
  obs1.addImage(brick)
  obs1.scale=0.5
  obs2=createSprite(700,200,150,30)
  obs2.addImage(brick)
  obs2.scale=0.5
  obs3=createSprite(800,300,150,30)
  obs3.addImage(brick)
  obs3.scale=0.5
  obs4=createSprite(100,300,150,30)
  obs4.addImage(brick)
  obs4.scale=0.5
  edges=createEdgeSprites()
  obs1.velocityX=5
  obs2.velocityX=-5
  obs3.velocityX=5
  obs4.velocityX=-5
 bunny.shapeColor="pink"
 carrot.shapeColor="orange"
 obs1.shapeColor=obs2.shapeColor="black"
 obs3.shapeColor=obs4.shapeColor="blue"
 snakeGroup=new Group()
}

function draw() {
  background(back);
  
  if(keyDown("up")){
    bunny.y+=-5
  }
  if(keyDown("down")){
    bunny.y+=5
  }
  if(keyDown("left")){
    bunny.x+=-5
  }
  if(keyDown("right")){
    bunny.x+=5
  }

  for(i=0;i<4;i++){
   obs1.bounceOff(edges[i])
   obs2.bounceOff(edges[i])
   obs3.bounceOff(edges[i])
   obs4.bounceOff(edges[i])
   bunny.bounceOff(edges[i])
  }
  if(obs1.isTouching(obs2)){
    obs1.velocityX*=-1
    obs2.velocityX*=-1
  }
  if(obs3.isTouching(obs4)){
    obs3.velocityX*=-1
    obs4.velocityX*=-1
  }
  if(bunny.isTouching(obs1) || bunny.isTouching(obs2) || bunny.isTouching(obs3) || bunny.isTouching(obs4)){
    bunny.x=100
    bunny.y=500
  }
   
  for(var i=0;i<(snakeGroup).length;i++){
    var temp=(snakeGroup).get(i) ;
    if(bunny.isTouching(temp)){
      bunny.x=100;
      bunny.y=500;
    }
  }

  generateSnakes()
  drawSprites()
  if(bunny.isTouching(carrot)){
    textSize(80)
    fill("violet")
    text("You won",300,300)
  }
}

function generateSnakes(){
  if(frameCount%90==0){
    snake=createSprite(600,random(70,520),random(80,150),5)
    snake.shapeColor="red"
    snake.velocityX+=random(-4,4)
    if(snake.velocityX>0){
    snake.addImage(snakeimg2)
    }
    else{
      snake.addImage(snakeimg)
    }
    snake.scale=random(0.02,0.06)
    snakeGroup.add(snake)
  }
  
}



