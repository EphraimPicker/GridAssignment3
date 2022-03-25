// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    const grid = document.getElementById('grid');
    const row = document.createElement('tr');
    // makes row of size numCols
    for (let i=0; i < numCols; i++){
        const col = document.createElement('td');
        row.appendChild(col);
    }
    grid.appendChild(row);
    numRows++;      // track number of rows
}

// Add a column
function addC() {
    const grid = document.getElementById('grid');
    // makes column of size numRows
    for (let i=0; i < numRows; i++){
        const row = grid.children[i];
        const col = document.createElement('td');
        row.appendChild(col);
    }
    numCols++;      // track number of columns
}

// Remove a row //Done by Eric Gonzalez
function removeR() {
    document.getElementById("grid").deleteRow(-1);// grid is the table id
    numRows --; //delete row count
    if(numRows === 0){ 
        numCols = 0;
    }  
}

// Remove a column
function removeC() {
    const grid = document.getElementById('grid');
    for (let i=0; i < numRows; i++){
        const row = grid.children[i];
        row.deleteCell(-1);
    }
    numCols--;      // track number of columns
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells //Done by Eric Gonzalez
function fillU(){
    let cell = document.getElementsByTagName("td");
    for(let i = 0; i < cell.length; i++){
      if(cell[i].style.backgroundColor){ //return the background property
        cell[i].style.backgroundColor = colorSelected;
        }  
    }
}

// Fill all cells
function fillAll(){
    // all cells contained in variable cell
    const cell = document.getElementsByTagName("td");
    for(let i = 0; i < cell.length; i++){
        // change color of each cell
        cell[i].style.backgroundColor = colorSelected;
    }
}

// Clear all cells //Done by Eric Gonzalez
function clearAll(){
    let cell = document.getElementsByTagName("td");
    for(let i = 0; i < cell.length; i++){ //return the background property and make it change to white when clear
        cell[i].style.backgroundColor = "white";
    }
}
