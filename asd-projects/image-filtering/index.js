// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads and is where you should call your functions.
$(document).ready(function(){
    const $display = $('#display');

    // TODO: Call your apply function(s) here
    applyFilter();  //step 1 to do 1




    render($display, image);
});

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

        // function reddify(){ ? //todo4
         //   rgbNumbers[RED] = 225 ?
        // } ?

// TODO 2 & 4: Create the applyFilter function here
function applyFilter(){ //call reddifiy in here < todo5 step 2
    //filterFunction(){

    //}

}
        for (var r = 0; r < image.length; r++) {
            for (var c = 0; c < image[r].length; c++) {
                var rgbString = image[r][c]; //rgbString here used to be r
                
                
                var rgbNumbers = rgbStringToArray(rgbString) 
                rgbNumbers[RED] = 0; //todo2 step 3
                rgbArrayToString(rgbString);  //?? assign rgbnumbers back to rgb string somehow
                rgbArrayToString(rgbNumbers);

            
            }
        }
      


// TODO 6: Create the applyFilterNoBackground function


// TODO 3 & 5: Create filter functions


// CHALLENGE code goes below here
