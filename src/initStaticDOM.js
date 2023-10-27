import BoardContainer from "./BoardContainer";
export default function initStaticDOM() {
  const appBG = document.createElement("div");
  appBG.id = "app-bg";
  const newGameBtn = document.createElement("button");
  newGameBtn.innerHTML = "New Game";
  newGameBtn.id = "new-game-btn";
  const toggleAIBtn = document.createElement("button");
  toggleAIBtn.innerHTML = "AI";
  toggleAIBtn.id = "toggle-ai-btn";
  const p1Div = document.createElement("div");
  const p1Enemy = BoardContainer("p1-enemy");
  const p1Self = BoardContainer("p1-self");
  p1Div.append(p1Enemy, p1Self);
  const p2Div = document.createElement("div");
  const p2Enemy = BoardContainer("p1-enemy");
  const p2Self = BoardContainer("p1-self");
  p2Div.append(p2Enemy, p2Self);
  appBG.append(newGameBtn, toggleAIBtn, p1Div, p2Div);
  document.body.append(appBG);
}

function newGameRoutine() {
  //empty all cells
  const cellsArr = document.querySelectorAll(".cell");
  for (let cell of cellsArr) {
    cell.innerHTML = "";
  }
  //open modal
}
