function drawGrid(size) {
  const gridContainer = document.querySelector("#grid-container");
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("div-square");
    gridContainer.append(square);
  }
}

drawGrid(16);
