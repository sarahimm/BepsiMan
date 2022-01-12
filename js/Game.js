
class Game {
    constructor(){
        this.backgroundUrls = ["img/BackgroundLayer.png","img/MiddleLayer.png","img/FrontLayer.png"];
        this.backgrounds = [];
        let loadedCount=0;
        for(let url of this.backgroundUrls){
            let $img = new Image();
            $img.onload = function(){
                loadedCount++; 
                if(loadedCount===3) start();};
            $img.src = url;
            this.backgrounds.push($img);
        }
        this.backPos = [0,0,0];
        this.velocity = 5;
        this.canvas = document.getElementById("canvas");
        this.canvas.width = window.innerWidth;
        this.canvas.height = 550;
        this.context =  this.canvas.getContext("2d");
    }
    draw(){
        this.context.clearRect(0,0,this.canvas.width,this.canvas.height);
        for (let i=0; i<3; i++){
            this.context.drawImage(this.backgrounds[i],this.backPos[i],0,3000,this.canvas.height);
            this.context.drawImage(this.backgrounds[i], 3000 + this.backPos[i],0,3000,this.canvas.height)
        }
    }
    update(){
        for (let i=0; i<3; i++){
            this.backPos[i] -= this.velocity * (i+1);
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
