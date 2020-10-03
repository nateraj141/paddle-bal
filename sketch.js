var ball, paddle, ballImage, paddleImage, gameState;
function preload() {
  /* preload your images here of the ball and the paddle */
  paddleImage = loadImage("paddle.png");
  ballImage = loadImage("ball.png");
  
}
function setup() {
  createCanvas(400, 400);
  
  gameState = "play";
  if(gameState === "play"){
  ball = createSprite(100,200,10,10);
  ball.addImage(ballImage);
  

  paddle = createSprite(380,200,10,10);
  paddle.addImage(paddleImage);
  }
  

  if( gameState === "play"){
  ball.velocityX=9;
  }
  
}

function draw() {
  if(gameState==="play"){
  background(205,153,0);
  }
  
  edges= createEdgeSprites();

  
  if(gameState ==="play"){
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  
  paddle.collide(edges[2]);
  paddle.collide(edges[3]);
  }
  
  if(ball.bounceOff(paddle)&& gameState === "play"){
    randomSpeed();
  }
  
  if (ball.x>400 && gameState === "play"){
    ball.x = 100;
    ball.velocityX = 8;
    ball.velocityY = 0;
    ball.y = 200; 
  }
  
 
   
  if(keyDown(UP_ARROW) && gameState === "play"){
    paddle.y = paddle.y-19;
  }
  
  if(keyDown(DOWN_ARROW)&& gameState === "play") {
    paddle.y = paddle.y+19;
  } 
  drawSprites();
  }
  
function randomSpeed() { 
  ball.velocityY=random(-8,8);
}

