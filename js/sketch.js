

var listBricks = [];
var count = 50;
var ball;
function setup() {
	createCanvas(640, 480);

 	ball = new buildBallObj(50, 'red');
}

function draw() {
	background(255);
 
	if (mouseIsPressed) {
		let brick = new buildBrickObj(mouseX, mouseY);
		listBricks.push(brick);
	}
	else
		ball.disp(mouseX, mouseY);

	for (var i = 0; i < listBricks.length; i++) {
		listBricks[i].disp();
		listBricks[i].checkCollide(ball);
	}

}

function buildBrickObj(x, y) {
 
	this.x = x;
	this.y = y;
	this.color = 255;

	this.disp = function() {
		
		fill(this.color);	
		ellipse(this.x, this.y, 20, 20);
	}

	this.checkCollide = function(ball) {

		hit = collideCircleCircle(ball.x, ball.y, ball.dia, this.x, this.y, 20)

		if (hit) {
			this.color = 0;
			this.disp() 
		}
	}

}

function buildBallObj(dia, color) {

	this.dia = dia;
	this.color = color;
	this.x = 0;
	this.y = 0;

	this.disp = function(x, y){

		this.x = x;
		this.y = y;
		fill(this.color);	
		ellipse(this.x, this.y, this.dia, this.dia);
	}
}

// function onPutEllipse() {
// 	fill(random(255), random(255), random(255));	
// 	ellipse(mouseX, mouseY, 50, 50);
// }