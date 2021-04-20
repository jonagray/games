
let snake;
let food;
let cols;
let rows;
const SCL = 20;

function setup() {
  createCanvas(1400, 700);
  snake = new Snake();
  frameRate(10);
  cols = floor(width / SCL);
  rows = floor(height / SCL);
  pickFoodLocation();
};

function draw() {
  background(51);
  if (snake.eatsFood(food)) {
    pickFoodLocation();
  };
  snake.update();
  snake.show();
  fill(255, 0, 0);
  rect(food.x, food.y, SCL, SCL);
  snake.losesTail();
};

function keyPressed() {
  if (keyCode === UP_ARROW) {
    snake.moveDir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    snake.moveDir(0, 1);
  } else if (keyCode === LEFT_ARROW) {
    snake.moveDir(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    snake.moveDir(1, 0);
  }
}

function pickFoodLocation() {
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(SCL);
}