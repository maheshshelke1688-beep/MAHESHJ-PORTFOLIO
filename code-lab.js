const codeDisplay = document.getElementById("code-display");
const output = document.getElementById("output");

const runButton = document.getElementById("runButton");
const clearButton = document.getElementById("clearButton");


runButton.addEventListener("click", function () {

    output.textContent = "Hello visitor!";

});


clearButton.addEventListener("click", function () {

    output.textContent = "Output cleared.";

});