/**
 * ========================================================
 * Regular Expressions I
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

function regexVar() {
  /*
   * Declare a RegExp object variable named 're'
   * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
   */

  let re = /^([aeiou]).+\1$/;
  /*
   * Do not remove the return statement
   */
  return re;
}

function main() {
  const re = regexVar();
  const s = readLine();

  console.log(re.test(s));
}

/**
 * ========================================================
 * Regular Expressions II
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

function regexVar() {
  /*
   * Declare a RegExp object variable named 're'
   * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.',
   * followed by one or more letters.
   */

  let re = /^(Mr|Mrs|Ms|Dr|Er)(\.)([a-zA-Z])*$/;

  /*
   * Do not remove the return statement
   */
  return re;
}

function main() {
  const re = regexVar();
  const s = readLine();

  console.log(!!s.match(re));
}

/**
 * ========================================================
 * Regular Expressions III
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

function regexVar() {
  /*
   * Declare a RegExp object variable named 're'
   * It must match ALL occurrences of numbers in a string.
   */

  /*
   * Do not remove the return statement
   */
  return new RegExp("\\d+", "g");
}

function main() {
  const re = regexVar();
  const s = readLine();

  const r = s.match(re);

  for (const e of r) {
    console.log(e);
  }
}
