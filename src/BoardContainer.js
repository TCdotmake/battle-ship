export default function BoardContainer(name) {
  const boardContainer = document.createElement("div");
  boardContainer.classList.add("board-container");
  const empty = document.createElement("div");
  empty.classList.add("empty");
  const xlabel = document.createElement("div");
  xlabel.classList.add("xlabel");
  const ylabel = document.createElement("div");
  ylabel.classList.add("ylabel");
  const cellContainer = document.createElement("div");
  cellContainer.classList.add("cell-container");
  cellContainer.id = name;
  boardContainer.append(empty, xlabel, ylabel, cellContainer);
  xlabel.append(...xLabelArr());
  ylabel.append(...yLabelArr());
  cellContainer.append(...cellArr());
  return boardContainer;
}

function cellArr(size = 10) {
  const length = size * size;
  const arr = [];
  for (let i = 0; i < length; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.dataset.index = i;
    cell.dataset.x = i % 10;
    cell.dataset.y = Math.floor(i / 10);
    arr.push(cell);
  }
  return arr;
}

function xLabelArr() {
  let arr = [];
  for (let i = 0; i <= 9; i++) {
    let item = document.createElement("div");
    item.classList.add("label-container");
    let label = document.createElement("p");
    label.innerHTML = i + 1;
    item.append(label);
    arr.push(item);
  }
  return arr;
}

function yLabelArr() {
  let arr = [];
  for (let i = 0; i <= 9; i++) {
    let item = document.createElement("div");
    item.classList.add("label-container");
    let label = document.createElement("p");
    label.innerHTML = String.fromCharCode(i + 65);
    item.append(label);
    arr.push(item);
  }
  return arr;
}
