

$(document).ready(function() {
    // register our function as the "callback" to be triggered by the form's submission event
    $("#form-gif-request").submit(fetchAndDisplayGif); // in other words, when the form is submitted, fetchAndDisplayGif() will be executed
});


/**
 * sends an asynchronous request to Giphy.com aksing for a random GIF using the 
 * user's search term (along with "jackson 5")
 * 
 * upon receiving a response from Giphy, updates the DOM to display the new GIF
 */
function fetchAndDisplayGif(event) {
    var $body = $('body');
 
    event.preventDefault();
    
    
    var searchQuery = $('#tag').val(); 
    
   
    var params = { 
        api_key: "dc6zaTOxFJmzC", 
        tag : "Jackson 5", searchQuery, 
    };
    
    var giphyUrl = 'https://api.giphy.com/v1/gifs/random';
    $.ajax({
        url: giphyUrl, // TODO where should this request be sent?
        data: params, // attach those extra parameters onto the request
        dataType: "jsonp",
        success: function(response) {
            var riddle = $('#tag2').val()
            if (riddle == '5'){
                console.log(response.data.image_url);
                

                $body.text('Just one second while we load your gif!');
                
                console.log($("#foo").text());
               
                var txt = response.data.image_height;
            
                //var image = response = image_url
               
                //$("#gif").attr("src", txt);
            } 
            else {$body.text('No Gif for you!');
            }

           
            
            // if the response comes back successfully, the code in here will execute.
            
            // jQuery passes us the `response` variable, a regular javascript object created from the JSON the server gave us
            //console.log("we received a response!");
            console.log(response);
            
            // TODO
            // 1. set the source attribute of our image to the image_url of the GIF
            // 2. hide the feedback message and display the image
        },
        error: function() {
            // if something went wrong, the code in here will execute instead of the success function
            
            // give the user an error message
            $("#feedback").text("Sorry, could not load GIF. Try again!");
            setGifLoadedStatus(false);
        }
    });
    
    // TODO
    // give the user a "Loading..." message while they wait
    
}


/**
 * toggles the visibility of UI elements based on whether a GIF is currently loaded.
 * if the GIF is loaded: displays the image and hides the feedback label
 * otherwise: hides the image and displays the feedback label
 */
function setGifLoadedStatus(isCurrentlyLoaded) {
    $("#gif").attr("hidden", !isCurrentlyLoaded);
    $("#feedback").attr("hidden", isCurrentlyLoaded);
}

