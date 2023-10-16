function mkPosArr(size = 10) {
  const posArr = [];
  if (size > 0 && size <= 26) {
    for (let i = 1; i <= size; i++) {
      let n = String.fromCharCode(i + 64);
      for (let j = 1; j <= size; j++) {
        posArr.push(`${n},${j}`);
      }
    }
  }
  return posArr;
}

export default function GameBoard(size = 10) {
  const gameBoard = {};
  gameBoard.posArr = mkPosArr(size);

  return gameBoard;
}
