var size = 16;
var color = "black";

function populateGrid(){
    const grid = document.getElementById("grid");
    let res = "";
    for(var i = 0; i < (size * size); i++){
        res += '<div class="grid-cell"></div>';
    }
    grid.innerHTML = res;
}
populateGrid();

var gridCells = document.getElementsByClassName("grid-cell");
// console.log(gridCells);
// [...gridCells].forEach(cell => {
//     alert("Hello");
//     cell.addEventListener("mousedown", ()=>{
//         cell.style.backgroundColor = color;
//     })
// ;});

var mousedown = false
document.addEventListener("mousedown", ()=>{
    mousedown = true;
});

document.addEventListener("mouseup", ()=>{
    mousedown = false;
})
for(let i = 0; i < gridCells.length; i++){
        // alert("Here")

        gridCells[i].addEventListener("mousedown", ()=>{
            gridCells[i].style.backgroundColor = color;
        })
        gridCells[i].addEventListener("mouseover", ()=>{
            // alert("Hey");
            if(mousedown){
                gridCells[i].style.backgroundColor = color;
            }
        });
   
}

