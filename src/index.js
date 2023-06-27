import "./style.css";
import { initializeGameboard } from "../src/gameboard.js";
import { Ship } from "../src/ships.js";

const testArea = initializeGameboard();
console.log(testArea);
testArea.board[0].isOccupied = true;
console.log(testArea.hasShips());
