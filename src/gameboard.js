export function initializeGameboard() {
  const boardSquares = [];
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      boardSquares.push(createSquare(i, j));
    }
  }
  return {
    squares: boardSquares,
    hasShips: function () {
      return this.squares.some((square) => square.isOccupied !== false);
    },
    getSquare: function (coordinates) {
      return this.squares.find((square) => square.coords === coordinates);
    },
    addShip: function (ship, coordinates) {
      const currentSquare = this.getSquare(coordinates);
      currentSquare.isOccupied = ship;
    },
  };
}

function createSquare(x, y) {
  return {
    coords: `${x}, ${y}`,
    isOccupied: false,
    attacked: false,
  };
}
