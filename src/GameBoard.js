function mkPosArr(size = 10) {
  const posArr = [];
  if (size > 0 && size <= 26) {
    for (let x = 1; x <= size; x++) {
      for (let y = 1; y <= size; y++) {
        posArr.push(`${x},${y}`);
      }
    }
  }
  return posArr;
}

export default function GameBoard(size = 10) {
  const gameBoard = {};
  gameBoard.posArr = mkPosArr(size);
  gameBoard.placeShip = (pos, shipLength, vertical = true) => {};
  return gameBoard;
}
