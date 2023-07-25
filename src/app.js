import {
  computerBoardDisplay,
  makeClickable,
  makeUnclickable,
  winnerDisplay,
} from "./UI";
import { attackPlayer } from "./computer-logic.js";
import { computer, player } from "./game";

export function randomNumber() {
  return Math.floor(Math.random() * 10);
}

export function randomCoords() {
  return `${randomNumber()}, ${randomNumber()}`;
}

export function decideFirstTurn() {
  const number = randomNumber();
  if (number >= 0 && number <= 4) {
    return "player";
  } else {
    return "computer";
  }
}

export function playerTurn() {
  makeClickable(computerBoardDisplay);
}

export function computerTurn() {
  makeUnclickable(computerBoardDisplay);
  attackPlayer();
  if (checkAllSunk(player.ships)) {
    declareWinner(computer);
    return;
  }
  playerTurn();
}

export function attackSquare(targetPlayer, coords) {
  targetPlayer.board.recieveAttack(coords);
}

export function checkAllSunk(ships) {
  console.log(ships.every((ship) => ship.isSunk() === true));
  return ships.every((ship) => ship.isSunk() === true);
}

export function declareWinner(winner) {
  winnerDisplay.textContent = winner.name;
  makeUnclickable(computerBoardDisplay);
}
