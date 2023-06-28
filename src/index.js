import "./style.css";
import { initializeGameboard } from "../src/gameboard.js";
import { Ship } from "../src/ships.js";

const board = initializeGameboard();
console.log(board);
board.squares[0].isOccupied = Ship(3);
console.log(board.hasShips());
const mySquare = board.getSquare("0, 0");
console.log(mySquare);
