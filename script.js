const container = document.querySelector('.container')

// Create the grid
function createGrid(size) {
  // Calculate the total number of cells
  const totalCells = size * size;

  // Create and append the cells to the container
  for (let i = 0; i < totalCells; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    container.appendChild(cell);
  }
}

createGrid(16); // Generate grid
