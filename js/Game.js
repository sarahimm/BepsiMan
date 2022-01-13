
class Game {
    //Initializes background images and starting velocity. 
    //Calls start() when all the images have loaded.
    constructor(){
        this.Urls = ["img/BackgroundLayer.png","img/MiddleLayer.png","img/FrontLayer.png","img/can.png","img/frame1.png","img/frame2.png","img/frame3.png","img/frame4.png","img/frame5.png","img/frame6.png","img/frame7.png"];
        let urlNum=11;
        
        //Position (px) for lefthand side of background images, relative to canvas
        this.backPos = [0,0,0];
        //Base velocity (back layer)
        this.velocity = 5;
        //Initialize canvas and its context
        this.canvas = document.getElementById("canvas");
        this.canvas.width = window.innerWidth;
        this.canvas.height = 550;
        this.context =  this.canvas.getContext("2d");

        //Load Background Images
        this.backgrounds = [];
        let loadedCount=0;
        for(let i=0; i<3; i++){
            let $img = new Image();
            $img.onload = function(){
                loadedCount++;
                //Only starts game if all necessary images have loaded
                if(loadedCount===urlNum) start();};
            $img.src = this.Urls[i];
            this.backgrounds.push($img);
        }

        //Construct BepsiMan and load his animation images to the object
        this.bepsiMan = new BepsiMan((this.canvas.width * .5 - 100),this.canvas.height - 250);
        this.runAnim = [];
        for(let i=4; i<11; i++){
            let $img = new Image();
            $img.onload = function(){
                loadedCount++;
                //Only starts game if all necessary images have loaded
                if(loadedCount===urlNum) start();};
            $img.src = this.Urls[i];
            this.bepsiMan.runAnim.push($img);
        }

        //Load the can image
        this.canIcon = new Image();
        this.canIcon.onload = function(){
            loadedCount++;
            //Only starts game if all four necessary images have loaded
            if(loadedCount===urlNum) start();};
        this.canIcon.src = this.Urls[3];

        
        //Probability (0 to 1) that a can will appear in a given frame
        this.canProb = .05;
        this.cans = [];
        this.cans.push(new Can(this.canvas.width,canvas.height - 80));
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
        //Draw BepsiMan if NOT jumping
        if(!this.bepsiMan.inAir){
            //Draw next frame of running animation
            if(this.bepsiMan.curFrame >= this.bepsiMan.runAnim.length)
                this.bepsiMan.curFrame = 0;
            this.context.drawImage(this.bepsiMan.runAnim[this.bepsiMan.curFrame],this.bepsiMan.xPos,this.bepsiMan.yPos, this.bepsiMan.width, this.bepsiMan.height);
            this.bepsiMan.curFrame++;  
        }
        for (let can of this.cans) {
            this.context.drawImage(this.canIcon,can.xPos,can.yPos, can.width, can.height);
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
        for (let i=0; i<this.cans.length; i++) {
            //Move each can
            this.cans[i].xPos -= this.velocity * 3;
            //If can is off-screen, delete it
            if(this.cans[i].xPos<=0)
                this.cans.splice(i, 1);
        }
        if(Math.random() <= this.canProb){
            this.cans.push(new Can(this.canvas.width, Math.floor(Math.random() * (this.canvas.height - 80))));
        }
        this.draw();
    }

    checkCollide() {
        for(var can of this.cans){
          if (this.bepsiMan.xPos < can.xPos + can.width &&
              this.bepsiMan.xPos + this.bepsiMan.width > can.xPos &&
              this.bepsiMan.yPos < can.yPos + can.height &&
              this.bepsiMan.height + this.bepsiMan.yPos > can.yPos) {
              // collision detected!
              console.log("Collision detected")
          } else {
              // no collision
          }
        }
    }
}


var game = new Game();

var start = function () {
    game.draw();
    setInterval(game.update.bind(game), 20);
}

