import BoardContainer from "./BoardContainer";
import mkDefeatScreen from "./mkDefeatScreen";
import mkVictoryScreen from "./mkVictoryScreen";

export default function initStaticDOM() {
  const appBG = document.createElement("div");
  appBG.id = "app-bg";

  const newGameBtn = document.createElement("button");
  newGameBtn.innerHTML = "New Game";
  newGameBtn.id = "new-game-btn";
  const toggleAIBtn = document.createElement("button");
  toggleAIBtn.innerHTML = "AI";
  toggleAIBtn.id = "toggle-ai-btn";

  const p1Div = mkPlayerDiv("p1");
  const p2Div = mkPlayerDiv("p2");
  p2Div.style.display = "none";
  appBG.append(newGameBtn, toggleAIBtn, p1Div, p2Div);
  document.body.append(appBG);
}
function mkPlayerDiv(name) {
  const playerDiv = document.createElement("div");
  playerDiv.id = `${name}-div`;
  playerDiv.classList.add("player-div");
  const playerEnemy = BoardContainer(`${name}-enemy`);
  const playerSelf = BoardContainer(`${name}-self`);
  const playerDefeat = mkDefeatScreen();
  playerDefeat.id = `${name}-defeat`;
  const playerVictory = mkVictoryScreen();
  playerVictory.id = `${name}-victory`;
  playerEnemy.append(playerDefeat);
  playerSelf.append(playerVictory);
  playerDiv.append(playerEnemy, playerSelf);
  return playerDiv;
}
