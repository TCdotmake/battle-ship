import mkIcon from "./icon/mkIcon";
import shipSVG from "./icon/shipSVG";
export default function displayShips(boardID, player) {
  console.log(player);
  const cells = document.getElementById(boardID).children;
  const board = player.board;
  let numRegex = /^\d+$/;
  for (let index = 0; index < cells.length; index++) {
    if (numRegex.test(board[index])) {
      const icon = mkIcon(`${player.name}-icon`, shipSVG);
      cells.item(index).append(icon);
    }
  }
}
