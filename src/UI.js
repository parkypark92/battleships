import { player, computer } from "./game.js";
import { startGame } from "./game.js";
import {
  attackSquare,
  computerTurn,
  checkAllSunk,
  declareWinner,
} from "./app.js";

//DOM
const startButton = document.querySelector(".start-game");
export const playerBoardDisplay = document.getElementById("gameboard-one");
export const computerBoardDisplay = document.getElementById("gameboard-two");
const placeCarrier = document.getElementById("place-carrier");
placeCarrier.classList.add("ship-selected");
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
export const winnerDisplay = document.querySelector(".winner");

export function getSquareFromDOM(board, coords) {
  return board.querySelector(`[data-coord="${coords}"]`);
}

//BUTTON EVENTS
startButton.addEventListener("click", () => {
  removeShipSelection();
  makeUnclickable(
    placeCarrier,
    placeBattleship,
    placeDestroyer,
    placeSubmarine,
    placePatrolBoat
  );
  hideButtons(startButton, directionButton);
  startGame();
});
placeCarrier.addEventListener("click", selectShip);
placeBattleship.addEventListener("click", selectShip);
placeDestroyer.addEventListener("click", selectShip);
placeSubmarine.addEventListener("click", selectShip);
placePatrolBoat.addEventListener("click", selectShip);
directionButton.addEventListener("click", changeShipDirection);

//FUNCTIONS FOR BUTTON EVENTS
function selectShip() {
  removeShipSelection();
  this.classList.add("ship-selected");
  selectedShip = this.getAttribute("data-ship");
  currentShip = document.querySelector(`[data-ship="${selectedShip}"]`);
}

function removeShipSelection() {
  for (let ship of placeShips) {
    ship.classList.remove("ship-selected");
  }
}

function changeShipDirection() {
  for (let ship of player.ships) {
    ship.changeDirection();
  }
  if (directionButton.textContent === "Vertical") {
    directionButton.textContent = "Horizontal";
  } else {
    directionButton.textContent = "Vertical";
  }
}

function hideButtons(...args) {
  for (let button of args) {
    button.classList.add("hidden");
  }
}

function addPlayerBoardEvents() {
  for (let square of player.board.squares) {
    let currentSquare = playerBoardDisplay.querySelector(
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
      let squaresToOccupy = player.board.addShip(player[selectedShip], square);
      player.board.occupySquares(player[selectedShip], squaresToOccupy);
      addShipPlacedClass(squaresToOccupy, playerBoardDisplay);
      createEvent(displayPlacedShip, square, currentSquare);
      currentShip.classList.add("placed");
      checkGameReady();
    });
  }
}

//FUNCTIONS FOR PLAYER BOARD EVENTS
function createEvent(callback, square, currentSquare) {
  let squaresToOccupy = player.board.checkShipPlacement(
    player[selectedShip],
    square
  );
  if (squaresToOccupy === false) {
    displayIllegalPlacement(currentSquare);
  } else {
    callback(squaresToOccupy, playerBoardDisplay, player, player[selectedShip]);
  }
}

function displayOccupiedSquares(squares, board) {
  for (let square of squares) {
    let currentSquare = board.querySelector(`[data-coord="${square.coords}"]`);
    if (checkShipOverlap(squares, board)) {
      displayIllegalPlacement(currentSquare);
      return;
    }
    currentSquare.classList.add("placement-preview");
  }
}

function unOccupySquares(squares, board) {
  for (let square of squares) {
    let currentSquare = board.querySelector(`[data-coord="${square.coords}"]`);
    if (checkShipOverlap(squares, board)) {
      displayIllegalPlacement(currentSquare);
      return;
    }
    currentSquare.classList.remove("placement-preview");
  }
}

function displayIllegalPlacement(square) {
  square.classList.toggle("illegal-placement");
}

export function addShipPlacedClass(squares, board) {
  for (let square of squares) {
    let currentSquare = board.querySelector(`[data-coord="${square.coords}"]`);
    currentSquare.classList.add("has-ship");
  }
}

export function displayPlacedShip(squares, board, currentPlayer, ship) {
  for (let square of squares) {
    let currentSquare = board.querySelector(`[data-coord="${square.coords}"]`);
    currentSquare.classList.remove("placement-preview");
    currentSquare.classList.add("placed-ship");
  }
  setAdjacentSquares(squares, board, currentPlayer, ship);
}

export function setAdjacentSquares(
  squaresToOccupy,
  board,
  currentPlayer,
  ship
) {
  const adjacentSquares = currentPlayer.board.getAdjacentSquares(
    ship,
    squaresToOccupy
  );
  for (let square of adjacentSquares) {
    let currentSquare = board.querySelector(`[data-coord="${square.coords}"]`);
    currentSquare.classList.add("adjacent-square");
  }
}

export function checkShipOverlap(squares, board) {
  if (squares === false) return true;
  const checkSquares = [];
  for (let square of squares) {
    let currentSquare = board.querySelector(`[data-coord="${square.coords}"]`);
    checkSquares.push(currentSquare);
  }
  return checkSquares.some(
    (square) =>
      square.classList.contains("has-ship") ||
      square.classList.contains("adjacent-square")
  );
}

//EVENTS FOR COMPUTER BOARD
function addComputerBoardEvents() {
  for (let square of computer.board.squares) {
    let currentSquare = computerBoardDisplay.querySelector(
      `[data-coord="${square.coords}"]`
    );
    currentSquare.addEventListener("click", () => {
      if (
        currentSquare.classList.contains("attacked") ||
        currentSquare.classList.contains("hit")
      )
        return;
      attackSquare(computer, square.coords);
      if (square.isOccupied) {
        markSquareAsHit(currentSquare);
        if (square.isOccupied.isSunk()) {
          markShipAsSunk(computerBoardDisplay, square.isOccupied.placedCoords);
        }
      } else {
        markSquareAsAttacked(currentSquare);
      }

      if (checkAllSunk(computer.ships)) {
        declareWinner(player);
        return;
      }
      computerTurn();
    });
  }
}

export function makeClickable(...elements) {
  for (let element of elements) {
    element.classList.remove("unclickable");
  }
}

export function makeUnclickable(...elements) {
  for (let element of elements) {
    element.classList.add("unclickable");
  }
}

function checkGameReady() {
  if (placeShips.every((ship) => ship.classList.contains("placed"))) {
    startButton.classList.remove("unclickable");
  }
}

//OTHER FUNCTIONS
export function markSquareAsAttacked(square) {
  square.classList.add("attacked");
}

export function markSquareAsHit(square) {
  square.classList.add("hit");
}

export function markShipAsSunk(board, shipsCoords) {
  for (let coords of shipsCoords) {
    let currentSquare = board.querySelector(`[data-coord="${coords}"]`);
    currentSquare.classList.add("sunk");
  }
}

//DISPLAY BOARDS
function displayBoard(board, boardTable) {
  for (let square of board.squares) {
    const tableSquare = document.createElement("td");
    tableSquare.setAttribute("data-coord", square.coords);
    const currentRow = boardTable.querySelector(`.row${square.row}`);
    currentRow.appendChild(tableSquare);
    if (board === player.board) {
      tableSquare.classList.add("player-square");
    }
  }
}

function initializeGame() {
  displayBoard(player.board, playerBoardDisplay);
  addPlayerBoardEvents();
  displayBoard(computer.board, computerBoardDisplay);
  addComputerBoardEvents();
  // makeUnclickable(startButton);
  makeUnclickable(computerBoardDisplay);
}

initializeGame();
