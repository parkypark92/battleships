import { Ship } from "./ships.js";
import { initializeGameboard } from "./gameboard.js";

export function Player() {
  const board = initializeGameboard();
  const carrier = Ship(5);
  const battleship = Ship(4);
  const destroyer = Ship(3);
  const submarine = Ship(3);
  const patrolBoat = Ship(2);
  return { board, carrier, battleship, destroyer, submarine, patrolBoat };
}
