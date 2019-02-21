/// <reference path="../TSDef/p5.global-mode.d.ts" />

let x = 50;
let y = 650;
let size = 700;

function setup() {
  createCanvas(800, 800, P2D);
  background(0);
  stroke(255);
  noFill();

  //triangle(x, y, x + size, y, x + size / 2, y - size / 3 * 2.6);

  generateSierpinskiTriangle(x, y, size)
}

function draw() {

}

function generateSierpinskiTriangle(x, y, size) {

  if (size > 3) {

    let color = map(size, 700, 3, 100, 250);
    let alpha = map(size, 700, 3, 255, 100);

    stroke(0, color, 0, alpha);

    triangle(x, y, x + size, y, x + size / 2, y - size / 3 * 2.6);

    //Left Triangle
    setTimeout(() => generateSierpinskiTriangle(x + size / 2, y, size / 2), 1000);

    //Right Triangle
    setTimeout(() => generateSierpinskiTriangle(x, y, size / 2), 1000);

    //Top Triangle
    setTimeout(() => generateSierpinskiTriangle(x + size / 4, y - size / 2.3, size / 2), 1000);





  }

}