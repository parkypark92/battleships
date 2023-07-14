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
const directionButton = document.querySelector(".ship-direction");
let selectedShip = "carrier";
let currentShip = document.querySelector(`[data-ship="${selectedShip}"]`);

placeCarrier.classList.add("ship-selected");
placeCarrier.addEventListener("click", selectShip);
placeBattleship.addEventListener("click", selectShip);
placeDestroyer.addEventListener("click", selectShip);
placeSubmarine.addEventListener("click", selectShip);
placePatrolBoat.addEventListener("click", selectShip);
directionButton.addEventListener("click", () => {
  for (let ship of player.ships) {
    ship.changeDirection();
  }
  if (directionButton.textContent === "Vertical") {
    directionButton.textContent = "Horizontal";
  } else {
    directionButton.textContent = "Vertical";
  }
});

function selectShip() {
  for (let ship of placeShips) {
    ship.classList.remove("ship-selected");
  }
  this.classList.add("ship-selected");
  selectedShip = this.getAttribute("data-ship");
  currentShip = document.querySelector(`[data-ship="${selectedShip}"]`);
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
    currentSquare.addEventListener("mouseover", () => {
      if (currentShip.classList.contains("placed")) return;
      createEvent(displayOccupiedSquares, square, currentSquare);
    });
    currentSquare.addEventListener("mouseout", () => {
      if (currentShip.classList.contains("placed")) return;
      createEvent(unOccupySquares, square, currentSquare);
    });
    currentSquare.addEventListener("click", () => {
      if (currentShip.classList.contains("placed")) return;
      if (currentSquare.classList.contains("illegal-placement")) return;
      if (currentSquare.classList.contains("placed-ship")) return;
      player.board.addShip(player[selectedShip], square);
      createEvent(displayPlacedShip, square, currentSquare);
      currentShip.classList.add("placed");
    });
  }
}

function createEvent(callback, square, currentSquare) {
  let squaresToOccupy = player.board.checkShipPlacement(
    player[selectedShip],
    square
  );
  if (squaresToOccupy === false) {
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
    if (checkShipOverlap(squares)) {
      displayIllegalPlacement(currentSquare);
      return;
    }
    currentSquare.classList.add("placement-preview");
  }
}

function unOccupySquares(squares) {
  for (let square of squares) {
    let currentSquare = document.querySelector(
      `[data-coord="${square.coords}"]`
    );
    if (checkShipOverlap(squares)) {
      displayIllegalPlacement(currentSquare);
      return;
    }
    currentSquare.classList.remove("placement-preview");
  }
}

function displayIllegalPlacement(square) {
  square.classList.toggle("illegal-placement");
}

function displayPlacedShip(squares) {
  for (let square of squares) {
    let currentSquare = document.querySelector(
      `[data-coord="${square.coords}"]`
    );
    currentSquare.classList.add("placed-ship");
  }
}

function checkShipOverlap(squares) {
  const checkSquares = [];
  for (let square of squares) {
    let currentSquare = document.querySelector(
      `[data-coord="${square.coords}"]`
    );
    checkSquares.push(currentSquare);
  }
  return checkSquares.some((square) =>
    square.classList.contains("placed-ship")
  );
}

displayBoard(player.board, playerBoardDisplay);
addPlayerBoardEvents();
displayBoard(computer.board, computerBoardDisplay);
