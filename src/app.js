import NewGame from "./NewGame";
import initStaticDOM from "./initStaticDOM";
import mkGame from "./mkGame";
import switchModal from "./modal/switchPlayerModal";
import mkIcon from "./icon/mkIcon";
import hitSVG from "./icon/hitSVG";
import missedSVG from "./icon/missedSVG";

export default function app() {
  initStaticDOM();
  const game = mkGame();
  addNewGameEL(game);
  cellsAddEL(game.p1, game);
  cellsAddEL(game.p2, game);
  let appBG = document.getElementById("app-bg");
  appBG.append(switchModal);
}

function addNewGameEL(gameObj) {
  const newGameBtn = document.getElementById("new-game-btn");
  newGameBtn.addEventListener("click", (e) => {
    e.preventDefault();
    NewGame(gameObj);
    openSwitchModal(gameObj);
  });
  const toggleAIBtn = document.getElementById("toggle-ai-btn");
  toggleAIBtn.addEventListener("click", (e) => {
    e.preventDefault();
    gameObj.toggleP2AI();
  });
}

function openSwitchModal(gameObj) {
  const modal = document.getElementById("switch-modal");
  let playerName = document.getElementById("modal-player-name");
  let name = gameObj.currentPlayer.name;
  if (name === "p1") {
    playerName.innerHTML = `Player1's`;
  } else {
    playerName.innerHTML = `Player2's`;
  }
  modal.style.display = "block";
  switchDisplayedBoard(gameObj, name);
}

function switchDisplayedBoard(gameObj, name) {
  const opponent = gameObj.currentPlayer.opponent;
  const current = document.getElementById(`${name}-div`);
  const prev = document.getElementById(`${opponent.name}-div`);
  prev.style.display = "none";
  current.style.display = "block";
}

function cellsAddEL(player, gameObj) {
  let name = player.name;
  let id = `${name}-enemy`;
  const cells = document.getElementById(id).children;
  for (let index = 0; index < cells.length; index++) {
    cells[index].addEventListener("click", (e) => {
      e.preventDefault();
      if (gameObj.active && gameObj.currentPlayer.name === player.name) {
        const x = e.target.dataset.x;
        const y = e.target.dataset.y;
        const valid = player.attack(x, y);
        if (valid) {
          updateBoards(player, x, y);
          //check for winner, make game inactive is won
          checkForWinner(gameObj);
          //switch currentPlayer and continue with game
          if (gameObj.active) {
            gameObj.togglePlayer();
            //if playing against another player, pull up modal
            if (!gameObj.currentPlayer.AI) {
              openSwitchModal(gameObj);
            }
            //if playing against AI
            else {
              let move = gameObj.currentPlayer.AImove();
              gameObj.currentPlayer.attack(move.x, move.y);
              updateBoards(gameObj.currentPlayer, move.x, move.y);
              checkForWinner(gameObj);
              if (gameObj.active) {
                gameObj.togglePlayer();
              }
            }
          }
        }
      }
    });
  }
}
function updateBoards(player, x, y) {
  const opponent = player.opponent;
  const token = opponent.getToken(x, y);
  const index = opponent.getIndex(x, y);
  const playerCell = document.getElementById(`${player.name}-enemy`).children[
    index
  ];
  const cell = document.getElementById(`${opponent.name}-self`).children[index];
  //find opponent cell
  if (token === "hit") {
    playerCell.append(mkIcon("hit", hitSVG));
    cell.innerHTML = "";
    cell.append(mkIcon("hit", hitSVG));
  } else if (token === "missed") {
    playerCell.append(mkIcon("missed", missedSVG));
    cell.innerHTML = "";
    cell.append(mkIcon("missed", missedSVG));
  }
}

function checkForWinner(gameObj) {
  if (gameObj.currentPlayer.opponent.isDefeated()) {
    gameObj.active = false;
  }
}
