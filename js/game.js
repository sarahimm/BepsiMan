(function($){
    var position = 0;
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
        if (position < -$background.width() ) {
            position = 0;
        }

        $('#background').css('background-position',position*1/12);
        $('#midground').css('background-position',position*1/6);
        $('#foreground').css('background-position',position*1/3);
        position = position - speed;

        if ( position* (1.0/12.0) < -$background.width() ) {
            position = 0;
            }
    }
    draw();
})(jQuery);