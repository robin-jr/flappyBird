class Obstaccle {
	constructor() {
		this.x = 450;
		this.min = 100;
		this.max = 400;
		this.minw = 60;
		this.maxw = 150;
		this.width = 100;
		this.highlight = false;
		this.h = Math.floor(Math.random() * (this.max - this.min)) + this.min;
		this.wid =
			Math.floor(Math.random() * (this.maxw - this.minw)) + this.minw;
		this.speed = 5;
	}
	update() {
		//this.speed += 0.1;
		this.x -= this.speed;
	}
	show() {
		if (this.highlight) {
			fill("#f00");
		} else {
			//this.speed += 0.1;
			fill(255);
		}
		rect(this.x, 0, this.width, this.h);
		rect(this.x, this.h + this.wid, this.width, 500);
	}

	hits(bird) {
		if (
			(bird.y < this.h && bird.x > this.x) ||
			(bird.y > this.h + this.wid && this.x < bird.x)
		) {
			this.highlight = true;
			return true;
		} else {
			return false;
		}
	}
}
