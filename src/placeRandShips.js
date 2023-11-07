//takes in a player and place ships randomly on it's board

const shiplengths = [5, 4, 3, 3, 2];
function randPos() {
  return Math.floor(Math.random() * 10);
}
export default function placeRandShips(player) {
  for (let n of shiplengths) {
    let done = false;
    while (!done) {
      done = player.placeShip(randPos(), randPos(), n, randPos() > 5);
    }
  }
}
