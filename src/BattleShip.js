import BoardContainer from "./BoardContainer.js";
import placeRandShips from "./placeRandShips.js";
import mkIcon from "./icon/mkIcon";
import shipSVG from "./icon/shipSVG";
import hitSVG from "./icon/hitSVG.js";
import Player from "./Player.js";
import missedSVG from "./icon/missedSVG.js";
export default function BattleShip() {
  const p1AttackCells = "p1-attack";
  const p2AttackCells = "p2-attack";
  const p1Board = BoardContainer(p1AttackCells);
  const p2Board = BoardContainer(p2AttackCells);
  document.body.append(p1Board, p2Board);
  const player1 = Player();
  const player2 = Player();
  player1.setOpponent(player2);
  player2.setOpponent(player1);
  placeRandShips(player1);
  displayShips(p1AttackCells, player1);
  const cells = document.getElementById(p2AttackCells).children;
  for (let index = 0; index < cells.length; index++) {
    cells[index].addEventListener("click", (e) => {
      e.preventDefault();
      const x = e.target.dataset.x;
      const y = e.target.dataset.y;
      const valid = player2.attack(x, y);
      if (valid) {
        let token = player1.board.getToken(x, y);
        if (token === "hit") {
          e.target.append(mkIcon("hit", hitSVG));
        } else {
          e.target.append(mkIcon("missed", missedSVG));
        }
      }
    });
  }
}
function displayShips(playerName, player) {
  const cells = document.getElementById(playerName).children;
  const board = player.board.board;
  let numRegex = /^\d+$/;
  for (let index = 0; index < cells.length; index++) {
    if (numRegex.test(board[index])) {
      cells.item(index).append(mkIcon("ship-icon", shipSVG));
    }
  }
}
