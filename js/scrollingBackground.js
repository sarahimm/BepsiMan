(function($){
    var position = [0,0,0];
    var speed = 6;

    var $background = $("#background");
    var $background = $("#midground");
    var $background = $("#foreground");

    var requestAnimFrame = ( function() {
        if (window.requestAnimationFrame) return window.requestAnimationFrame;
        if (window.webkitRequestAnimationFrame) return window.webkitRequestAnimationFrame;
        if (window.mozRequestAnimationFrame) return window.mozRequestAnimationFrame;
        if (window.oRequestAnimationFrame) return window.oRequestAnimationFrame;
        if (window.msRequestAnimationFrame) return window.msRequestAnimationFrame;
        else return function( callback, element ){
        window.setTimeout(callback, element);
        };
        })();

    function draw(){
        requestAnimFrame(draw,25);
        //the slowest background is the loast to loop, so it doesn't need to refresh until the back refreshes
        if (position[2] < -$background.width() ) {
            position[2] = 0;
        }

        $('#background').css('background-position',position[0]*1/2);
        $('#midground').css('background-position',position[1]*1);
        $('#foreground').css('background-position',position[2]*2);
        position[0] = position[0] - speed;
        position[1] = position[1] - speed;
        position[2] = position[2] - speed;

       
    }
    draw();
})(jQuery);