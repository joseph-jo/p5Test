

var listSnows = [];
var count = 50;
var ball;
function setup() {
	createCanvas(640, 480);

	// Add Mouse Ball
 	ball = new buildBallObj(50, 'red');

 	listSnows = buildSnowCloud(listSnows, count);
}

function draw() {
	background(255);
 
	// ball.disp(mouseX, mouseY);

	for (var i = 0; i < listSnows.length; i++) {
		listSnows[i].disp();
		// listSnows[i].checkCollide(ball);
	}

	listSnows = listSnows.filter(snow => snow.deleted == false);   	
	listSnows = buildSnowCloud(listSnows, count);
 	
}

function buildSnowCloud(listSnows, count) {

	var lists = listSnows;
	for (var i = lists.length; i < count; i++) {
 		let snow = new buildSnowObj(i);
		lists.push(snow); 
	}
 
	return lists;
}

function buildSnowObj(id) {
 
 	this.id = id
	this.dia = 20;
	this.x = random(width);
	this.y = -this.dia;
	this.moveSpeed = random(0.5, 3);
	this.alpha = random(255);
	this.color = color(random(255),random(255),random(255));
 	this.deleted = false;

	this.disp = function() {
		
		noStroke();
		fill(this.color);	
		ellipse(this.x, this.y, this.dia, this.dia);
		this.moveDown(this.moveSpeed);
	}

	// this.checkCollide = function(ball) {

	// 	hit = collideCircleCircle(ball.x, ball.y, ball.dia, this.x, this.y, this.dia)

	// 	if (hit) {			
	// 		this.color = 0;
	// 	}
	// }

	this.moveDown = function(val) {
		

		this.shouldDisapperSlowly();

		if (!this.onGround()) {
			this.y += val;
		}

		if (this.alpha == 0) {
			this.deleted = true;
		}

	}

	this.shouldDisapperSlowly = function() {
 
		this.alpha -= 1;		

		this.alpha = max(0, this.alpha)
		this.color.setAlpha(this.alpha);
	}

	this.onGround = function() {
		if (this.y >= height - this.dia) {
			return true;
		}
		return false;
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
