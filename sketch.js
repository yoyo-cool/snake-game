var grant
function preload(){
  apple=loadImage("Apple.png")
  banana=loadImage("banana.png")
  snakeImg=loadImage("snake.png")
}
function setup() {
  createCanvas(800,800);
  foodGroup=new Group()
  snake1=new snake()
  food1=new food(random(100,700),random(100,700))
  foodGroup.add(food1.body)

}

function draw() {
  background("black");  
  drawSprites();
  //snake1.body.x=mouseX
  //snake1.body.y=mouseY
  snake1.body.overlap(foodGroup,eaten)
  //snake1.body.pointTo(food1.body.x,food1.body.y)
}

function eaten(snake1,food1){
  food1.destroy()
  food1=new food(random(100,700),random(100,700))
  foodGroup.add(food1.body)
}

function keyPressed(){
  if(keyCode===RIGHT_ARROW){
    snake1.body.x=snake1.body.x+10
    snake1.body.rotation=-90
  } else if(keyCode===LEFT_ARROW){
    snake1.body.x=snake1.body.x-10
    snake1.body.rotation=90
  }else if(keyCode===UP_ARROW){
    snake1.body.y=snake1.body.y-10
    snake1.body.rotation=180
  }else if(keyCode===DOWN_ARROW){
    snake1.body.y=snake1.body.y+10
    snake1.body.rotation=0
  }
}