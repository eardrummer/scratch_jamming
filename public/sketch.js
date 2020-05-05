var socket;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(51);

	socket = io.connect();
	//socket = io.connect('http://localhost:3000')
	socket.on('mouse',newDrawing);
}


function newDrawing(data){
	noStroke();
	fill(0,0,255);
	ellipse(data.x, data.y, 50, 50)
}

function mouseDragged(){

	//TESTING:
	//console.log(mouseX + "," + mouseY);

	var data = {
		x:mouseX,
		y:mouseY
	}

	socket.emit('mouse', data);

	noStroke();
  fill(255);
	ellipse(mouseX, mouseY, 50, 50)
}

function draw() {

}
