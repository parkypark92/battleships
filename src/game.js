import {
  playerBoard,
  playerCarrier,
  playerBattleship,
  playerDestroyer,
  playerSubmarine,
  playerPatrolBoat,
  computerBoard,
  computerCarrier,
  computerBattleship,
  computerDestroyer,
  computerSubmarine,
  computerPatrolBoat,
  placeShips,
} from "./app.js";

let winner = false;

export function startGame() {
  placeShips();
  playerBoard.recieveAttack("6, 6");
  playerBoard.recieveAttack("6, 6");
  playerBoard.recieveAttack("7, 6");
  //   while (winner === false) {}
}
