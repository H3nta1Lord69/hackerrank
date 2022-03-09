/**
 * ========================================================
 * Create a button
 * ========================================================
 */

var btn = document.createElement("Button");

btn.innerHTML = "0";

btn.id = "btn";

btn.className = "btnClass";

document.body.appendChild(btn);

btn.onclick = function () {
  btn.innerHTML += 2;
};

/**
 * ========================================================
 * Buttons Container
 * ========================================================
 */

var l = "4";

var a = ["1", "2", "3", "6", "9", "8", "7", "4"];

var b = ["1", "2", "3", "6", "9", "8", "7", "4"];

var rotate = function () {
  for (var i = 7; i > 0; i--) {
    a[i] = a[i - 1];
  }

  a[0] = l;

  l = a[7];

  for (var i = 0; i < 8; i++) {
    document.getElementById("btn" + b[i]).innerText = a[i];
  }
};
