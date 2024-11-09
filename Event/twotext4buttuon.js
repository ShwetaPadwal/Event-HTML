
  document.getElementById("btn1").onclick = function () {
    doCalculation("+");
  };
  document.getElementById("btn2").onclick = function () {
    doCalculation("-");
  };
  document.getElementById("btn3").onclick = function () {
    doCalculation("*");
  };
  document.getElementById("btn4").onclick = function () {
    doCalculation("/");
};
  
  function doCalculation(ans) {
    var data1 = document.getElementById("x1").value;
    var data2 = document.getElementById("x2").value;
    data1 = parseFloat(data1);
    data2 = parseFloat(data2);
    if (ans == "+") {
      var result = data1 + data2;
    }
    if (ans == "-") {
      var result = data1 - data2;
    }
    if (ans == "*") {
      var result = data1 * data2;
    }
    if (ans == "/") {
      var result = data1 / data2;
    }

    document.getElementById("result").innerHTML = result;
  }