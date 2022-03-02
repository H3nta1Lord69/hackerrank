function processData(input) {
  //Enter your code here
  var pieces = input.split("\n");
  var mealCost = parseFloat(pieces[0]);
  var tipPercent = parseInt(pieces[1]);
  var taxPercent = parseInt(pieces[2]);

  var total =
    (mealCost * tipPercent) / 100 + (mealCost * taxPercent) / 100 + mealCost;

  console.log(Math.round(total));
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});
