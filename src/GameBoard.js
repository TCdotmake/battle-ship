import Ship from "./Ship";
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
  const gameBoard = {
    ships: [],
    occupied: [],
    posArr: mkPosArr(size),
    //getShipCoordinates
    //return array of coordinates ship occupies if placement is inbound and empty
    //else return false
    getShipCoordinates(pos, shipLength, vertical = true) {
      let x, y;
      const shipCoordinates = [];
      [x, y] = pos.split(",");
      if (vertical) {
        for (let i = 0; i < shipLength; i++) {
          let coordinate = `${x},${parseInt(y) + i}`;
          if (this.posArr.includes(coordinate)) {
            shipCoordinates.push(coordinate);
          } else {
            return false;
          }
        }
      } else {
        for (let i = 0; i < shipLength; i++) {
          let coordinate = `${parseInt(x) + i},${y}`;
          if (this.posArr.includes(coordinate)) {
            shipCoordinates.push(coordinate);
          } else {
            return false;
          }
        }
      }
      for (let pos of shipCoordinates) {
        if (this.occupied.includes(pos)) {
          return false;
        }
      }
      return shipCoordinates;
    },
    //placeShip
    // attempt to place ship based on coordinate, shiplength and orientation
    // return true if all green, else return false
    placeShip(pos, shipLength, vertical = true) {
      let coordinates = this.getShipCoordinates(pos, shipLength, vertical);
      if (coordinates) {
        //create ship and record coordinate
        const newShip = Ship(shipLength);
        newShip.coordinate = [...coordinates];
        //add ship to board and set occupied coordinates
        this.ships.push(newShip);
        for (let n of coordinates) {
          this.occupied.push(n);
        }
        return true;
      } else {
        return false;
      }
    },
  };

  return gameBoard;
}
