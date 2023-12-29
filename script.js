var size = 16;
var color = "black";
var rainbowMode = false;
var eraserMode = false;

populateGrid(size);

var gridCells = document.getElementsByClassName("grid-cell");

var mousedown = false
document.addEventListener("mousedown", ()=>{
    mousedown = true;
});

document.addEventListener("mouseup", ()=>{
    mousedown = false;
})
function addEventListenersOnCells(){
    for(let i = 0; i < gridCells.length; i++){
        // alert("Here")

        gridCells[i].addEventListener("mousedown", ()=>{
            if(rainbowMode){
                color = randomColor();
            }
            if(eraserMode){
                color = "lightgrey";
            }
            gridCells[i].style.backgroundColor = color;
        })
        gridCells[i].addEventListener("mouseover", ()=>{
            // alert("Hey");
            if(mousedown){
                if(rainbowMode){
                    color = randomColor();
                }
                if(eraserMode){
                    color = "lightgrey";
                }
                gridCells[i].style.backgroundColor = color;
            }
        });
   
    }
}

const sizeElement = document.querySelector("#size");
const sizeValue = document.querySelector("#size-value");
sizeElement.addEventListener("change", ()=>{
    size = sizeElement.value;
    sizeValue.innerHTML = `${size} x ${size}`;
    populateGrid(size);
});

function populateGrid(gridSize){
    const grid = document.getElementById("grid");
    const cellWidth = 320 / gridSize;
    // alert(gridSize);
    let res = "";
    for(var i = 0; i < (gridSize * gridSize); i++){
        res += `<div class="grid-cell" style="width:${cellWidth}px;height:${cellWidth}px"></div>`;
    }
    // alert(res);
    grid.innerHTML = res;
    gridCells = document.getElementsByClassName("grid-cell");
    // console.log(gridCells);
    addEventListenersOnCells();
}


const colorElement = document.getElementById("color");
colorElement.addEventListener("input", ()=>{
    
    populateGrid(size);
    color = colorElement.value;
    document.getElementById("mode").style.backgroundColor = color;
});

colorElement.addEventListener("change", ()=>{
    rainbowMode = false;
    eraserMode = false;
    color = colorElement.value;
    document.getElementById("mode").style.backgroundColor = color;
});


var rainbowColors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

function randomColor(){
    let i = Math.floor(Math.random() * rainbowColors.length);
    return rainbowColors[i];
}
document.querySelector("#clear").addEventListener("click", ()=>{
    populateGrid(size);
});

document.querySelector("#eraser").addEventListener("click", ()=>{
    color = "lightgrey";
    eraserMode = true;
    rainbowMode = false;
    document.getElementById("mode").style.backgroundColor = color;
});

document.querySelector("#rainbow-mode").addEventListener("click", ()=>{
    populateGrid(size);
    document.getElementById("mode").style.background = "linear-gradient(135deg, red, orange, yellow, green, blue, indigo,violet )";
    rainbowMode = true;
    eraserMode = false;
});