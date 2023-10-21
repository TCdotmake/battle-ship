import BoardContainer from "./BoardContainer.js";
import placeRandShips from "./placeRandShips.js";
import Player from "./Player.js";
export default function BattleShip() {
  const p1Board = BoardContainer();
  const p2Board = BoardContainer();
  document.body.append(p1Board, p2Board);
  const player1 = Player();
  const player2 = Player();
  player1.setOpponent(player2);
  player2.setOpponent(player1);
  placeRandShips(player1);
  console.log(player1.board);
}
