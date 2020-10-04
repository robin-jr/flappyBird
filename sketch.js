let ab;
var bird;
var pipes = [];
function setup() {
	createCanvas(500, 500);
	bird = new Bird();
	ab = new Obstaccle();
	pipes.push(new Obstaccle());
}

function draw() {
	background(0);
	for (let i = pipes.length - 1; i >= 0; i--) {
		if (pipes[i].hits(bird)) {
			console.log("HIT!");
		}

		if (pipes[i].x < 0) {
			pipes.splice(i, 1);
		}
		pipes[i].update();
		pipes[i].show();
	}
	if (Math.floor(pipes[0].x) == 80) {
		pipes.push(new Obstaccle());
	}
	bird.update();
	bird.show();
	// if (frameCount % 200 == 0) {
	// 	pipes.push(new Obstaccle());
	// }
}
function keyPressed() {
	if ((key = " ")) {
		bird.up();
	}
}
