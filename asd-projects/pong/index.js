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


  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);    //example: $(document).on('keydown', handleKeyDown);                       // change 'eventType' to the type of event you want to handle
  $(document).on('keyup', handleKeyUp);
  $(document).on('keydown2', handleKeyDown2);    //example: $(document).on('keydown', handleKeyDown);                       // change 'eventType' to the type of event you want to handle
  $(document).on('keyup2', handleKeyUp2);
  //define positionx, speedx, position y, and speed y around here//

   var position = {};
   position.x = 0,
   position.y = 0,
  
   var speed = {}; 
   speed.x = 0,
   speed.y = 0,

//define key numbers and their purposes around ehre//

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
  function handleEvent(event) {
      if (event.which === KEY.UP) { //  supposed to call variable "up"//
         speedY = 5; 
       }
       
      else if (event.which === KEY.DOWN) {  //  supposed to call variable "down"//
         speedY = -5;  
       }
  } //do not delete <--//
  function handleEvent(event) {
    if (event.which === KEY.UP2) { //  supposed to call variable "up"//
         speedY = 0; // meant to stop box when key is released//
    
       }
      
    else if (event.which === KEY.DOWN2) {  //  supposed to call variable "down"//
         speedY = 0;  // meant to stop box when key is released//
       } 
      };//do not delete
  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

     function repositiongameItemPaddle1(){ 
     position.X += speed.X; // update the position of the box along the x-axis
     position.Y += speed.Y; // update the position of the box along the y-axis
   };

   function repositiongameItemPaddle2(){ 
    position.X += speed.X; // update the position of the box along the x-axis
    position.Y += speed.Y; // update the position of the box along the y-axis
  };

   function redrawgameItemPaddle1(){ 
     $("#gameItemPaddle1").css("left", positionX);    // draw the box in the new location, positionX pixels away from the "left"
     $("#gameItemPaddle1").css("top", positionY);    // draw the box in the new location, positionX pixels away from the "top"
   };

   function redrawgameItemPaddle2(){ 
    $("#gameItemPaddle2").css("left", positionX);    // draw the box in the new location, positionX pixels away from the "left"
    $("#gameItemPaddle2").css("top", positionY);    // draw the box in the new location, positionX pixels away from the "top"
  };

  function doCollide(gameItemball, gameItemPaddle1, gameItemPaddle2) {
    // return false if the objects do not collide
    // return true if the objects do collide
    if (doCollide(gameItemball, gameItemPaddle1)) {
      // bounce ball off paddle Left
    }
    else if(doCollide(gameItemball, gameItemPaddle2)) {
      // bounce ball off paddle Right
    }
  }
  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}
///DO NOT GO UNDER HERE AGAIN//