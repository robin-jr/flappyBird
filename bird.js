function Bird() {
	this.x = 100;
	this.y = 250;

	this.gravity = 0.5;
	this.velocity = 0;

	this.show = function () {
		fill(255);
		ellipse(this.x, this.y, 20, 20);
	};
	this.update = function () {
		this.velocity += this.gravity;
		this.y += this.velocity;

		if (this.y > height) {
			this.y = height;
			velocity = 0;
		}
		if (this.y < 0) {
			this.y = 0;
			velocity = 0;
		}
	};
	this.up = function () {
		this.velocity = -8;
	};
}
