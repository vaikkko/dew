class Game {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext("2d");
    this.ball = new Ball(
      this.ctx,
      this.canvas.width / 2,
      this.canvas.height - 30,
      10,
      2,
      -2
    );
    this.paddle = new Paddle(
      this.ctx,
      (this.canvas.width - 75) / 2,
      this.canvas.height - 10,
      75,
      10
    );
    this.bricks = this.createBricks();; // Matriz de instancias de ladrillos
    this.rightPressed = false;
    this.leftPressed = false;
    this.score = 0;
    this.lives = 3;

    // Agregar event listeners para las teclas
    document.addEventListener("keydown",this.keyDownHandler.bind(this),false);
    document.addEventListener("keyup",this.keyUpHandler.bind(this),false);

    // Llamar al método draw repetidamente cada 10 milisegundos
    setInterval(this.draw.bind(this),10);
  }
}
