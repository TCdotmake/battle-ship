import Ship from "./Ship";
export default function GameBoard(size = 10) {
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
      resetBoard() {
        this.board = [...arr];
      },
      inBound(x, y) {
        return x >= 0 && x < this.size && y >= 0 && y < this.size;
      },

      getIndex(x, y) {
        if (this.inBound(x, y)) {
          return parseInt(this.size * y) + parseInt(x);
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
      isEmpty(x, y) {
        return this.getToken(x, y) === null;
      },
      allocateSpace(x, y, shipLength, vertical = true) {
        let indexArr = [];
        if (vertical) {
          for (let i = 0; i < shipLength; i++) {
            if (this.inBound(x, y + i) && this.isEmpty(x, y + i)) {
              indexArr.push(this.getIndex(x, y + i));
            } else return undefined;
          }
        } else {
          for (let i = 0; i < shipLength; i++) {
            if (this.inBound(x + i, y) && this.isEmpty(x + i, y)) {
              indexArr.push(this.getIndex(x + i, y));
            } else return undefined;
          }
        }
        return indexArr;
      },
      placeShip(x, y, shipLength, vertical = true) {
        let indArr = this.allocateSpace(x, y, shipLength, vertical);
        if (indArr !== undefined) {
          const shipIndex = this.ships.length;
          this.ships.push(Ship(shipLength));
          for (let index of indArr) {
            this.board[index] = shipIndex;
          }
          return true;
        } else return false;
      },
      validAttack(x, y) {
        let token = this.getToken(x, y);
        return token != "missed" && token != "hit";
      },
      receiveAttack(x, y) {
        let result = false;
        if (this.inBound(x, y)) {
          if (this.validAttack(x, y)) {
            const index = this.getToken(x, y);
            result = true;
            if (index === null) {
              this.setToken(x, y, "missed");
            } else {
              this.setToken(x, y, "hit");
              this.ships[index].hit();
            }
          }
        }
        return result;
      },
      isDefeated() {
        for (let ship of this.ships) {
          if (!ship.isSunk()) {
            return false;
          }
        }
        return true;
      },
    };
    return gameBoardObj;
  }
  return undefined;
}
