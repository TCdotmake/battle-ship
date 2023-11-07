import Player from "./Player";

export default function mkGame() {
  let gameObj = {
    active: false,
    toggleP2AI() {
      this.p2.AI = !this.p2.AI;
    },
    setP2AI(val) {
      this.p2.AI = val;
    },
    togglePlayer() {
      if (this.currentPlayer === this.p1) {
        this.currentPlayer = this.p2;
      } else this.currentPlayer = this.p1;
    },
  };
  gameObj.p1 = Player("p1");
  gameObj.p2 = Player("p2");
  gameObj.p1.setOpponent(gameObj.p2);
  gameObj.p2.setOpponent(gameObj.p1);
  gameObj.currentPlayer = gameObj.p1;
  return gameObj;
}
