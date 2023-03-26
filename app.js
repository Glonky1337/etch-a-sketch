// Set an initial global color value
let globalColor = 'overlay';
const gridContainer = document.getElementById("grid-container");

function generateGrid(rows, columns) {
    gridContainer.style.setProperty('--grid-rows', rows);
    gridContainer.style.setProperty('--grid-columns', columns);
    for (i = 0; i < (rows * columns); i++) {
        let cell = document.createElement("div");
        gridContainer.appendChild(cell).className = "grid-item";
        cell.addEventListener('mouseover', function(e) {
            console.log(globalColor);
            if (globalColor === 'black') {
                cell.style.backgroundColor = 'rgb(1,1,1)';
                cell.style.opacity = '1';
            } else if (globalColor === 'overlay') {
                let opacity = cell.style.opacity;
                if (cell.classList.contains('grid-item')) {
                    cell.style.backgroundColor = 'rgb(1,1,1)';
                    cell.style.opacity = (Number(opacity) + 0.2);
                } 
            } else if (globalColor === 'candy') {
                    cell.style.backgroundColor = 'rgb(255,159,196)';
                    cell.style.opacity = '1';
            } else {
                    globalColor = 'black';
            }
        })
    };
};

function generateCandyColors() {
    const candyColorOptions = [
        'rgb(225,159,196)', // pastel pink
        'rgb(138,141,222)', // pastel purple
        'rgb(255,223,158)', // pastel yellow
        'rgb(119,221,119)', // pastel green
        'rgb(158,189,219)'  // pastel blue
    ];
    return candyColorOptions[Math.floor(Math.random() * candyColorOptions.length)];
}

document.querySelector('#classic-button').addEventListener('click', () => globalColor = 'black');
document.querySelector('#overlay-button').addEventListener('click', () => globalColor = 'overlay');
document.querySelector('#candy-button').addEventListener('click', () => globalColor = 'candy');

function clearGrid() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

// grid options: small, medium, large
generateGrid(10,15); // default grid

const smallButton = document.querySelector('#small-button');
smallButton.addEventListener('click', () => {
    clearGrid();
    generateGrid(10,15);
});

const mediumButton = document.querySelector('#medium-button');
mediumButton.addEventListener('click', () => {
    clearGrid();
    generateGrid(20, 30);
});

const largeButton = document.querySelector('#large-button');
largeButton.addEventListener('click', () => {
    clearGrid();
    generateGrid(40, 60);
});