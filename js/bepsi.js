class BepsiMan {
    //Generates a bepsiMAn at the given position
    constructor(x,y) {
        this.yPos = y;
        this.xPos = x;
        this.height = 200;
        this.width = 200;
        this.inAir = false;
        this.runAnim = [];
        this.jumpAnim = [];
        this.curFrame = 0;
    }
}