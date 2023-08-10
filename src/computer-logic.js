import {
  randomNumber,
  randomCoords,
  attackSquare,
  checkAllSunk,
} from "./app.js";
import {
  computerBoardDisplay,
  playerBoardDisplay,
  placeShips,
  checkShipOverlap,
  getSquareFromDOM,
  markSquareAsMissed,
  markSquareAsHit,
  markShipAsSunk,
  turnShipTokenRed,
  setAdjacentSquares,
  addShipPlacedClass,
  computerShips,
  showShipsPlaced,
  computerMessage,
  displayHitMessage,
  displayMissMessage,
  displaySunkMessage,
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
  showShipsPlaced(computerShips);
}

export function attackPlayer() {
  let boardSquare = getSquareFromDOM(playerBoardDisplay, randomCoords());
  while (boardSquare.classList.contains("attacked")) {
    boardSquare = getSquareFromDOM(playerBoardDisplay, randomCoords());
  }
  const squareToAttack = player.board.getSquare(
    boardSquare.getAttribute("data-coord")
  );
  attackSquare(player, squareToAttack.coords);
  if (squareToAttack.isOccupied) {
    markSquareAsHit(boardSquare);
    if (squareToAttack.isOccupied.isSunk()) {
      markShipAsSunk(
        playerBoardDisplay,
        squareToAttack.isOccupied.placedCoords
      );
      turnShipTokenRed(squareToAttack.isOccupied, placeShips);
      if (checkAllSunk(player.ships)) {
        declareWinner(computer);
        return;
      }
      displaySunkMessage(computerMessage, squareToAttack.isOccupied);
    } else {
      displayHitMessage(computerMessage);
    }
  } else {
    markSquareAsMissed(boardSquare);
    displayMissMessage(computerMessage);
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
