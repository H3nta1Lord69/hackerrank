/**
 * ========================================================
 * Create a Rectangle Object
 * ========================================================
 */

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the Rectangle function
 */
function Rectangle(a, b) {
  this.length = a;
  this.width = b;
  this.area = a * b;
  this.perimeter = 2 * (a + b);
}

function main() {
  const a = +readLine();
  const b = +readLine();

  const rec = new Rectangle(a, b);

  console.log(rec.length);
  console.log(rec.width);
  console.log(rec.perimeter);
  console.log(rec.area);
}

/**
 * ========================================================
 * Count Objects
 * ========================================================
 */

("use strict");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 *
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */
function getCount(objects) {
  return objects.filter(function (o) {
    return o.x == o.y;
  }).length;
}

function main() {
  const n = +readLine();
  let objects = [];

  for (let i = 0; i < n; i++) {
    const [a, b] = readLine().split(" ");

    objects.push({ x: +a, y: +b });
  }

  console.log(getCount(objects));
}

/**
 * ========================================================
 * Classes
 * ========================================================
 */

/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */

class Polygon {
  constructor(sides) {
    this.sides = sides;
  }
  perimeter() {
    return this.sides.reduce(function add(a, b) {
      return a + b;
    });
  }
}

const rectangle = new Polygon([10, 20, 10, 20]);
const square = new Polygon([10, 10, 10, 10]);
const pentagon = new Polygon([10, 20, 30, 40, 43]);

console.log(rectangle.perimeter());
console.log(square.perimeter());
console.log(pentagon.perimeter());
