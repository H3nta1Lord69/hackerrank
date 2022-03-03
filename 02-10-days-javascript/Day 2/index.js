/**
 * ========================================================
 * Conditional Statements: If-Else
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

function getGrade(score) {
  let grade;
  // Write your code here
  if (score >= 25) {
    grade = "A";
  } else if (score >= 20) {
    grade = "B";
  } else if (score >= 15) {
    grade = "C";
  } else if (score >= 10) {
    grade = "D";
  } else if (score >= 5) {
    grade = "E";
  } else {
    grade = "F";
  }

  return grade;
}

function main() {
  const score = +readLine();

  console.log(getGrade(score));
}

/**
 * ========================================================
 * Loops
 * ========================================================
 */

/**
 * ========================================================
 * Loops
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
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
  var [i, vowels, cons] = [0, "aeiou", ""];
  for (i in s) {
    if (vowels.includes(s.charAt(i))) console.log(s.charAt(i));
    else cons += s[i] + "\n";
  }
  console.log(cons.trim());
}

function main() {
  const s = readLine();

  vowelsAndConsonants(s);
}
