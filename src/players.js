import { Ship } from "./ships.js";
import { initializeGameboard } from "./gameboard.js";

export function Player(name) {
  const board = initializeGameboard();
  const carrier = Ship("carrier", 5);
  const battleship = Ship("battleship", 4);
  const destroyer = Ship("destroyer", 3);
  const submarine = Ship("submarine", 3);
  const patrolBoat = Ship("patrol-boat", 2);
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
