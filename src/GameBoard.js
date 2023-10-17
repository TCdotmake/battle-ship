export default function GameBoard(size) {
  if (size >= 0) {
    const length = size * size;
    const arr = [];
    for (let i = 0; i < length; i++) {
      arr.push(null);
    }
    const gameBoardObj = {
      size,
      ships: [],
      board: [...arr],
      getIndex(x, y) {
        if (x >= 0 && x < this.size && y >= 0 && y < this.size) {
          return this.size * y + x;
        } else return undefined;
      },
      setToken(x, y, token) {
        const index = this.getIndex(x, y);
        if (index != undefined) {
          this.board[index] = token;
        }
      },
      getToken(x, y) {
        const index = this.getIndex(x, y);
        if (index != undefined) {
          return this.board[index];
        }
      },
    };
    return gameBoardObj;
  }
  return undefined;
}
