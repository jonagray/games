
let snake;
const SCL = 20;

function setup() {
  createCanvas(1400, 700);
  snake = new Snake()
};

function draw() {
  background(51);
  snake.update();
  snake.show();
};

function keyPressed() {
  if (keyCode === UP_ARROW) {
    snake.moveDir(0,-1);
  } else if (keyCode === DOWN_ARROW) {
    snake.moveDir(0,1);
  } else if (keyCode === LEFT_ARROW) {
    snake.moveDir(-1,0);
  } else if (keyCode === RIGHT_ARROW) {
    snake.moveDir(1,0);
  }
}