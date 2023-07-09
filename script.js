const container = document.querySelector('.container');
const sizeSlider = document.querySelector('.size-slider');
const sizeValue = document.querySelector('.size-value');

// Function to create the grid
function createGrid(size) {
  // Clear the existing grid
  container.innerHTML = '';

  // Calculate the cell size
  const cellSize = `${100 / size}%`;

  // Set the grid size and cell size using flexbox
  container.style.flexWrap = 'wrap';
  container.style.width = '750px';
  container.style.height = '750px';

  // Create and append the cells to the container
  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.style.flexBasis = cellSize;
    cell.style.height = cellSize;
    container.appendChild(cell);
  }

  // Update the size value text
  sizeValue.textContent = `${size} x ${size}`;
}

// Event listener for the slider input
sizeSlider.addEventListener('input', () => {
  const gridSize = sizeSlider.value;
  createGrid(gridSize);
});

createGrid(16); // Generate initial grid
