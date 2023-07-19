import { Player } from "./players.js";
import {
  displayPlacedShip,
  computerBoardDisplay,
  checkShipOverlap,
} from "./UI.js";

export let player = Player();
export let computer = Player();

let winner = false;

export function startGame() {
  console.log(randomCoords());
  placeComputerShips();
}

function placeComputerShips() {
  for (let ship of computer.ships) {
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
    displayPlacedShip(
      squaresToOccupy,
      computerBoardDisplay,
      computer,
      ship.name
    );
  }
}

function randomNumber() {
  return Math.floor(Math.random() * 10);
}

function randomCoords() {
  return `${randomNumber()}, ${randomNumber()}`;
}
