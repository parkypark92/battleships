import { player, computer } from "./game.js";

const playerBoardDisplay = document.getElementById("gameboard-one");
const computerBoardDisplay = document.getElementById("gameboard-two");
const placeCarrier = document.getElementById("place-carrier");
const placeBattleship = document.getElementById("place-battleship");
const placeDestroyer = document.getElementById("place-destroyer");
const placeSubmarine = document.getElementById("place-submarine");
const placePatrolBoat = document.getElementById("place-patrol-boat");
const placeShips = [
  placeCarrier,
  placeBattleship,
  placeDestroyer,
  placeSubmarine,
  placePatrolBoat,
];
let selectedShip = "";

placeCarrier.classList.add("ship-selected");
placeCarrier.addEventListener("click", selectShip);
placeBattleship.addEventListener("click", selectShip);
placeDestroyer.addEventListener("click", selectShip);
placeSubmarine.addEventListener("click", selectShip);
placePatrolBoat.addEventListener("click", selectShip);

function selectShip() {
  for (let ship of placeShips) {
    ship.classList.remove("ship-selected");
  }
  this.classList.add("ship-selected");
  selectShip = this.getAttribute("data-ship");
}

// for (let square of player.board.squares) {
//   square.addEventListener("mouseover", player.board.addShip());
// }

function displayBoard(board, boardTable) {
  for (let square of board.squares) {
    const tableSquare = document.createElement("td");
    tableSquare.setAttribute("data-coord", square.coords);
    const currentRow = boardTable.querySelector(`.row${square.row}`);
    currentRow.appendChild(tableSquare);
  }
}

displayBoard(player.board, playerBoardDisplay);
displayBoard(computer.board, computerBoardDisplay);
