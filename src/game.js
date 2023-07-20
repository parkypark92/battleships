import { Player } from "./players.js";
import { placeComputerShips } from "./computer-logic.js";

export let player = Player();
export let computer = Player();

let winner = false;

export function startGame() {
  placeComputerShips();
}
