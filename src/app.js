import initStaticDOM from "./initStaticDOM";
import mkGame from "./mkGame";

export default function app() {
  initStaticDOM();
  const game = mkGame();
  //dummy eventlistener
  //test toggle player
  console.log(game.currentPlayer.name);
  game.togglePlayer();
  console.log(game.currentPlayer.name);
  console.log(game.p1.opponent);
  console.log(game.p2.opponent);
}
