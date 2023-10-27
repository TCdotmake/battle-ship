import GameBoard from "./GameBoard";

export default function Player() {
  let playerObj = {
    ...GameBoard(),
    opponent: undefined,
    setOpponent(anotherPlayer) {
      this.opponent = anotherPlayer;
    },
    attack(x, y) {
      let result = this.opponent.receiveAttack(x, y);
      return result;
    },
  };
  return playerObj;
}
