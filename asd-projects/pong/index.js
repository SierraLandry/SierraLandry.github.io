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
gameItemPaddle1.speedX = 0

var gameItemBall = {}; //somehow this affects paddle position//
gameItemBall.$element = $("#gameItemBall");
gameItemBall.X = 215;   // same as "left"
gameItemBall.Y = 230;    // same as "top"
gameItemBall.speedY = 0
gameItemPaddle1.speedX = 0

  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);       // change 'eventType' to the type of event you want to handle
  $(document).on('keyup', handleKeyUp);
  $(document).on('keydownT', handleKeyDownT);     // change 'eventType' to the type of event you want to handle
  $(document).on('keyupT', handleKeyUpT);
  //define positionx, speedx, position y, and speed y around here//

 
//define key numbers and their purposes around here//

   var KEY = { // meant to be variable for up key//
    "UP": 38,  // number for up arrow// 
     "DOWN": 40,  // number for down arrow//
     "UP2" : 87, //number for W
     "DOWN2" : 83, //number for S
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
    redrawgameItemPaddle1();
    redrawgameItemPaddle2();
    repositiongameItemPaddle2();
    repositiongameItemBall();
    redrawgameItemBall();
  };
  
  /* 
  Called in response to events.
  */
  function handleKeyDown(event) { //key press player 1
      if (event.which === KEY.UP) { //  supposed to call variable "up"//
        gameItemPaddle1.speedX = 5; 
       }
       
      else if (event.which === KEY.DOWN) {  //  supposed to call variable "down"//
        gameItemPaddle1.speedY = -5;  
       }
  } //do not delete <--//
  function handleKeyDownT(event) { //key press player 2//
    if (event.which === KEY.UPT) { //  supposed to call variable "upT"//
      gameItemPaddle2.speedX = 5; // meant to stop box when key is released//
       }

    else if (event.which === KEY.DOWNT) {  //  supposed to call variable "downT"//
      gameItemPaddle2.speedY = -5;  // meant to stop box when key is released//
       } 
      };//do not delete

      function handleKeyUp(event) { //key release player 1
        if (event.which === KEY.UP) { //  supposed to call variable "up"//
          gameItemPaddle1.speedX = 0; 
         }

        else if (event.which === KEY.DOWN) {  //  supposed to call variable "down"//
          gameItemPaddle1.speedY = 0;  
         }
    } //do not delete <--//

    function handleKeyUpT(event) { //key release player 2
      if (event.which === KEY.UPT) { //  supposed to call variable "upT"//
        gameItemPaddle2.speedX = 0; 
       }
       
      else if (event.which === KEY.DOWNT) {  //  supposed to call variable "downT"//
        gameItemPaddle2.speedY = 0;  
       }
  } //do not delete <--//


  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

     function repositiongameItemPaddle1(){ 
     gameItemPaddle1.speedX ; // update the position of the box along the x-axis
     gameItemPaddle1.speedY; // update the position of the box along the y-axis
   };

   function repositiongameItemPaddle2(){ 
    gameItemPaddle2.speedX ; // update the position of the box along the x-axis
     gameItemPaddle2.speedY; // update the position of the box along the y-axis
  };

   function redrawgameItemPaddle1(){ 
    gameItemPaddle1.speedX ; // update the position of the box along the x-axis
    gameItemPaddle1.speedY; // update the position of the box along the y-axis
   };

   function redrawgameItemPaddle2(){ 
    $("#gameItemPaddle2").css("left", gameItemPaddle2.speedX);    // draw the box in the new location, positionX pixels away from the "left"
    $("#gameItemPaddle2").css("top", gameItemPaddle2.speedY);    // draw the box in the new location, positionX pixels away from the "top"
  };

  function repositiongameItemBall(){ 
    gameItemBall.speedX ; // update the position of the box along the x-axis
     gameItemBall.speedY; // update the position of the box along the y-axis
  };

   function redrawgameItemBall(){ 
     $("#gameItemBall").css("left", gameItemBall.speedX);    // draw the box in the new location, positionX pixels away from the "left"
     $("#gameItemBall").css("top", gameItemBall.speedY);    // draw the box in the new location, positionX pixels away from the "top"
   };

  // function doCollide(gameItemball, gameItemPaddle1, gameItemPaddle2) {
  //   // return false if the objects do not collide
  //   // return true if the objects do collide
  //   if (doCollide(gameItemball, gameItemPaddle1)) {
  //     // bounce ball off paddle Left
  //     //INSERT SOMETHING HERE
  //   }
  //   else if(doCollide(gameItemball, gameItemPaddle2)) {
  //     // bounce ball off paddle Right
  //     //INSERT SOMETHING HERE
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