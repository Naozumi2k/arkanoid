class Ball {
  color = "#FF0000";

  constructor({ canvas, size = 15, speed = 1 }) {
    this.size = size;
    this.speed = speed;
    this.speed_x = speed;
    this.speed_y = speed;
    this.pos = [canvas.width / 2, canvas.height / 2];
  }
}

export default Ball;
