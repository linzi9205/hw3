function setup() {
  createCanvas(700,700);
  background(255);
  for (b=2;b<=350;b=b+10){
    line(350-b,b,350+b,b);
  }
  
  for (b=350;b<=700;b=b+10){
    line(b-350,b,1050-b,b);
  }
}

function draw() {
}
