function GameBoard(size = 10) {
  const gameBoard = {};
  gameBoard.posArr = [];
  if (size > 0) {
    let i = 1;
    let j = 1;
    while (i <= size) {
      let n = String.fromCharCode(i + 64);
      while (j <= size) {
        gameBoard.posArr.push(`${n}${i}`);
        j += 1;
      }
      n += 1;
    }
  }
  return gameBoard;
}
let board = GameBoard(2);
console.log(board);
