import NewGame from "./NewGame";
import initStaticDOM from "./initStaticDOM";
import mkGame from "./mkGame";

export default function app() {
  initStaticDOM();
  const game = mkGame();
  addNewGameEL(game);
}

function addNewGameEL(gameObj) {
  const newGameBtn = document.getElementById("new-game-btn");
  newGameBtn.addEventListener("click", () => {
    NewGame(gameObj);
  });
}
