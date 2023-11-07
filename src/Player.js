import GameBoard from "./GameBoard";
function randIndex(length) {
  return Math.floor(Math.random() * length);
}
export default function Player(name) {
  let playerObj = {
    ...GameBoard(),
    name,
    AI: false,
    opponent: undefined,
    setOpponent(anotherPlayer) {
      this.opponent = anotherPlayer;
    },
    attack(x, y) {
      let result = this.opponent.receiveAttack(x, y);
      return result;
    },
    AImove() {
      //get a list of valid moves
      const targetBoard = this.opponent.board;
      const movesArr = [];
      for (let index in targetBoard) {
        if (targetBoard[index] != "hit" && targetBoard[index] != "missed") {
          movesArr.push(index);
        }
      }
      const randAttack = movesArr[randIndex(movesArr.length)];
      const x = randAttack % this.opponent.size;
      const y = Math.floor(randAttack / this.opponent.size);
      return { x, y };
    },
  };
  return playerObj;
}
