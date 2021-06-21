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

// TODO 1 & 3: Create the applyFilter function here
function applyFilter(){

    function loopOver(){ //step 2 todo 1
        for (var r = 0; r < image.length; r++) {
            for (var c = 0; c < image[r].length; c++) {
                var color = image[r][c];
                
                var rgbString = r;
                var rgbNumbers = rgbStringToArray(rgbString) [255, GREEN, BLUE
                ];

                rbgArrayToString(rbgNumbers);

                $("<div>").appendTo(element)
                        .addClass("square")
                        .css('left', c * SQUARE_SIZE)
                        .css('top', r * SQUARE_SIZE)
                        .css('background-color', color)
            }
        }
    }
}

// TODO 5: Create the applyFilterNoBackground function


// TODO 2 & 4: Create filter functions


// CHALLENGE code goes below here
