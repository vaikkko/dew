function createBricks() {
  let bricks = [];
  for (let c = 0; c < 6; c++) {
    bricks[c] = [];
    for (let r = 0; r < 3; r++) {
      let brickX = c * (75 + 10) + 30;
      let brickY = r * (20 + 10) + 30;
      bricks[c][r] = new Brick(this.ActiveXObject, brickX, brickY, 75, 20);
    }
  }
  return bricks;
}

// Método para manejar el evento de tecla presionada
function keyDownHandler(e) {
  if (e.keyCode == 39) {
    this.rightPressed = true;
  } else if (e.keyCode == 37) {
    this.leftPressed = true;
  }
}

// Método para manejar el evento de tecla liberada
function keyUpHandler(e) {
  if (e.keyCode == 39) {
    this.rightPressed = false;
  } else if (e.keyCode == 37) {
    this.leftPressed = false;
  }
}

// Método para detectar colisiones con los ladrillos
function collisionDetection() {
  for (let c = 0; c < 5; c++) {
    for (let r = 0; r < 3; r++) {
      let b = this.bricks[c][r];
      if (b.status === 1) {
        if (
          this.ball.x > b.x &&
          this.ball.x < b.x + b.width &&
          this.ball.y > b.y &&
          this.ball.y < b.y + b.height
        ) {
          this.ball.dy = -this.ball.dy;
          b.status = 0;
          this.score++;
          if (this.score === 15) {
            alert("¡GANASTE, FELICIDADES!");
            window.location.reload();
          }
        }
      }
    }
  }
}

// Método principal para dibujar y actualizar el juego
function draw() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  this.drawBricks();
  this.ball.draw();
  this.paddle.draw();
  this.drawScore();
  this.drawLives();
  this.collisionDetection();
  if (
    this.ball.x + this.ball.dx > this.canvas.width - this.ball.radius ||
    this.ball.x + this.ball.dx < this.ball.radius
  ) {
    this.ball.dx = -this.ball.dx;
  }
  if (this.ball.y + this.ball.dy < this.ball.radius) {
    this.ball.dy = -this.ball.dy;
  } else if (
    this.ball.y + this.ball.dy >
    this.canvas.height - this.ball.radius
  ) {
    if (
      this.ball.x > this.paddle.x &&
      this.ball.x < this.paddle.x + this.paddle.width
    ) {
      this.ball.dy = -this.ball.dy;
    } else {
      this.lives--;
      if (!this.lives) {
        alert("¡JUEGO TERMINADO!");
        window.location.reload();
      } else {
        this.ball.x = this.canvas.width / 2;
        this.ball.y = this.canvas.height - 30;
        this.ball.dx = 2;
        this.ball.dy = -2;
        this.paddle.x = (this.canvas.width - this.paddle.width) / 2;
      }
    }
  }
  if (
    this.rightPressed &&
    this.paddle.x < this.canvas.width - this.paddle.width
  ) {
    this.paddle.x += 7;
  } else if (this.leftPressed && this.paddle.x > 0) {
    this.paddle.x -= 7;
  }
  this.ball.x += this.ball.dx;
  this.ball.y += this.ball.dy;
}

// Método para dibujar los ladrillos en el lienzo
function drawBricks() {
  for (let c = 0; c < 5; c++) {
    for (let r = 0; r < 3; r++) {
      if (this.bricks[c][r].status === 1) {
        this.bricks[c][r].draw();
      }
    }
  }
}

// Método para dibujar la puntuación en el lienzo
function drawScore() {
  this.ctx.font = "16px Arial";
  this.ctx.fillStyle = "#0095DD";
  this.ctx.fillText("Puntuación: " + this.score, 8, 20);
  }
  // Método para dibujar las vidas restantes en el lienzo
  function drawLives() {
  this.ctx.font = "16px Arial";
  this.ctx.fillStyle = "#0095DD";
  this.ctx.fillText("Vidas: " + this.lives, this.canvas.width - 65, 20);
  }
  
  // Crear instancia del juego
  let game = new Game("myCanvas");