function proceed_stick_collisions(stick, ball, canvas) {
  if (
    ball.pos[0] + ball.size >= stick.pos[0] - stick.offset &&
    ball.pos[0] + ball.size <= stick.pos[0] + stick.size[0] + stick.offset &&
    ball.pos[1] + ball.size >= stick.pos[1]
  ) {
    // отскок от палки
    ball.speed_y = ball.speed;
  } else if (ball.pos[1] < ball.size) {
    // отскок от потолка
    ball.speed_y = -ball.speed_y;
  } else if (
    ball.pos[0] > canvas.width - ball.size ||
    ball.pos[0] < ball.size
  ) {
    // отскок от стен
    ball.speed_x = -ball.speed_x;
  } else if (ball.pos[1] > canvas.height - ball.size) {
    // попадание в пол
    ball.speed_x = 0;
    ball.speed_y = 0;
    return false;
  }

  return true;
}

function proceed_bricks_collisions(bricks, ball) {
  bricks.forEach((brick, idx) => {
    if (
      ball.pos[0] + ball.size >= brick.pos[0] &&
      ball.pos[0] + ball.size <= brick.pos[0] + brick.size[0] &&
      ball.pos[1] + ball.size >= brick.pos[1] &&
      ball.pos[1] - ball.size <= brick.pos[1] + brick.size[1]
    ) {
      delete bricks[idx];
      ball.speed_y = -ball.speed;
    }
  });
}

export { proceed_stick_collisions, proceed_bricks_collisions };
