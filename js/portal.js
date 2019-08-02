class Portal{
    constructor(x, y, color){
        this.x = x;
        this.y = y;
        this.color = color;
        this.width = 50;
        this.height = 100;
    }

    draw() {
        noFill();
        strokeWeight(6);
        stroke(this.color);
        ellipse(this.x, this.y, this.width, this.height);
    }
}