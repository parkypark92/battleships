import {
  computerBoardDisplay,
  makeClickable,
  makeUnclickable,
  playerMessage,
  computerMessage,
  typewriter,
  clearMessages,
} from "./UI";
import { attackPlayer } from "./computer-logic.js";
import { computer, player, winner } from "./game";

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

export function playerTurn(firstTurn) {
  if (firstTurn !== "player") {
    typewriter(playerMessage, "Players turn.");
  }
  setTimeout(() => makeClickable(computerBoardDisplay), 1500);
}

export function computerTurn(firstTurn) {
  if (firstTurn !== "computer") {
    typewriter(computerMessage, `Computers turn.`);
  }
  setTimeout(attackPlayer, 2500);
  if (winner === true) return;
  setTimeout(playerTurn, 5000);
}

export function attackSquare(targetPlayer, coords) {
  targetPlayer.board.recieveAttack(coords);
}

export function checkAllSunk(ships) {
  return ships.every((ship) => ship.isSunk() === true);
}

export function declareWinner(winner) {
  clearMessages();
  if (winner === player) {
    playerMessage.textContent = `${winner.name} Wins!`;
  } else if (winner === computer) {
    computerMessage.textContent = `${computer.name} Wins!`;
  }
  makeUnclickable(computerBoardDisplay);
  winner = true;
}
