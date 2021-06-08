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
  $(document).on('keydown', handleKeyDown); //todo1                          // change 'eventType' to the type of event you want to handle

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    

  }
  
  /* 
  Called in response to events.
  */
  function handleKeyDown(event) { //todo1//
      console.log(event); //todo1//

      if (event.which === KEYUP) { //todo2  supposed to call variable "up"//
        console.log("up pressed");  //todo2  supposed to print "up pressed"//
      }
      else if (event.which === KEYLEFT) {  //todo2  supposed to call variable "left"//
          console.log("left pressed");  //todo2  supposed to print "left pressed"//
      }
      else if (event.which === KEYRIGHT) {  //todo2  supposed to call variable "right"//
            console.log("right pressed");  //todo2  supposed to print "right pressed"//
      }
      else if (event.which === KEYDOWN) {  //todo2  supposed to call variable "down"//
              console.log("down pressed");  //todo2  supposed to print "down pressed"//
      }
    }
  }
  var KEYUP = { //todo2 meant to be variable for up key//
    "UP": 38,  //todo2, number for up arrow//
  }
  var KEYLEFT = { //todo2 meant to be variable for left key//
    "LEFT": 37,  //todo2, number for left arrow//
  }
  var KEYRIGHT = { //todo2 meant to be variable for right key//
    "RIGHT": 39,  //todo2, number for right arrow//
  }
  var KEYDOWN = {  //todo2 meant to be variable for down key//
    "DOWN": 40,  //todo2, number for down arrow//
  }
  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
//}
