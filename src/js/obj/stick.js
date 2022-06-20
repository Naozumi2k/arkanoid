class Stick {
  padding = [15, 15];
  color = "#FFFFFF";

  constructor({ canvas, size = [80, 5], speed = 5 }) {
    this.size = size;
    this.speed = speed;
    this.pos = [
      (canvas.width - this.size[0]) / 2,
      canvas.height - this.padding[1],
    ];
  }
}
export default Stick;
