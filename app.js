const gridContainer = document.getElementById("grid-container");

function generateGrid(rows, columns) {
    gridContainer.style.setProperty('--grid-rows', rows);
    gridContainer.style.setProperty('--grid-columns', columns);
    for (i = 0; i < (rows * columns); i++) {
        let cell = document.createElement("div");
        gridContainer.appendChild(cell).className = "grid-item";
    };
};

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
})


// #classic-button
// #overlay-button
// #candy-button
