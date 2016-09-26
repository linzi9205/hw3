function setup() {
  createCanvas(600, 400);
  background(255);
  for (x = 100; x <= 500; x = x + 100) {
    for (a = 20; a <= 80; a = a + 20) {
      noFill();
      strokeWeight(1.5);
      rectMode(CENTER);
      rect(x, 200, a, a)
    }
  }
}

function draw() {}
