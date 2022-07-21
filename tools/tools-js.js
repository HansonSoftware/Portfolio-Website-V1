// Start GPA Calculator Section

// (A) SCORE SHEET & SUBJECTS
var scores = {
    Grade: 0,
    A: 4, B: 3, C: 2, D: 1, F: 0
};
var subjects = [
    "Class 1", "Class 2", "Class 3", "Class 4", "Class 5"
];

// (B) DRAW HTML
window.addEventListener("load", () => {
    let wrapper = document.getElementById("gpa-wrap"),
        table = document.createElement("table"),
        row = table.insertRow(),
        cell = null, selector = null, option = null;
    for (let s of subjects) {
        cell = row.insertCell();
        cell.innerHTML = s;
        cell = row.insertCell();
        selector = document.createElement("select");
        cell.appendChild(selector);
        for (let grade in scores) {
            option = document.createElement("option");
            option.innerHTML = grade;
            option.value = scores[grade];
            selector.appendChild(option);
            selector.onchange = gpacalc;
        }
        row = table.insertRow();
    }
    wrapper.appendChild(table);
    gpacalc();
});
// (C) CALCULATE FUNCTION
var gpacalc = () => {
    let all = document.querySelectorAll("#gpa-wrap select"),
        score = 0;
    for (let i of all) {
        // Use parseFloat if decimals are involved.
        score += parseInt(i.value);
    }
    document.getElementById("gpa-total").innerHTML = score;
    document.getElementById("gpa-average").innerHTML = score / all.length;
};



// Start Base Converter Section

document.getElementById("result").innerHTML = "Result: " + 0;
document.getElementById("base").innerHTML = "Convert to base 10 (decimal)";
document.getElementById("num").innerHTML = "Number Entered: " + 0;
function toBin() {
    var num = parseInt(document.getElementById("numToConvert").value)
    var bin = num.toString(2);
    document.getElementById("num").innerHTML = "Number Entered: " + num;
    document.getElementById("base").innerHTML = "Convert to base 2 (binary)";
    document.getElementById("result").innerHTML = "Result: " + bin;
}
function toHex() {
    var num = parseInt(document.getElementById("numToConvert").value)
    var hex = num.toString(16);
    document.getElementById("num").innerHTML = "Number Entered: " + num;
    document.getElementById("base").innerHTML = "Convert to base 16 (hexadecimal)";
    document.getElementById("result").innerHTML = "Result: " + hex;
}
function toOct() {
    var num = parseInt(document.getElementById("numToConvert").value)
    var oct = num.toString(8);
    document.getElementById("num").innerHTML = "Number Entered: " + num;
    document.getElementById("base").innerHTML = "Convert to base 8 (octal)";
    document.getElementById("result").innerHTML = "Result: " + oct;
}

// End Base Converter Section