import { Ship } from "./ships.js";
import { initializeGameboard } from "./gameboard.js";

export function Player(name) {
  const board = initializeGameboard();
  const carrier = Ship("Carrier", "carrier", 5);
  const battleship = Ship("Battleship", "battleship", 4);
  const destroyer = Ship("Destroyer", "destroyer", 3);
  const submarine = Ship("Submarine", "submarine", 3);
  const patrolBoat = Ship("Patrol Boat", "patrolBoat", 2);
  const ships = [carrier, battleship, destroyer, submarine, patrolBoat];
  return {
    name,
    board,
    carrier,
    battleship,
    destroyer,
    submarine,
    patrolBoat,
    ships,
  };
}
