
const container = document.querySelector('.container');
const resizeButton = document.querySelector("#resize-button");

function createGrid(size){
    //clear existing html
    container.innerHTML = "";
    
    const gridItemSize = 960 / size;
    for(let i = 0; i < size; i++){
        for(let j = 0; j < size; j++){
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.style.width = `${gridItemSize}px`;
            cell.style.height = `${gridItemSize}px`;
            cell.addEventListener("mouseenter", () => {
                cell.classList.add("hovered"); // add a class to change the color
            });

            container.appendChild(cell);
        }
    }
}

resizeButton.addEventListener("click", () => {
    let newSize = prompt("Enter the number of squares per side (1-100):  ");
    newSize = parseInt(newSize);
    if(isNaN(newSize) || newSize < 1 || newSize > 100){
        alert("Enter a valid number between 1-100.");
    }else{
        createGrid(newSize);
    }
});

createGrid(4); // default grid size