import {
  computerBoardDisplay,
  makeClickable,
  makeUnclickable,
  playerMessage,
  computerMessage,
  typewriter,
  clearMessages,
  playAgain,
} from "./UI.js";
import { attackPlayer, getDOMSquares } from "./computer-logic.js";
import { computer, player, winner } from "./game.js";

export function randomNumber(num) {
  return Math.floor(Math.random() * num);
}

export function randomCoords() {
  return `${randomNumber(10)}, ${randomNumber(10)}`;
}

export function decideFirstTurn() {
  const number = randomNumber(10);
  if (number >= 0 && number <= 4) {
    return "player";
  } else {
    return "computer";
  }
}

export function playerTurn(firstTurn) {
  if (computer.board.winner === true || player.board.winner === true) return;
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
  setTimeout(playerTurn, 5000);
}

export function attackSquare(targetPlayer, coords) {
  targetPlayer.board.recieveAttack(coords);
}

export function checkAllSunk(ships) {
  return ships.every((ship) => ship.isSunk() === true);
}

export function flagSquaresAdjacentToSunkShip(squares) {
  const boardSquares = getDOMSquares(squares);
  for (let square of boardSquares) {
    square.classList.add("adjacent-to-sunk-ship");
  }
}

export function declareWinner(winningPlayer) {
  clearMessages();
  if (winningPlayer === player) {
    playerMessage.textContent = `${winningPlayer.name} Wins!`;
  } else if (winningPlayer === computer) {
    computerMessage.textContent = `${winningPlayer.name} Wins!`;
  }
  winningPlayer.board.makeWinner();
  makeUnclickable(computerBoardDisplay);
  playAgain.classList.remove("hidden");
}
