// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    alert("Clicked Add Row"); // Replace this line with your code.
}

// Add a column
function addC() {
    alert("Clicked Add Col"); // Replace this line with your code.
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
    alert("Clicked Remove Col"); // Replace this line with your code.
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
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells //Done by Eric Gonzalez
function clearAll(){
    let cell = document.getElementsByTagName("td");
    for(let i = 0; i < cell.length; i++){ //return the background property and make it change to white when clear
        cell[i].style.backgroundColor = "white";
    }
}
