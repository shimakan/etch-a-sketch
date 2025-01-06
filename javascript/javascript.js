function createGrid(rows, cols){
    const container = document.querySelector('.container');

    for(let i = 0; i < rows; i++){
        for(let j = 0; j < cols; j++){
            const cell = document.createElement('div');
            cell.classList.add('cell');
            container.appendChild(cell);
        }
    }
}

createGrid(4, 4);