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
    addShip: function (ship, square) {
      let squaresToOccupy = this.checkShipPlacement(ship, square);
      return squaresToOccupy;
    },
    checkShipPlacement: function (ship, square) {
      if (ship.direction === "vertical") {
        return ship.length + square.row <= 10
          ? this.getSquaresToOccupy(ship, square)
          : false;
      } else if (ship.direction === "horizontal") {
        return ship.length + square.col <= 10
          ? this.getSquaresToOccupy(ship, square)
          : false;
      }
    },
    getSquaresToOccupy: function (ship, frontSquare) {
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
      return squaresToOccupy;
    },
    getAdjacentSquares: function (ship, squaresToOccupy) {
      const finalAdjacentSquares = [];
      for (let square of squaresToOccupy) {
        const allAdjacentSquares = this.calculateAdjacentSquares(square);
        for (let square of allAdjacentSquares) {
          if (
            square !== undefined &&
            square.isOccupied === false &&
            !square.isAdjacentTo.some((e) => e.name === ship.name)
          ) {
            square.isAdjacentTo.push(ship);
            finalAdjacentSquares.push(square);
          }
        }
      }
      return finalAdjacentSquares;
    },
    calculateAdjacentSquares: function (square) {
      const adjacentSquares = [];
      let xCoord = square.col;
      let yCoord = square.row;
      adjacentSquares.push(this.getSquare(`${xCoord}, ${yCoord - 1}`));
      adjacentSquares.push(this.getSquare(`${xCoord + 1}, ${yCoord - 1}`));
      adjacentSquares.push(this.getSquare(`${xCoord + 1}, ${yCoord}`));
      adjacentSquares.push(this.getSquare(`${xCoord + 1}, ${yCoord + 1}`));
      adjacentSquares.push(this.getSquare(`${xCoord}, ${yCoord + 1}`));
      adjacentSquares.push(this.getSquare(`${xCoord - 1}, ${yCoord + 1}`));
      adjacentSquares.push(this.getSquare(`${xCoord - 1}, ${yCoord}`));
      adjacentSquares.push(this.getSquare(`${xCoord - 1}, ${yCoord - 1}`));
      return adjacentSquares;
    },
    occupySquares: function (ship, squaresToOccupy) {
      for (let square of squaresToOccupy) {
        square.isOccupied = ship;
      }
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
    isAdjacentTo: [],
    attacked: false,
  };
}
