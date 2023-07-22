import { randomNumber, randomCoords, attackSquare } from "./app.js";
import {
  displayPlacedShip,
  computerBoardDisplay,
  playerBoardDisplay,
  checkShipOverlap,
  getSquareFromDOM,
  markAttackedSquare,
  makeUnclickable,
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
    displayPlacedShip(squaresToOccupy, computerBoardDisplay, computer, ship);
  }
}

export function attackPlayer() {
  let squareToAttack = getSquareFromDOM(playerBoardDisplay, randomCoords());
  console.log(squareToAttack);
  attackSquare(player, squareToAttack.getAttribute("data-coord"));
  markAttackedSquare(squareToAttack);
}

function setRandomShipDirection(ship) {
  const number = randomNumber();
  if (number >= 0 && number <= 4) {
    ship.direction = "vertical";
  } else if (number >= 5 && number <= 9) {
    ship.direction = "horizontal";
  }
}
