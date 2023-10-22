import BoardContainer from "./BoardContainer.js";
import placeRandShips from "./placeRandShips.js";
import Player from "./Player.js";
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
      player2.attack(x, y);
      console.log(player1.board.getToken(x, y));
    });
  }
}
function displayShips(playerName, player) {
  const cells = document.getElementById(playerName).children;
  const board = player.board.board;
  let numRegex = /^\d+$/;
  for (let index = 0; index < cells.length; index++) {
    if (numRegex.test(board[index])) {
      cells.item(index).innerHTML = board[index];
    }
  }
}
