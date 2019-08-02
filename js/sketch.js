let portal;

function setup(){
    createCanvas(800, 800);
    ball = new Ball(50, width, height);

    frameRate(50);
}

function draw(){
    background(0);

    ball.move();
    ball.draw();

    if(typeof portal1 !== 'undefined'){
    	portal1.draw();
    }

    if(typeof portal2 !== 'undefined'){
		portal2.draw();
    }

    if(typeof portal1 !== 'undefined' && typeof portal2 !== 'undefined')
    	if(ballInPortal(portal1))
    		teleport(portal2)
    	else if(ballInPortal(portal2))
    		teleport(portal1)
}

function clickInCanvas(){
	return 0 < mouseX && mouseX < width && 0 < mouseY && mouseY < height;
}

function ballInPortal(portal){
	return ball.x > portal.x - 20 && ball.x < portal.x + 20 && ball.y > portal.y - 40 && ball.y < portal.y + 40
}

function teleport(portal){
	ball.x = portal.x + ball.direction * portal.width;
	ball.y = portal.y;
}



//Mouse Events
function mouseClicked(){
	//Left Click
	if (mouseButton === LEFT && clickInCanvas())
		if(typeof portal1 === 'undefined')
			portal1 = new Portal(mouseX, mouseY, 'cyan');
		else
			[portal1.x, portal1.y] = [mouseX, mouseY];

}

//Right Click
document.oncontextmenu = function() {
	if(clickInCanvas()) 
		if(typeof portal2 === 'undefined')
			portal2 = new Portal(mouseX, mouseY, 'orange');
		else
			[portal2.x, portal2.y] = [mouseX, mouseY];
}


//Key Events
function keyPressed(){
	switch(keyCode){
		case RIGHT_ARROW:
			ball.changeDirection(1);
			break;
		case LEFT_ARROW:
			ball.changeDirection(-1);
			break;
	}
}