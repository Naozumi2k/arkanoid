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

canvas.width = 800;
canvas.height = 600;

const BALL_SPEED = 3;
const STICK_SPEED = 7;
const BRICK_ROWS = 3;
const BRICK_COLS = 6;
const BRICK_OFFSET = 40;
var keys = {};
var bricks = [];
var pause = true;
var render, ball, stick;

function create_game() {
  ball = new Ball({ canvas: canvas, speed: BALL_SPEED });
  stick = new Stick({ canvas: canvas, speed: STICK_SPEED });
  bricks = [];
  for (var row = 0; row < BRICK_ROWS; row++) {
    for (var col = 0; col < BRICK_COLS; col++) {
      bricks.push(
        new Brick([
          (canvas.width / BRICK_COLS) * col + 15,
          BRICK_OFFSET * row + 15,
        ])
      );
    }
  }

  render = new Render(canvas, ctx, bricks, ball, stick);
  pause = false;
}

function update_frame() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  render.draw_all();

  if (!pause && 37 in keys) {
    // кнопка влево
    stick.pos[0] -= stick.speed;
    if (stick.pos[0] < stick.offset) stick.pos[0] = stick.offset;
  } else if (!pause && 39 in keys) {
    // кнопка вправо
    stick.pos[0] += stick.speed;
    if (stick.pos[0] > canvas.width - stick.size[0] - stick.offset)
      stick.pos[0] = canvas.width - stick.size[0] - stick.offset;
  } else if (pause && 32 in keys) {
    // кнопка space - сброс игры
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
  delete keys[event.keyCode];
  event.preventDefault();
});

window.addEventListener("keydown", (event) => {
  keys[event.keyCode] = true;
  event.preventDefault();
});

create_game();
main_loop();
