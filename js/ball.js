class Ball{
	
	constructor(d, width, height){
		//Diameter
		this.d = d;
		
		//Coordinates
		this.maxX = width - this.d / 2;
		this.minX = this.d / 2;
		this.maxY = height - this.d / 2;
		this.minY = this.d / 2;
		this.x = this.minX;
		this.y = this.maxY;

		//Movement
		this.direction = 0;
		this.gravitySpeed = 0;
	}

	draw() {
		noStroke();
		fill(255, 0, 0);
		circle(this.x, this.y, this.d);
	}

	move() {
		if(this.x < this.maxX && this.direction == 1 || this.x > this.d / 2 && this.direction == -1){
			this.x += this.direction * 10;
		}
		this.gravity();
		this.correctPosition();
	}

	gravity(){
		if(this.y < this.maxY){
			this.y += this.gravitySpeed;
			this.gravitySpeed++;
		}
		else{
			this.gravitySpeed = 0;
		}
	}

	changeDirection(direction) {
		this.direction = direction;
	}

	correctPosition(){
		if (this.y > this.maxY)
			this.y = this.maxY;

		if (this.y < this.minY)
			this.y = this.minY;

		if (this.x > this.maxX)
			this.x = this.maxX;

		if (this.x < this.minX)
			this.x = this.minX;
	}

}