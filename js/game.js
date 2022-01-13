//copyright: Dr. kent Jones coyote game


(function($){
    // Initial speed and position of background
    var position = 0;   
    var speed = 6;      
    
    // Use jQuery to get the background element
    var $background = $("#background"); 
    var $background = $("#midground"); 
    var $background = $("#frontground");  
    
    // IFFY function to figure out best animation function and store it
    var requestAnimFrame = ( function() {
      if (window.requestAnimationFrame) return window.requestAnimationFrame;
      if (window.webkitRequestAnimationFrame) return window.webkitRequestAnimationFrame;
      if (window.mozRequestAnimationFrame) return window.mozRequestAnimationFrame;
      if (window.oRequestAnimationFrame) return window.oRequestAnimationFrame;
      if (window.msRequestAnimationFrame) return window.msRequestAnimationFrame;
      else return  function( callback, element ){
          window.setTimeout(callback, element);
      };
    })();
  
    // Callback function to move the background 
    function draw() {
        // request another animation frame
        requestAnimFrame(draw,25);
        // reset position to 0 once the image has scrolled far enough
        if ( position < -$background.width() ) {
            position = 0;
        }
        // Set actual background position 
        $('#background').css('background-position',position[0]*1/2);
        $('#midground').css('midground-position',position[1]*1);
        $('#foreground').css('foreground-position',position[2]*2);

        // Update the background position by the speed
        position[0] = position[0] - speed;
        position[1] = position[1] - speed;
        position[2] = position[2] - speed;
    }
    // Start the animation
    draw();
    
})(jQuery);
  
 
