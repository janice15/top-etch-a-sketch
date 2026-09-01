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

drawGrid(64);
