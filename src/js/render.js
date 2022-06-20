class Render {
  constructor(canvas, ctx, bricks, ball, stick) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.bricks = bricks;
    this.ball = ball;
    this.stick = stick;
  }

  draw_text(text) {
    this.ctx.font = "32px Comic Sans MS";
    this.ctx.fillStyle = "#FF0000";
    this.ctx.textAlign = "left";
    this.ctx.fillText(text, this.canvas.width / 2 - 75, this.canvas.height / 2);
  }

  draw_bricks() {
    this.ctx.beginPath();
    this.bricks.forEach((brick) => {
      this.ctx.rect(brick.pos[0], brick.pos[1], brick.size[0], brick.size[1]);
      this.ctx.fillStyle = brick.color;
      this.ctx.fill();
    });
    this.ctx.closePath();
  }

  // мяч
  draw_ball() {
    this.ctx.beginPath();
    this.ctx.arc(
      this.ball.pos[0],
      this.ball.pos[1],
      this.ball.size,
      0,
      Math.PI * 2,
      true
    );
    this.ctx.fillStyle = this.ball.color;
    this.ctx.fill();
    this.ctx.closePath();
  }

  // палка
  draw_stick() {
    this.ctx.beginPath();
    this.ctx.rect(
      this.stick.pos[0],
      this.stick.pos[1],
      this.stick.size[0],
      this.stick.size[1]
    );
    this.ctx.fillStyle = this.stick.color;
    this.ctx.fill();
    this.ctx.closePath();
  }

  draw_all() {
    this.draw_stick();
    this.draw_bricks();
    this.draw_ball();
  }
}

export default Render;
