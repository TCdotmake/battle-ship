import BoardContainer from "./BoardContainer";
import mkDefeatScreen from "./mkDefeatScreen";
import mkVictoryScreen from "./mkVictoryScreen";
import mkSVGText from "./svgText/mkSVGText";
import toggleSwitch from "./toggleSwitch";
export default function initStaticDOM() {
  const appBG = document.createElement("div");
  appBG.id = "app-bg";

  const svgHeader = mkSVGText("BattleShip");
  svgHeader.style.marginTop = "0.8rem";
  appBG.append(svgHeader);

  const newGameBtn = document.createElement("button");
  newGameBtn.innerHTML = "New Game";
  newGameBtn.id = "new-game-btn";

  const btnDiv = document.createElement("div");
  btnDiv.classList.add("btn-div");
  const toggle = toggleSwitch("ai-toggle");

  const aiLabel = document.createElement("p");
  aiLabel.id = "ai-label";
  aiLabel.innerHTML = "P2 CPU";

  const github = document.createElement("a");
  github.innerHTML = "GitHub";
  github.href = "https://github.com/TCdotmake/battle-ship/tree/main";
  github.target = "_blank";
  btnDiv.append(newGameBtn, toggle, aiLabel, github);

  const p1Div = mkPlayerDiv("p1");
  const p2Div = mkPlayerDiv("p2");
  p2Div.style.display = "none";
  appBG.append(btnDiv, p1Div, p2Div);
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
