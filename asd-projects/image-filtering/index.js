// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads and is where you should call your functions.
$(document).ready(function(){
    const $display = $('#display');

    // TODO: Call your apply function(s) here
    applyFilter(reddify);  //step 1 todo 1  <call reddify here for todo 2 step 4 
    applyFilter(decreaseBlue);
    applyFilter(increaseGreenByBlue);

    render($display, image);
});

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

    

// TODO 2 & 4: Create the applyFilter function here
function applyFilter(                                  //apply filter \/
      filterFunction //todo4 step 2
){ //todo 4 step 
//own thing \/  working fine
        for (var r = 0; r < image.length; r++) {
            for (var c = 0; c < image[r].length; c++) {
                var rgbString = image[r][c]; //rgbString here used to be r
                
                var rgbNumbers = rgbStringToArray(rgbString) 
                filterFunction(rgbNumbers);  //todo 4 step 3
                
                // rgbNumbers[RED] = 255;//todo2 step 3

                //?? assign rgbnumbers back to rgb string somehow
                // Reassign rgbString to rgbArrayToString call with rgbNumbers
                // with this rgbString is now reassigned with the modified 
                //rgb string
                rgbString = rgbArrayToString(rgbNumbers);
                //reasign image[r][c] to rgbString
                image[r][c] = rgbString; //todo 2 step 5

            // /\ working fine
            }
          
        }
    } //apply filter /\


// TODO 6: Create the applyFilterNoBackground function \/
    function applyFilterNoBackground(filterFunction){
    
         for (var r = 0; r < image.length; r++) {
             for (var c = 0; c < image[r].length; c++) {
                 var rgbString = image[r][c]; //rgbString here used to be r
        
               var rgbNumbers = rgbStringToArray(rgbString) 
               filterFunction(rgbNumbers);  
               rgbString = rgbArrayToString(rgbNumbers);
                image[r][c] = rgbString; 
             }
  
     }
    } //applyFilterNoBackground /\

// TODO 3 & 5: Create filter functions
function reddify(rgbArr){  //todo3 //needs to take in an array parameter
    rgbArr[RED] = 255 //use array with this
 } 

function decreaseBlue(rgbArr){ //todo 5
    rgbArr[BLUE] = Math.max(0, BLUE - 70)
}

function increaseGreenByBlue(rgbArr){  //todo 5
    rgbArr[GREEN] = Math.min(255, GREEN + 1)
}



// CHALLENGE code goes below here
