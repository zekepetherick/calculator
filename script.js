// This function will clear all of the values
function clearScreen() {
        document.getElementById("result").value = "";
}

// This function will display the values
function display(value) {
        document.getElementById("result").value += value;
}

// This function evaluates the expression and returns the result
function calculate() {
        var p = document.getElementById("result").value;
        var q = eval(p);
        document.getElementById("result").value = q;
}
