class Game {
    //Initializes background images and starting velocity. 
    //Calls start() when all the images have loaded.
    constructor(){
        this.Urls = ["img/BackgroundLayer.png","img/MiddleLayer.png","img/FrontLayer.png","img/can.png","img/frame1.png","img/frame2.png","img/frame3.png","img/frame4.png","img/frame5.png","img/frame6.png","img/frame7.png","img/beginJumpF1.png","img/beginJumpF2.png","img/inAir1.png","img/inAir2.png","img/inAir3.png"];
        let urlNum=16;
        
        //Position (px) for lefthand side of background images, relative to canvas
        this.backPos = [0,0,0];
        //Base velocity (back layer)
        this.velocity = 3;
        //Initialize canvas and its context
        this.canvas = document.getElementById("canvas");
        this.canvas.width = window.innerWidth;
        this.canvas.height = 550;
        this.context =  this.canvas.getContext("2d");

        this.startvalue = 350;
        this.timer = this.startvalue;

        

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
        this.bepsiMan = new BepsiMan((this.canvas.width * .33 - 100),this.canvas.height - 230);
        for(let i=4; i<11; i++){
            let $img = new Image();
            $img.onload = function(){
                loadedCount++;
                //Only starts game if all necessary images have loaded
                if(loadedCount===urlNum) start();};
            $img.src = this.Urls[i];
            this.bepsiMan.runAnim.push($img);
        }
        for(let i=11; i<16; i++){
            let $img = new Image();
            $img.onload = function(){
                loadedCount++;
                //Only starts game if all necessary images have loaded
                if(loadedCount===urlNum) start();};
            $img.src = this.Urls[i];
            this.bepsiMan.jumpAnim.push($img);
        }

        //Load the can image
        this.canIcon = new Image();
        this.canIcon.onload = function(){
            loadedCount++;
            //Only starts game if all four necessary images have loaded
            if(loadedCount===urlNum) start();};
        this.canIcon.src = this.Urls[3];

        
        //Probability (0 to 1) that a can will appear in a given frame
        this.canProb = .045;
        this.cansCollected = 0;
        this.cans = [];
        this.cans.push(new Can(this.canvas.width,canvas.height - 120));

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
        }else{
            //Draw BepsiMan if jumping (start with transition frames jumpAnim[0],jumpAnim[1], then cycle through jumpAnim[2-4])
            if(this.bepsiMan.curFrame >= this.bepsiMan.jumpAnim.length)
                this.bepsiMan.curFrame = 2;
            this.context.drawImage(this.bepsiMan.jumpAnim[this.bepsiMan.curFrame],this.bepsiMan.xPos,this.bepsiMan.yPos, this.bepsiMan.width, this.bepsiMan.height);
            this.bepsiMan.curFrame++;
        }
        for (let can of this.cans) {
            this.context.drawImage(this.canIcon,can.xPos,can.yPos, can.width, can.height);
        }
        //bar that is running out
        this.context.fillRect(0,this.canvas.height - 12,this.canvas.width*this.timer/this.startvalue,12);
        
        if(this.timer>this.startvalue*2/5){
            this.context.fillStyle = "#55FF00";
        } else if(this.timer > this.startvalue*1/5){
            this.context.fillStyle = "#FFFF00";
        } else{
            this.context.fillStyle = "#FF5533";
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
            if(this.cans[i].xPos<=0){
                this.cans.splice(i, 1);
                i--;
            }
        }
        //If bepsiMan is jumping, update his yPos
        if(this.bepsiMan.inAir)
            this.bepsiMan.updateHeight();

        //Add new cans at random
        if(this.cans.length === 0 || (Math.random() <= this.canProb)){
            this.cans.push(new Can(this.canvas.width, Math.floor(Math.random() * (this.canvas.height - 110))));
        }
        this.checkCollide();
        this.draw();

        --this.timer;
        if(this.timer < 0){
            gameOver();
        }

    }
    

    //checks if BepsiMan and cans collide
    checkCollide() {
        for(var i=0; i<this.cans.length; i++){
          if (this.bepsiMan.xPos + 25 < this.cans[i].xPos + this.cans[i].hitW - 5 &&
              this.bepsiMan.xPos - 25 + this.bepsiMan.width > this.cans[i].xPos +5 &&
              this.bepsiMan.yPos + 10 < this.cans[i].yPos + this.cans[i].hitH &&
              this.bepsiMan.height - 10 + this.bepsiMan.yPos > this.cans[i].yPos + 5) {
              
              this.cans.splice(i,1);
              i--;
              if(this.timer < this.startvalue){
                 this.timer+= 40;
              }
              if(this.canProb > .02)
                this.canProb -= .001;
              this.velocity += .05;
              this.cansCollected++;
          }
        }
    }
}


var game = new Game();

var start = function () {
    game.draw();
    control = setInterval(game.update.bind(game),20);
}

var gameOver = function(){
    //cancel control
    //blackens screen
    clearInterval(control);
    game.context.fillStyle = "black";
    game.context.fillRect(0,0,game.canvas.width,game.canvas.height);
    game.context.font = 'bold 48px serif';
    game.context.strokeStyle = 'rgb(218, 58, 170)'; 
    game.context.strokeText('Cans Collected: ' + game.cansCollected,this.canvas.width/2 - 170,this.canvas.height/2 -80);
    game.context.strokeText('RAN OUT OF BEPSI',this.canvas.width/2 - 225,this.canvas.height/2);
    document.getElementById("restart").style.display = "block";
}

