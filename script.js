// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected;
let grid = document.getElementById("grid");
let cell = document.createElement("td");

// Add a row
function addR() {
    // alert("Clicked Add Row"); // Replace this line with your code.
    numRows++;
    // grid.appendChild(row);
    let newRow = grid.insertRow();
    newRow.setAttribute("id", "row" + numRows);
    numCols = 0;
    console.log(numRows);
}
// Add a column
function addC() {
    // alert("Clicked Add Col"); // Replace this line with your code.
    let row = document.getElementById("row" + (numRows));
    let newCol = row.insertCell();
    newCol.setAttribute("id", "col" + numCols);
    numCols++;
    console.log(numCols);
}
// Remove a row
function removeR() {
    alert("Clicked Remove Row"); // Replace this line with your code.
}

// Remove a column
function removeC() {
    alert("Clicked Remove Col"); // Replace this line with your code.
}

// Set global variable for selected color
function selectColor() {
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU() {
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll() {
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll() {
    alert("Clicked Clear All"); // Replace this line with your code.
}