import mkIcon from "./icon/mkIcon";
import shipSVG from "./icon/shipSVG";
export default function displayShips(boardID, player) {
  const cells = document.getElementById(boardID).children;
  const board = player.board;
  let numRegex = /^\d+$/;
  for (let index = 0; index < cells.length; index++) {
    if (numRegex.test(board[index])) {
      cells.item(index).append(mkIcon("ship-icon", shipSVG));
    }
  }
}
