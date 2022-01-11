(function($){
    var position = 0;
    var speed = 6;
    // Use jQuery to get the background element
    var $background = $("#background");
    var $background = $("#midground");
    var $background = $("#foreground");
    var requestAniFra = (function() {
        if (window.msRequestAnimationFrame) return window.msRequestAnimationFrame;
        if (window.requestAnimationFrame) return window.requestAnimationFrame;
        if (window.webkitRequestAnimationFrame) return window.webkitRequestAnimationFrame;
        if (window.mozRequestAnimationFrame) return window.mozRequestAnimationFrame;
        if (window.oRequestAnimationFrame) return window.oRequestAnimationFrame;

        else return function( callback, element ){
            window.setTimeout(callback, element);
            };
            })();

    function draw(){
        // request draw be called again in 25 milliseconds
         requestAnimFrame(draw,25);
        // reset position to 0 once the image has scrolled far enough
        if ( position < -$background.width() ) {
        position = 0;
    }   
    // Set actual background position
    $('#background').css('background-position',position *(1 / 12) );
    $('#midground').css('background-position',position *(1 / 10) );
    $('#foreground').css('background-position',position  );
    // Update the background position by the speed
    position = position - speed;
    }
    draw();

})(jQuery);