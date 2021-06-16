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

  var gameItemPaddle2 = {};
gameItemPaddle2.$element = $("#gameItemPaddle2");
gameItemPaddle2.X = 420;   // same as "left"
gameItemPaddle2.Y = 180;    // same as "top"
gameItemPaddle2.speedY = 0
gameItemPaddle2.speedX = 0

  var gameItemBall = {}; //somehow this affects paddle position//
gameItemBall.$element = $("#gameItemBall");
gameItemBall.X = 215;   // same as "left"
gameItemBall.Y = 230;    // same as "top"
gameItemBall.speedY = 3
gameItemBall.speedX = 3

  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);       // change 'eventType' to the type of event you want to handle
  $(document).on('keyup', handleKeyUp);
  $(document).on('keydown', handleKeyDownT);     // change 'eventType' to the type of event you want to handle
  $(document).on('keyup', handleKeyUpT);
  //define positionx, speedx, position y, and speed y around here//

 
//define key numbers and their purposes around here//

   var KEY = { // meant to be variable for up key//
    "UP": 38,  // number for up arrow// 
     "DOWN": 40,  // number for down arrow//
     "UPT" : 87, //number for W
     "DOWNT" : 83, //number for S
  }
  
  


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
      gameItemBall.X += gameItemBall.speedX ; // update the position of the box along the x-axis
      gameItemBall.X += gameItemBall.speedY; // update the position of the box along the y-axis
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
 //\/ do collide
   function doCollide(gameItemPaddle1, gameItemBall, gameItemPaddle2) {
    // TODO: calculate and store the remaining
    // sides of the square1
    gameItemPaddle1.leftX = gameItemPaddle1.x; //given
    gameItemPaddle1.topY = gameItemPaddle1.y; //given
    gameItemPaddle1.bottomY = gameItemPaddle1.y + gameItemPaddle1.height
    gameItemPaddle1.rightX = gameItemPaddle1.x + gameItemPaddle1.width

    gameItemPaddle2.leftX = gameItemPaddle2.x; //given
    gameItemPaddle2.topY = gameItemPaddle2.y; //given
    gameItemPaddle2.bottomY = gameItemPaddle2.y + gameItemPaddle2.height
    gameItemPaddle2.rightX = gameItemPaddle2.x + gameItemPaddle2.width

    // TODO: Do the same for square2
    gameItemBall.leftX = gameItemBall.x;
    gameItemBall.topY = gameItemBall.y;
    gameItemBall.bottomY = gameItemBall.y + gameItemBall2.height
    gameItemBall.rightX = gameItemBall.x + gameItemBall.width

    // TODO: Return true if they are overlapping, false otherwise
	
    if (gameItemPaddle1.rightX > gameItemBall.leftX &&
      gameItemPaddle1.leftX < gameItemBall.rightX &&
      gameItemPaddle1.bottomY > gameItemBall.topY &&
      gameItemPaddle1.topY < gameItemBall.bottomY &&
      //paddle 2 \/ //
      gameItemPaddle2.rightX > gameItemBall.leftX &&
      gameItemPaddle2.leftX < gameItemBall.rightX &&
      gameItemPaddle2.bottomY > gameItemBall.topY &&
      gameItemPaddle2.topY < gameItemBall.bottomY) {
      return true;
    }
  
    else {
      return false;
    }
  }
// /\ do collide

    function handlePaddleCollisions(gameItemPaddle1, gameItemPaddle2, gameItemBall){
        if (doCollide(gameItemBall, gameItemPaddle1)) {
          gameItemBall.speedX = -3;
        }
        else if (doCollide(gameItemBall, gameItemPaddle2)) {
          gameItemBall.speedX = 3;
        }

    }



//handle paddle collisions functions. change balls speed
  // function doCollide(gameItemball, gameItemPaddle1, gameItemPaddle2) {
  //  
  //  return true // return true if the objects do collide
  //   if (doCollide(gameItemball, gameItemPaddle1)) {
  //     // bounce ball off paddle Left
  //     //INSERT SOMETHING HERE
  //   }
  //   else if(doCollide(gameItemball, gameItemPaddle2)) {
  //     // bounce ball off paddle Right
  //     //INSERT SOMETHING HERE
  
  //return false // return false if the objects do not collide
  //   }
  // }
  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}
///DO NOT GO UNDER HERE AGAIN//