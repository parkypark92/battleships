import { randomNumber, randomCoords, attackSquare } from "./app.js";
import {
  displayPlacedShip,
  computerBoardDisplay,
  playerBoardDisplay,
  checkShipOverlap,
  getSquareFromDOM,
  markSquareAsAttacked,
  markSquareAsHit,
  makeUnclickable,
  setAdjacentSquares,
  addShipPlacedClass,
} from "./UI.js";
import { computer, player } from "./game.js";

export function placeComputerShips() {
  for (let ship of computer.ships) {
    setRandomShipDirection(ship);
    let squaresToOccupy = computer.board.addShip(
      ship,
      computer.board.getSquare(randomCoords())
    );
    let overlap = checkShipOverlap(squaresToOccupy, computerBoardDisplay);
    while (squaresToOccupy === false || overlap === true) {
      squaresToOccupy = computer.board.addShip(
        ship,
        computer.board.getSquare(randomCoords())
      );
      overlap = checkShipOverlap(squaresToOccupy, computerBoardDisplay);
    }
    computer.board.occupySquares(ship, squaresToOccupy);
    addShipPlacedClass(squaresToOccupy, computerBoardDisplay);
    setAdjacentSquares(squaresToOccupy, computerBoardDisplay, computer, ship);
  }
}

export function attackPlayer() {
  let boardSquare = getSquareFromDOM(playerBoardDisplay, randomCoords());
  while (
    boardSquare.classList.contains("attacked") ||
    boardSquare.classList.contains("hit")
  ) {
    boardSquare = getSquareFromDOM(playerBoardDisplay, randomCoords());
  }
  const squareToAttack = player.board.getSquare(
    boardSquare.getAttribute("data-coord")
  );
  attackSquare(player, squareToAttack.coords);
  if (squareToAttack.isOccupied) {
    markSquareAsHit(boardSquare);
  } else {
    markSquareAsAttacked(boardSquare);
  }
}

function setRandomShipDirection(ship) {
  const number = randomNumber();
  if (number >= 0 && number <= 4) {
    ship.direction = "vertical";
  } else if (number >= 5 && number <= 9) {
    ship.direction = "horizontal";
  }
}
