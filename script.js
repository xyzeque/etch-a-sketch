const container = document.querySelector('.container');
const sizeSlider = document.querySelector('.size-slider');
const sizeValue = document.querySelector('.size-value');
const colorPicker = document.querySelector('.color-picker');
const colorButton = document.querySelector('.color');
const backgroundButton = document.querySelector('.background');
const eraserButton = document.querySelector('.eraser');
const clearButton = document.querySelector('.clear');
const toggleGridLines = document.querySelector('.toggle-border');

let isDrawing = false;
let currentColor = 'black';

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

  // Add event listeners to the cells for drawing
  const cells = document.querySelectorAll('.cell');
  cells.forEach((cell) => {
    cell.addEventListener('mousedown', () => {
      isDrawing = true;
      drawCell(cell);
    });
    cell.addEventListener('mouseenter', () => {
      if (isDrawing) {
        drawCell(cell);
      }
    });
    cell.addEventListener('mouseup', () => {
      isDrawing = false;
    });
  });
}

// Function to draw a cell
function drawCell(cell) {
  if (colorButton.classList.contains('active')) {
    cell.style.backgroundColor = currentColor;
  } else if (eraserButton.classList.contains('active')) {
    cell.style.backgroundColor = '';
    cell.style.borderColor = '';
  }
}

// Event listener for the slider input
sizeSlider.addEventListener('input', () => {
  const gridSize = sizeSlider.value;
  createGrid(gridSize);
});

// Event listener for the color picker input
colorPicker.addEventListener('input', () => {
  currentColor = colorPicker.value;
});

// Event listeners for the tool buttons
colorButton.addEventListener('click', () => {
  toggleActiveButton(colorButton);
});
eraserButton.addEventListener('click', () => {
  toggleActiveButton(eraserButton);
});
clearButton.addEventListener('click', () => {
  const cells = document.querySelectorAll('.cell');
  cells.forEach((cell) => {
    cell.style.backgroundColor = '';
    cell.style.borderColor = '';
  });
});
// Event listener for the grid lines toggle button
toggleGridLines.addEventListener('click', () => {
  const cells = document.querySelectorAll('.cell');
  const isGridLinesEnabled = cells[0].style.border !== 'none';

  cells.forEach((cell) => {
    if (isGridLinesEnabled) {
      cell.style.border = 'none';
    } else {
      cell.style.border = '1px solid black';
    }
  });

  toggleActiveButton(null); // Remove active state from tool buttons
});


// Function to toggle the active state of a button
function toggleActiveButton(button) {
  const buttons = document.querySelectorAll('.control button');
  buttons.forEach((btn) => {
    if (btn !== button) {
      btn.classList.remove('active');
    } else {
      btn.classList.toggle('active');
    }
  });
}


createGrid(16); // Generate initial grid
