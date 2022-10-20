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
    numCols = 0;
    let newRow = grid.insertRow();
    newRow.setAttribute("id", "row" + numRows);
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
    // alert("Clicked Remove Row"); // Replace this line with your code.
    grid.deleteRow(numRows - 1);
    numRows--;
    console.log(numRows);
}

// Remove a column
function removeC() {
    // alert("Clicked Remove Col"); // Replace this line with your code.
    let row = document.getElementById("row" + (numRows));
    row.deleteCell(numCols - 1);
    numCols--;
    console.log(numCols);
}

// Set global variable for selected color
function selectColor() {
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells with selected color
function fillU() {
    // alert("Clicked Fill All Uncolored"); // Replace this line with your code.
    let body = grid.childNodes;
    let rows = body[1].childNodes;
    for (const Row in rows) {
        // console.log(Row);
        let cols = rows[Row].childNodes;
        for (const columns in cols) {
            // console.log(columns);
            if (Object.hasOwnProperty.call(cols, columns)) {
                if (!cols[columns].style.backgroundColor) {
                    console.log(cols[columns].id);
                    cols[columns].style.backgroundColor = colorSelected;

                }

            }
        }
    }
}

// Fill all cells with selected color
function fillAll() {
    // alert("Clicked Fill All"); // Replace this line with your code.
    let body = grid.childNodes;
    let rows = body[1].childNodes;
    for (const Row in rows) {
        const element = rows[Row];
        let columns = element.childNodes;
        for (const Col in columns) {
            if (Object.hasOwnProperty.call(columns, Col)) {
                const el = columns[Col];
                el.style.backgroundColor = colorSelected;
            }
        }
    }
}




// Clear all cells
function clearAll() {
    alert("Clicked Clear All"); // Replace this line with your code.
}