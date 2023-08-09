import { Player } from "./players.js";
import {
  playerMessage,
  computerMessage,
  clearMessages,
  typewriter,
} from "./UI.js";
import { placeComputerShips } from "./computer-logic.js";
import { computerTurn, decideFirstTurn, playerTurn } from "./app.js";

export let player = Player("Player");
export let computer = Player("Computer");
export let winner = false;

export function startGame() {
  placeComputerShips();
  const firstTurn = decideFirstTurn();
  if (firstTurn === "player") {
    clearMessages();
    typewriter(playerMessage, "Player goes first...");
    playerTurn(firstTurn);
  } else {
    clearMessages();
    typewriter(computerMessage, "Computer goes first...");
    computerTurn(firstTurn);
  }
}
