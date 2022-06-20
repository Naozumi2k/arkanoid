import Stick from "./obj/stick.js";
import Ball from "./obj/ball.js";
import Brick from "./obj/brick.js";
import Render from "./render.js";
import {
  proceed_stick_collisions,
  proceed_bricks_collisions,
} from "./collisions.js";

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 400;

var ball_speed = 3;
var stick_speed = 7;
var keys = {};
var bricks = [];
var pause = true;
var render, ball, stick;

function create_game() {
  ball = new Ball({ canvas: canvas, speed: ball_speed });
  stick = new Stick({ canvas: canvas, speed: stick_speed });
  bricks = [];
  for (var row = 0; row < 3; row++) {
    for (var col = 0; col < 6; col++) {
      bricks.push(new Brick([(canvas.width / 6) * col + 15, 35 * row + 15]));
    }
  }

  render = new Render(canvas, ctx, bricks, ball, stick);
  pause = false;
}

function update_frame() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  render.draw_all();

  if (!pause && "ArrowLeft" in keys) {
    // кнопка влево
    stick.pos[0] -= stick.speed;
    if (stick.pos[0] < stick.padding[0]) stick.pos[0] = stick.padding[0];
  } else if (!pause && "ArrowRight" in keys) {
    // кнопка вправо
    stick.pos[0] += stick.speed;
    if (stick.pos[0] > canvas.width - stick.size[0] - stick.padding[0])
      stick.pos[0] = canvas.width - stick.size[0] - stick.padding[0];
  } else if (pause && "r" in keys) {
    // кнопка r - сброс игры
    create_game();
  }

  proceed_bricks_collisions(bricks, ball);
  if (!proceed_stick_collisions(stick, ball, canvas)) {
    render.draw_text("YOU DIED");
    pause = true;
  }

  ball.pos[0] += ball.speed_x;
  ball.pos[1] -= ball.speed_y;
}

function main_loop() {
  update_frame();
  window.requestAnimationFrame(main_loop);
}

window.addEventListener("keyup", (event) => {
  delete keys[event.key];
  event.preventDefault();
});

window.addEventListener("keydown", (event) => {
  keys[event.key] = true;
  event.preventDefault();
});

create_game();
main_loop();
