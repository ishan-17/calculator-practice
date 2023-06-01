//Global variables
var prevCalc = 0;
var calc = "";

//The following function displays a number in the textfield when a number is clicked.
//Note that it keeps concatenating numbers which are clicked.
function showNum(value) {
  document.frmCalc.txtNumber.value += value;
  //var  valueofButton = document.getElementById(valueOfId).value;
  //document.frmCalc.txtNumber.value += valueofButton ;
}

//The following function decreases the value of displayed number by 1.
//isNaN method checks whether the value passed to the method is a number or not.
function decrement() {
  var num = parseFloat(document.frmCalc.txtNumber.value);
  if (!isNaN(num)) {
    num--;
    document.frmCalc.txtNumber.value = num;
  }
}

function increment() {
  var num = parseFloat(document.frmCalc.txtNumber.value);
  if (!isNaN(num)) {
    num++;
    document.frmCalc.txtNumber.value = num;
  }
}

//The following function is called when "Add" button is clicked.
//Note that it also changes the values of the global variables.
function add() {
  var num = parseFloat(document.frmCalc.txtNumber.value);
  if (!isNaN(num)) {
    prevCalc = num;
    document.frmCalc.txtNumber.value = "";
    calc = "Add";
  }
}

function subtract() {
  var num = parseFloat(document.frmCalc.txtNumber.value);
  if (!isNaN(num)) {
    prevCalc = num;
    document.frmCalc.txtNumber.value = "";
    calc = "Subtract";
  }
}

function multiply() {
  var num = parseFloat(document.frmCalc.txtNumber.value);
  if (!isNaN(num)) {
    prevCalc = num;
    document.frmCalc.txtNumber.value = "";
    calc = "Multiply";
  }
}

function divide() {
  var num = parseFloat(document.frmCalc.txtNumber.value);
  if (!isNaN(num)) {
    prevCalc = num;
    document.frmCalc.txtNumber.value = "";
    calc = "Divide";
  }
}

function power() {
  var num = parseFloat(document.frmCalc.txtNumber.value);
  if (!isNaN(num)) {
    prevCalc = num;
    document.frmCalc.txtNumber.value = "";
    calc = "Power";
  }
}

function squareRoot() {
  var num = parseFloat(document.frmCalc.txtNumber.value);
  if (!isNaN(num)) {
    prevCalc = num;
    document.frmCalc.txtNumber.value = "";
    calc = "SquareRoot";
    var total = Math.sqrt(num);
    document.frmCalc.txtNumber.value = total;
    console.log("total", total);
  }
}

function floor() {
  var num = parseFloat(document.frmCalc.txtNumber.value);
  if (!isNaN(num)) {
    prevCalc = num;
    document.frmCalc.txtNumber.value = "";
    calc = "Floor";
    var total = Math.floor(num);
    document.frmCalc.txtNumber.value = total;
    console.log("total", total);
  }
}

function round() {
  var num = parseFloat(document.frmCalc.txtNumber.value);
  if (!isNaN(num)) {
    prevCalc = num;
    document.frmCalc.txtNumber.value = "";
    calc = "Round";
    var total = Math.round(num);
    document.frmCalc.txtNumber.value = total;
    console.log("total", total);
  }
}

function square() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!isNaN(num)) {
      prevCalc = num;
      document.frmCalc.txtNumber.value = "";
      calc = "Square";
      var total = num*num
      document.frmCalc.txtNumber.value = total;
      console.log("total", total);
    }
  }



//The following function is called when "Calculate" button is clicked.
//Note that this function is dependent on the value of global variable.
function calculate() {
  var num = parseFloat(document.frmCalc.txtNumber.value);
  if (!isNaN(num)) {
    if (calc == "Add") {
      var total = prevCalc + num;
      document.frmCalc.txtNumber.value = total;
      console.log("total", total);
    } else if (calc === "Subtract") {
      var total = prevCalc - num;
      document.frmCalc.txtNumber.value = total;
      console.log("total", total);
    } else if (calc === "Multiply") {
      var total = prevCalc * num;
      document.frmCalc.txtNumber.value = total;
      console.log("total", total);
    } else if (calc === "Divide") {
      var total = prevCalc / num;
      document.frmCalc.txtNumber.value = total;
      console.log("total", total);
    } else if (calc === "Power") {
      var total = Math.pow(prevCalc, num)
      document.frmCalc.txtNumber.value = total;
      console.log("total", total);
    }
  }
}

function clear() {
  document.frmCalc.txtNumber.value = "";
  prevCalc = 0;
  calc = "";
}
