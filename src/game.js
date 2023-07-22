import { Player } from "./players.js";
import { placeComputerShips } from "./computer-logic.js";
import { makeClickable, makeUnclickable, computerBoardDisplay } from "./UI.js";

export let player = Player();
export let computer = Player();

let winner = false;

export function startGame() {
  makeClickable(computerBoardDisplay);
  placeComputerShips();
}
