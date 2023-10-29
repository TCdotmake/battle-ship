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

  appBG.append(newGameBtn, toggleAIBtn, p1Div, p2Div);
  document.body.append(appBG);
}
function mkPlayerDiv(p1Name) {
  const playerDiv = document.createElement("div");
  playerDiv.id = `${p1Name}-div`;
  const playerEnemy = BoardContainer(`${p1Name}-enemy`);
  const playerSelf = BoardContainer(`${p1Name}-self`);
  const playerDefeat = mkDefeatScreen();
  playerDefeat.id = `${p1Name}-defeat`;
  const playerVictory = mkVictoryScreen();
  playerVictory.id = `${p1Name}-victory`;
  playerEnemy.append(playerDefeat);
  playerSelf.append(playerVictory);
  playerDiv.append(playerEnemy, playerSelf);
  return playerDiv;
}
