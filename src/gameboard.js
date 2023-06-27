export function initializeGameboard() {
  const boardSquares = [];
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      boardSquares.push(createSquare(i, j));
    }
  }
  return {
    board: boardSquares,
    hasShips: function () {
      return this.board.some((square) => square.isOccupied !== false);
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
