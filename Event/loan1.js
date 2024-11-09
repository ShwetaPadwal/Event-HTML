"use strict";

document.getElementById("btn").onclick = function () {
  var data1 = document.getElementById("x1").value;
  var data2 = document.getElementById("x2").value;
  var data3 = document.getElementById("x3").value;
  console.log(typeof data1);
  console.log(isNaN(data1));

  console.log(data1);
  console.log(data2);
  console.log(data3);

  var msg = "";
  if (data1 == "" || data2 == "" || data3 == "") {
    msg = "Please enter all fields!";
  } else if (isNaN(data1) || isNaN(data2) || isNaN(data3)) {
    msg = "All fields should contain numeric values!";
  } else if (data1 < 0 || data2 < 0 || data3 < 0) {
    msg = "All fields should contain positive numeric values!";
  } else {
    var p = Number(data1);
    var r = parseFloat(data2);
    var n = parseInt(data3);

    var si = (p * r * n) / 100;
    var FinalAmount = p + si;

    // si = Math.round(si);
    // FinalAmount = Math.round(FinalAmount);

    document.getElementById("y1").innerHTML = p;
    document.getElementById("y2").innerHTML = si;
    document.getElementById("y3").innerHTML = FinalAmount;

    document.getElementById("result").innerHTML = msg;
  };
}
