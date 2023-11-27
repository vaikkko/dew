class Ball {
  constructor(ctx, x, y, radius, dx, dy) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dx = dx;
    this.dy = dy;
  }
  
  draw(){
    this.ctx.beginPath();
    this.ctx.arc(this.x,this.y,this.radius,0,Math.PI*2);
    this.ctx.fillStyle = "#0095DD";
    this.ctx.fill();
    this.ctx.closePath();
  }
}
