import { initializeGameboard } from "../src/gameboard.js";
import { Ship } from "../src/ships.js";

export const playerBoard = initializeGameboard();
export const computerBoard = initializeGameboard();
export const playerCarrier = Ship(5);
export const playerBattleship = Ship(4);
export const playerDestroyer = Ship(3);
export const playerSubmarine = Ship(3);
export const playerPatrolBoat = Ship(2);
export const computerCarrier = Ship(5);
export const computerBattleship = Ship(4);
export const computerDestroyer = Ship(3);
export const computerSubmarine = Ship(3);
export const computerPatrolBoat = Ship(2);
