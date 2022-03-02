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
