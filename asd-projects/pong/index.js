/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  
  // Game Item Objects
  var gameItemPaddle1 = {};
gameItemPaddle1.$element = $("#gameItemPaddle1");
gameItemPaddle1.X = 10;   // same as "left"
gameItemPaddle1.Y = 180;    // same as "top" //give speed x value
gameItemPaddle1.speedY = 0
gameItemPaddle1.speedX = 0
gameItemPaddle1.width = 20
gameItemPaddle1.height = 80

  var gameItemPaddle2 = {};
gameItemPaddle2.$element = $("#gameItemPaddle2");
gameItemPaddle2.X = 420;   // same as "left"
gameItemPaddle2.Y = 180;    // same as "top"
gameItemPaddle2.speedY = 0
gameItemPaddle2.speedX = 0
gameItemPaddle2.width = 20
gameItemPaddle2.height = 80

  var gameItemBall = {}; //somehow this affects paddle position//
gameItemBall.$element = $("#gameItemBall");
gameItemBall.X = 215;   // same as "left"
gameItemBall.Y = 230;    // same as "top"
gameItemBall.speedY = Math.random() * 6 - 3;  //diagonal 
gameItemBall.speedX = 3;    //horizontal speed
gameItemBall.width = 20
gameItemBall.height = 20

  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);       // change 'eventType' to the type of event you want to handle
  $(document).on('keyup', handleKeyUp);
  $(document).on('keydown', handleKeyDownT);     // change 'eventType' to the type of event you want to handle
  $(document).on('keyup', handleKeyUpT);
  //define positionx, speedx, position y, and speed y around here//

  var BOARD_WIDTH = $('#board').width() ;
  var BOARD_HEIGHT = $('#board').height();

//define key numbers and their purposes around here//

   var KEY = { // meant to be variable for up key//
    "UP": 38,  // number for up arrow// 
     "DOWN": 40,  // number for down arrow//
     "UPT" : 87, //number for W
     "DOWNT" : 83, //number for S
  }
  
  // var obj1= updateScore1("#gameItemScore1");
  // var obj2= updateScore2("#gameItemScore2")


  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() { //given//
    
    repositiongameItemPaddle1();
    repositiongameItemPaddle2();
    repositiongameItemBall();
    redrawgameItemPaddle1();
    redrawgameItemPaddle2();
    redrawgameItemBall();
    handlePaddleCollisions(gameItemPaddle1, gameItemBall);
    handlePaddleCollisions(gameItemPaddle2, gameItemBall);
    collideBoard(gameItemPaddle1);
    collideBoard(gameItemPaddle2);
    collideBoard(gameItemBall);
  };
  
  /* 
  Called in response to events.
  */
  function handleKeyDown(event) { //key press player 1
      if (event.which === KEY.UP) { //  supposed to call variable "up"//
        gameItemPaddle1.speedY = -5; 
       }
       
      else if (event.which === KEY.DOWN) {  //  supposed to call variable "down"//
        gameItemPaddle1.speedY = 5;  
       }
  } //do not delete <--//
  function handleKeyDownT(event) { //key press player 2//
      if (event.which === KEY.UPT) { //  supposed to call variable "upT"//
        gameItemPaddle2.speedY = -5; 
       }

       else if (event.which === KEY.DOWNT) {  //  supposed to call variable "downT"//
        gameItemPaddle2.speedY = 5;  
       } 
  };//do not delete

      function handleKeyUp(event) { //key release player 1
        if (event.which === KEY.UP) { //  supposed to call variable "up"//
          gameItemPaddle1.speedY = 0; 
         }

        else if (event.which === KEY.DOWN) {  //  supposed to call variable "down"//
          gameItemPaddle1.speedY = 0;  
         }
    } //do not delete <--//

    function handleKeyUpT(event) { //key release player 2
      if (event.which === KEY.UPT) { //  supposed to call variable "upT"//
        gameItemPaddle2.speedY = 0; 
       }
       
      else if (event.which === KEY.DOWNT) {  //  supposed to call variable "downT"//
        gameItemPaddle2.speedY = 0;  
       }
  } //do not delete <--//


  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

     function repositiongameItemPaddle1(){ 
      gameItemPaddle1.X += gameItemPaddle1.speedX; // update the position of the box along the x-axis
      gameItemPaddle1.Y += gameItemPaddle1.speedY; // update the position of the box along the y-axis
   };

    function repositiongameItemPaddle2(){ 
      gameItemPaddle2.X += gameItemPaddle2.speedX; // update the position of the box along the x-axis
      gameItemPaddle2.Y += gameItemPaddle2.speedY; // update the position of the box along the y-axis
    };

    function repositiongameItemBall(){ 
      gameItemBall.X += gameItemBall.speedX; // update the position of the box along the x-axis
      gameItemBall.Y += gameItemBall.speedY; // update the position of the box along the y-axis
    };

   function redrawgameItemPaddle1(){ 
    $("#gameItemPaddle1").css("left", gameItemPaddle1.X);    // draw the box in the new location, positionX pixels away from the "left"
    $("#gameItemPaddle1").css("top", gameItemPaddle1.Y);    // draw the box in the new location, positionX pixels away from the "top"
   };

   function redrawgameItemPaddle2(){ 
    $("#gameItemPaddle2").css("left", gameItemPaddle2.X);    // draw the box in the new location, positionX pixels away from the "left"
    $("#gameItemPaddle2").css("top", gameItemPaddle2.Y);    // draw the box in the new location, positionX pixels away from the "top"
  };

   function redrawgameItemBall(){ 
     $("#gameItemBall").css("left", gameItemBall.X);    // draw the box in the new location, positionX pixels away from the "left"
     $("#gameItemBall").css("top", gameItemBall.Y);    // draw the box in the new location, positionX pixels away from the "top"
   };

  //  function updateScore(obj){
  // $("h2").text(' 0 ');
  //  }

 //\/ do collide
   function doCollide(paddle, ball) {
    // TODO: calculate and store the remaining
    // sides of the square1
    paddle.leftX = paddle.X; //given
    paddle.topY = paddle.Y; //given
    paddle.bottomY = paddle.Y + paddle.height
    paddle.rightX = paddle.X + paddle.width ///????!!!


    // TODO: Do the same for square2
    ball.leftX = ball.X;
    ball.topY = ball.Y;
    ball.bottomY = ball.Y + ball.height
    ball.rightX = ball.X + ball.width

    // TODO: Return true if they are overlapping, false otherwise
	
    if (paddle.rightX > ball.leftX &&
      paddle.leftX < ball.rightX &&
      paddle.bottomY > ball.topY &&
      paddle.topY < ball.bottomY ) {
      return true;
    }
  
    else {
      return false;
    }
  }
  // /\ do collide

    function handlePaddleCollisions(paddle, ball){
      if (doCollide(paddle, ball)) {
        ball.speedX = gameItemBall.speedX * -1 //change to reverse direction;
        
      }
      else {
        return false;
      }

  }

  

function collideBoard(object){  //suggestion: chaining conditionals
        
  if (object.X < 0 ||
    object.X > BOARD_WIDTH
    ){
  object.X -= speedX;
  object.speedX * -1;
  }
   if (object.Y < 0 ||
    object.Y > BOARD_HEIGHT){
      object.Y -= speedY;
  object.speedY * -1;
    }

} //keep

//object.Y -= speedY;
//object.speedY * -1;

 

  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}
///DO NOT GO UNDER HERE AGAIN//