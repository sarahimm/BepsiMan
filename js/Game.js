
class Game {
    //Initializes background images and starting velocity. 
    //Calls start() when all the images have loaded.
    constructor(){
        this.backgroundUrls = ["img/BackgroundLayer.png","img/MiddleLayer.png","img/FrontLayer.png"];
        //Array of 3 Image objects
        this.backgrounds = [];
        let loadedCount=0;
        for(let url of this.backgroundUrls){
            let $img = new Image();
            $img.onload = function(){
                loadedCount++;
                //Only starts game if all three background images have loaded
                if(loadedCount===3) start();};
            $img.src = url;
            this.backgrounds.push($img);
        }
        //Position (px) for lefthand side of background images, relative to canvas
        this.backPos = [0,0,0];
        //Base velocity (back layer)
        this.velocity = 5;
        //Initialize canvas and its context
        this.canvas = document.getElementById("canvas");
        this.canvas.width = window.innerWidth;
        this.canvas.height = 550;
        this.context =  this.canvas.getContext("2d");
    }
    //Draws background, character, and all other game objects to the screen
    //(Just background for now)
    //Called via update()
    draw(){
        this.context.clearRect(0,0,this.canvas.width,this.canvas.height);
        for (let i=0; i<3; i++){
            //Draws each background layer twice, side by side, to simulate infinite scroll
            this.context.drawImage(this.backgrounds[i],this.backPos[i],0,3000,this.canvas.height);
            this.context.drawImage(this.backgrounds[i], 3000 + this.backPos[i],0,3000,this.canvas.height)
        }
    }
    //Adjusts positioning of each element according to velocity
    //(Eventually will check for and handle collisions as well)
    //Calls draw() to output the updated positions to the canvas
    update(){
        for (let i=0; i<3; i++){
            //Back layer moves at velocity * 1 px/frame; Mid layer moves at velocity * 2 px/frame; Front at velocity * 3 px/frame
            this.backPos[i] -= this.velocity * (i+1);
            //Loop background for infinite scroll
            if(this.backPos[i] <= -3000)
                this.backPos[i] = 0;
        }
        this.draw();
    }
}


var game = new Game();

var start = function () {
    game.draw();
    setInterval(game.update.bind(game), 20);
}
