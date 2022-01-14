class BepsiMan {
    //Generates a bepsiMan at the given position
    constructor(x,y) {
        this.yPos = y;
        this.yPosOrigin = y;
        this.xPos = x;
        this.height = 200;
        this.width = 200;
        this.inAir = false;
        this.runAnim = [];
        this.jumpAnim = [];
        this.curFrame = 0;
        this.yVelocity = 0;
        this.gravity = 4;
        window.addEventListener("contextmenu",this.highJump.bind(this));
        window.addEventListener("click",this.lowJump.bind(this));
    }
    lowJump(){
        if(this.inAir===false) {
            this.inAir=true;
            this.yVelocity = -35;
            this.curFrame=0;
        }   
    }
    highJump(e){
        e.preventDefault();
        if(this.inAir===false) {
            this.inAir=true;
            this.curFrame=0;
            this.yVelocity=-50;
        }
    }
    updateHeight(){
        this.yPos += this.yVelocity;
        this.yVelocity += this.gravity;
        if(this.yPos >= this.yPosOrigin){
            this.yPos = this.yPosOrigin;
            this.inAir = false;
        }
    }
}