import { Player } from "./players.js";
import { placeComputerShips } from "./computer-logic.js";
import { decideFirstTurn, playerTurn } from "./app.js";

export let player = Player();
export let computer = Player();

let winner = false;

export function startGame() {
  placeComputerShips();
  playerTurn();
  // if (decideFirstTurn === "player") {
  //   playerTurn();
  // }
  // makeClickable(computerBoardDisplay);
}
