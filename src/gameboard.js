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
    addShip: function (ship, coordinates) {
      const currentSquare = this.getSquare(coordinates);
      currentSquare.isOccupied = ship;
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
    row: `${y}`,
    isOccupied: false,
    attacked: false,
  };
}
