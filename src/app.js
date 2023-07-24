import { computerBoardDisplay, makeClickable, makeUnclickable } from "./UI";
import { attackPlayer } from "./computer-logic.js";

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
  playerTurn();
}

export function attackSquare(targetPlayer, coords) {
  targetPlayer.board.recieveAttack(coords);
}
