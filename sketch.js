function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent('p1');
  background(2);
}

function draw() {
  // Randomly choose a stroke color
  let r = random(255);
  let g = random(255);
  let b = random(255);
  stroke(r, g, b);

  // Draw random lines
  let x1 = random(width);
  let y1 = random(height);
  let x2 = random(width);
  let y2 = random(height);
  line(x1, y1, x2, y2);
  
  // Draw random ellipses
  let ellipseX = random(width);
  let ellipseY = random(height);
  let ellipseSize = random(10, 50);
  ellipse(ellipseX, ellipseY, ellipseSize);
  
  // Draw random rectangles
  let rectX = random(width);
  let rectY = random(height);
  let rectWidth = random(10, 50);
  let rectHeight = random(10, 50);
  rect(rectX, rectY, rectWidth, rectHeight);

}

function mousePressed() {
  background(2);
}
