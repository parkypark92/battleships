import { initializeGameboard } from "../src/gameboard.js";
import { Ship } from "../src/ships.js";

export const board = initializeGameboard();
export const battleship = Ship(5);
board.addShip(battleship, "5, 5");
