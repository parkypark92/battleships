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
} from "./app.js";

const playerBoardDisplay = document.getElementById("gameboard-one");
const computerBoardDisplay = document.getElementById("gameboard-two");

function displayBoard(board, boardTable) {
  for (let square of board.squares) {
    const tableSquare = document.createElement("td");
    tableSquare.setAttribute("data-coord", square.coords);
    const currentRow = boardTable.querySelector(`.row${square.row}`);
    currentRow.appendChild(tableSquare);
  }
}

displayBoard(playerBoard, playerBoardDisplay);
displayBoard(computerBoard, computerBoardDisplay);
