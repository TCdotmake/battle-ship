//takes in a player and place ships randomly on it's board
import mkIcon from "./icon/mkIcon";
import shipSVG from "./icon/shipSVG";
const shiplengths = [5, 4, 3, 3, 2];
function randPos() {
  return Math.floor(Math.random() * 10);
}
export default function placeRandShips(player) {
  for (let n of shiplengths) {
    let done = false;
    while (!done) {
      done = player.board.placeShip(randPos(), randPos(), n, randPos() > 5);
    }
  }
}
