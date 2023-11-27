class Brick {
  constructor(ctx, x, y, width, height) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.rect(this.x, this.y, this, this.width, this.height);
    this.fillStyle = "#0095DD";
    this.ctx.fill();
    this.closePath();
  }
}
