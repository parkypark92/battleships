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
let selectedShip = "carrier";

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
  selectedShip = this.getAttribute("data-ship");
  console.log(typeof selectedShip);
}

function displayBoard(board, boardTable) {
  for (let square of board.squares) {
    const tableSquare = document.createElement("td");
    tableSquare.setAttribute("data-coord", square.coords);
    const currentRow = boardTable.querySelector(`.row${square.row}`);
    currentRow.appendChild(tableSquare);
  }
}

function addPlayerBoardEvents() {
  for (let square of player.board.squares) {
    let currentSquare = document.querySelector(
      `[data-coord="${square.coords}"]`
    );
    currentSquare.addEventListener("mouseover", () =>
      createHoverEvent(displayOccupiedSquares, square, currentSquare, true)
    );
    currentSquare.addEventListener("mouseout", () =>
      createHoverEvent(unOccupySquares, square, currentSquare, false)
    );
  }
}

function createHoverEvent(callback, square, currentSquare, trueOrFalse) {
  let squaresToOccupy = player.board.addShip(
    player[selectedShip],
    square.coords,
    trueOrFalse
  );
  if (squaresToOccupy === "illegal placement") {
    displayIllegalPlacement(currentSquare);
  } else {
    callback(squaresToOccupy);
  }
}

function displayOccupiedSquares(squares) {
  for (let square of squares) {
    let currentSquare = document.querySelector(
      `[data-coord="${square.coords}"]`
    );
    currentSquare.classList.add("occupied");
  }
}

function unOccupySquares(squares) {
  for (let square of squares) {
    let currentSquare = document.querySelector(
      `[data-coord="${square.coords}"]`
    );
    currentSquare.classList.remove("occupied");
  }
}

function displayIllegalPlacement(square) {
  square.classList.toggle("illegal-placement");
}

displayBoard(player.board, playerBoardDisplay);
addPlayerBoardEvents();
displayBoard(computer.board, computerBoardDisplay);
