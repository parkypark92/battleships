import { Player } from "./players.js";
import { placeComputerShips } from "./computer-logic.js";
import { computerTurn, decideFirstTurn, playerTurn } from "./app.js";

export let player = Player();
export let computer = Player();

let winner = false;

export function startGame() {
  placeComputerShips();
  // playerTurn();
  const firstTurn = decideFirstTurn();
  if (firstTurn === "player") {
    playerTurn();
  } else {
    computerTurn();
  }
}
