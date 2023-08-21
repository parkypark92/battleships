import { Player } from "./players.js";
import {
  playerMessage,
  computerMessage,
  clearMessages,
  typewriter,
} from "./UI.js";
import { placeComputerShips, hardCodeAttack } from "./computer-logic.js";
import { computerTurn, decideFirstTurn, playerTurn } from "./app.js";

export let player = Player("Player");
export let computer = Player("Computer");
export let winner = false;

export function startGame() {
  placeComputerShips();
  // hardCodeAttack("0, 3");
  // hardCodeAttack("0, 4");
  // hardCodeAttack("0, 5");
  // hardCodeAttack("0, 6");
  // hardCodeAttack("0, 7");
  // hardCodeAttack("2, 3");
  // hardCodeAttack("2, 4");
  // hardCodeAttack("2, 5");
  // hardCodeAttack("2, 6");
  // hardCodeAttack("4, 3");
  // hardCodeAttack("4, 4");
  // hardCodeAttack("4, 5");
  // hardCodeAttack("6, 3");
  // hardCodeAttack("6, 4");
  // hardCodeAttack("6, 5");
  // hardCodeAttack("8, 3");
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
