export function initializeGameboard() {
  const boardSquares = [];
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      boardSquares.push(createSquare(i, j));
    }
  }
  return {
    squares: boardSquares,
    getSquare: function (coordinates) {
      return this.squares.find((square) => square.coords === coordinates);
    },
    addShip: function (ship, coordinates, trueOrFalse) {
      const currentSquare = this.getSquare(coordinates);
      if (checkShipPlacement(ship, currentSquare)) {
        return this.occupySquares(ship, currentSquare, trueOrFalse);
      } else {
        return "illegal placement";
      }
    },
    occupySquares: function (ship, frontSquare, trueOrFalse) {
      const squaresToOccupy = [frontSquare];
      let xCoord = frontSquare.col;
      let yCoord = frontSquare.row;
      for (let i = 1; i < ship.length; i++) {
        if (ship.direction === "vertical") {
          yCoord++;
        } else if (ship.direction === "horizontal") {
          xCoord++;
        }
        let currentSquare = this.getSquare(`${xCoord}, ${yCoord}`);
        squaresToOccupy.push(currentSquare);
      }
      for (let square of squaresToOccupy) {
        if (trueOrFalse === false) {
          square.isOccupied = false;
        } else if (trueOrFalse === true) {
          square.isOccupied = ship;
        }
      }
      return squaresToOccupy;
    },
    recieveAttack: function (coordinates) {
      const currentSquare = this.getSquare(coordinates);
      if (currentSquare.attacked === true) return;
      if (currentSquare.isOccupied !== false) {
        let ship = currentSquare.isOccupied;
        ship.hit();
      }
      currentSquare.attacked = true;
    },
    hasShips: function () {
      return this.squares.some((square) => square.isOccupied !== false);
    },
  };
}

function createSquare(x, y) {
  return {
    coords: `${x}, ${y}`,
    row: y,
    col: x,
    isOccupied: false,
    attacked: false,
  };
}

function checkShipPlacement(ship, square) {
  if (ship.direction === "vertical") {
    return ship.length + square.row <= 10 ? true : false;
  } else if (ship.direction === "horizontal") {
    return ship.length + square.col <= 10 ? true : false;
  }
}
