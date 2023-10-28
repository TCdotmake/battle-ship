import Player from "./Player";
import displayShips from "./displayShips";
import placeRandShips from "./placeRandShips";

export default function NewGame(gameObj) {
  //newgame routine for data
  //reset board data for both players
  gameObj.p1.resetBoard();
  gameObj.p2.resetBoard();
  //randomly set ships on both boards
  placeRandShips(gameObj.p1);
  placeRandShips(gameObj.p2);
  //set currentPlayer to p1
  gameObj.currentPlayer = gameObj.p1;
  // set game to active
  gameObj.active = true;

  //newgame routine for visual
  //empty all cells
  const cellsArr = document.querySelectorAll(".cell");
  for (let cell of cellsArr) {
    cell.innerHTML = "";
  }
  //populate board with ships
  displayShips("p1-self", gameObj.p1);
  displayShips("p2-self", gameObj.p2);
}
