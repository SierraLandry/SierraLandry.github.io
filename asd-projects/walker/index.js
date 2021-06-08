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

  // Make the properties positionX, speedX, positionY, speedY separate variables


  var positionX = 0; // the x-coordinate location for the box

  var speedX = 0;  // the speed for the box along the x-axis

  var positionY = 0; // the x-coordinate location for the box

  var speedY = 0; // the speed for the box along the x-axis

  var KEY = { //todo2 meant to be variable for up key//
    "UP": 38,  //todo2, number for up arrow// 
    "LEFT": 37,  //todo2, number for left arrow//
    'RIGHT': 39,  //todo2, number for right arrow//
    "DOWN": 40,  //todo2, number for down arrow//
  }

  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown); //todo1                          // change 'eventType' to the type of event you want to handle
  $(document).on('keyup', handleKeyUp); //todo6                          // change 'eventType' to the type of event you want to handle
  ///////////////  /////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() { //given//
    repositiongameItem(); //todo4 calling functions from below//
    redrawgameItem();  //todo4 calling functions from below//
  }

  /* 
  Called in response to events.
  */
  function handleKeyDown(event) { //todo1//
      console.log(event.key); //todo1//

      if (event.which === KEY.UP) { //todo2  supposed to call variable "up"//
        speedY = 5; //todo5// 
        //console.log("up pressed");  //todo2  supposed to print "up pressed"//
      }
      else if (event.which === KEY.LEFT) {  //todo2  supposed to call variable "left"//
        speedX = -5; //todo5//
        //console.log("left pressed");  //todo2  supposed to print "left pressed"//
      }
      else if (event.which === KEY.RIGHT) {  //todo2  supposed to call variable "right"//
        speedX = 5;  //todo5//
        //console.log("right pressed");  //todo2  supposed to print "right pressed"//
      }
      else if (event.which === KEY.DOWN) {  //todo2  supposed to call variable "down"//
        speedY = -5;  //todo5//
        //console.log("down pressed");  //todo2  supposed to print "down pressed"//
      }
    }
  /* 
  Called in response to events.
  */
    function handleKeyUp(event) { //todo6//
      console.log(event.which); //todo6//

      if (event.which === KEY.UP) { //todo6  supposed to call variable "up"//
        speedY = 0; //todo6 meant to stop box when key is released//
        //console.log("up released");  //todo6  supposed to print "up released"//
      }
      else if (event.which === KEY.LEFT) {  //todo6  supposed to call variable "left"//
        speedX = 0; //todo6 meant to stop box when key is released//
        //console.log("left released");  //todo6  supposed to print "left released"//
      }
      else if (event.which === KEY.RIGHT) {  //todo6  supposed to call variable "right"//
        speedX = 0;  //todo6 meant to stop box when key is released//
        //console.log("right released");  //todo6  supposed to print "right released"//
      }
      else if (event.which === KEY.DOWN) {  //todo6  supposed to call variable "down"//
        speedY = 0;  //todo6 meant to stop box when key is released//
        //console.log("down released");  //todo6  supposed to print "down released"//
      }
    }

    ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  function repositiongameItem(){ //todo4//
    positionX += speedX; // update the position of the box along the x-axis
    positionY += speedY; // update the position of the box along the y-axis
  };

  function redrawgameItem(){ //todo4//
    $("#gameItem").css("left", positionX);    // draw the box in the new location, positionX pixels away from the "left"
    $("#gameItem").css("top", positionY);    // draw the box in the new location, positionX pixels away from the "top"
  };

  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }

}

