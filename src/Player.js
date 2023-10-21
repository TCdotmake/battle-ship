import GameBoard from "./GameBoard";

export default function Player() {
  let playerObj = {
    board: GameBoard(),
    opponent: undefined,
    setOpponent(anotherPlayer) {
      this.opponent = anotherPlayer;
    },
    attack(x, y) {
      let enemyBoard = this.opponent.board;
      let result = enemyBoard.receiveAttack(x, y);
      return result;
    },
  };
  return playerObj;
}
