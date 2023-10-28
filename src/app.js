import NewGame from "./NewGame";
import initStaticDOM from "./initStaticDOM";
import mkGame from "./mkGame";
import mkModal from "./modal/mkModal";

export default function app() {
  initStaticDOM();
  const game = mkGame();
  addNewGameEL(game);

  let appBG = document.getElementById("app-bg");
  let dummyModal = mkModal();
  appBG.append(dummyModal);
  let aibtn = document.getElementById("toggle-ai-btn");
  aibtn.addEventListener("click", (e) => {
    e.preventDefault();
    dummyModal.style.display = "block";
  });
}

function addNewGameEL(gameObj) {
  const newGameBtn = document.getElementById("new-game-btn");
  newGameBtn.addEventListener("click", () => {
    NewGame(gameObj);
  });
}
