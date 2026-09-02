const btn = document.querySelector(".btn");
function getSize() {
  let size = prompt("Enter a number between 1 and 100");
  let num = parseInt(size);

  if (num > 0 && num <= 100) {
    drawGrid(num);
  } else {
    alert("Please enter a valid number (1-100)");
  }
}

function drawGrid(size) {
  const gridContainer = document.querySelector("#grid-container");
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("div-square");
    let gridSize = 100 / size + "%";
    square.style.width = gridSize;
    square.style.height = gridSize;
    gridContainer.append(square);
  }
}

btn.addEventListener("click", getSize);
// drawGrid(64);
