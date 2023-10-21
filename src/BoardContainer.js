export default function BoardContainer() {
  const boardContainer = document.createElement("div");
  boardContainer.classList.add("board-container");
  const empty = document.createElement("div");
  empty.classList.add("empty");
  empty.innerHTML = "empty";
  const xlabel = document.createElement("div");
  xlabel.classList.add("xlabel");
  xlabel.innerHTML = "xlabel";
  const ylabel = document.createElement("div");
  ylabel.classList.add("ylabel");
  ylabel.innerHTML = "ylabel";
  const cellContainer = document.createElement("div");
  cellContainer.classList.add("cell-container");
  cellContainer.innerHTML = "cell container";
  boardContainer.append(empty, xlabel, ylabel, cellContainer);
  return boardContainer;
}
