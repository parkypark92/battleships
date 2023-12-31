import { player, computer } from "./game.js";
import { startGame } from "./game.js";
import {
  attackSquare,
  computerTurn,
  checkAllSunk,
  declareWinner,
} from "./app.js";

//DOM ASSIGNMENTS
export const playerBoardDisplay = document.getElementById("gameboard-one");
export const computerBoardDisplay = document.getElementById("gameboard-two");
export const playerMessage = document.querySelector(".player-messages");
export const computerMessage = document.querySelector(".computer-messages");
export const computerShips = document.querySelectorAll(
  ".computer-ships button"
);
export const playAgain = document.getElementById("play-again-button");
const shipType = document.querySelector(".ship-type");
const placeCarrier = document.getElementById("place-carrier");
const placeBattleship = document.getElementById("place-battleship");
const placeDestroyer = document.getElementById("place-destroyer");
const placeSubmarine = document.getElementById("place-submarine");
const placePatrolBoat = document.getElementById("place-patrol-boat");
const directionButton = document.querySelector(".ship-direction-button");

//SETUP VARIABLES / CLASSES
placeCarrier.classList.add("ship-selected");
playAgain.classList.add("hidden");
let selectedShip = "carrier";
let currentShip = document.querySelector(`[data-ship="${selectedShip}"]`);
export const placeShips = [
  placeCarrier,
  placeBattleship,
  placeDestroyer,
  placeSubmarine,
  placePatrolBoat,
];

//BUTTON EVENTS
directionButton.addEventListener("click", changeShipDirection);
playAgain.addEventListener("click", () => window.location.reload());

//FUNCTIONS FOR BUTTON EVENTS
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

function addShowHoverClass(boardSquares, boardDisplay) {
  for (let square of boardSquares) {
    let currentSquare = boardDisplay.querySelector(
      `[data-coord="${square.coords}"]`
    );
    currentSquare.classList.add("show-hover");
  }
}

//PLAYER BOARD EVENTS
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
      prepareNextShip();
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

function prepareNextShip() {
  removeShipSelection();
  let currentIndex = placeShips.indexOf(currentShip);
  if (currentIndex < placeShips.length - 1) {
    currentIndex++;
  } else {
    return;
  }
  currentShip = placeShips[currentIndex];
  selectedShip = currentShip.getAttribute("data-ship");
  currentShip.classList.add("ship-selected");
  shipType.textContent = `Type: ${currentShip.textContent}`;
}

function checkGameReady() {
  if (placeShips.every((ship) => ship.classList.contains("placed"))) {
    removeShipSelection();
    makeUnclickable(
      placeCarrier,
      placeBattleship,
      placeDestroyer,
      placeSubmarine,
      placePatrolBoat
    );
    hideButtons(directionButton);
    addShowHoverClass(computer.board.squares, computerBoardDisplay);
    startGame();
  }
}

//COMPUTER BOARD EVENTS
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
          turnShipTokenRed(square.isOccupied, computerShips);
          if (checkAllSunk(computer.ships)) {
            declareWinner(player);
            return;
          }
          displaySunkMessage(playerMessage, square.isOccupied);
        } else {
          displayHitMessage(playerMessage);
        }
      } else {
        markSquareAsMissed(currentSquare);
        displayMissMessage(playerMessage);
      }
      currentSquare.classList.remove("show-hover");
      makeUnclickable(computerBoardDisplay);
      if (computer.board.winner === true || player.board.winner === true)
        return;
      setTimeout(computerTurn, 2500);
    });
  }
}

//OTHER FUNCTIONS
export function getSquareFromDOM(board, coords) {
  return board.querySelector(`[data-coord="${coords}"]`);
}

export function markSquareAsMissed(square) {
  const miss = document.createElement("div");
  square.classList.add("attacked");
  miss.classList.add("miss");
  square.appendChild(miss);
}

export function markSquareAsHit(square) {
  const hit = document.createElement("div");
  square.classList.add("attacked");
  square.classList.add("square-hit");
  hit.classList.add("hit");
  square.appendChild(hit);
}

export function markShipAsSunk(board, shipsCoords) {
  for (let coords of shipsCoords) {
    let currentSquare = board.querySelector(`[data-coord="${coords}"]`);
    currentSquare.classList.add("sunk");
  }
}

export function turnShipTokenRed(sunkenShip, playersShips) {
  let shipToken;
  for (let ship of playersShips) {
    if (ship.getAttribute("data-ship") === sunkenShip.id) {
      shipToken = ship;
    }
  }
  shipToken.classList.add("token-red");
}

export function clearMessages() {
  playerMessage.textContent = "";
  computerMessage.textContent = "";
}

export function displayMissMessage(messageBox) {
  clearMessages();
  typewriter(messageBox, `It's a miss...`);
}

export function displayHitMessage(messageBox) {
  clearMessages();
  typewriter(messageBox, `It's a hit!`);
}

export function displaySunkMessage(messageBox, ship) {
  clearMessages();
  if (messageBox === playerMessage) {
    typewriter(messageBox, `You sunk Computers ${ship.name}!`);
  } else {
    typewriter(messageBox, `Computer sunk your ${ship.name}!`);
  }
}

export function typewriter(messageBox, message, i = 0) {
  if (i < message.length) {
    messageBox.textContent += message.charAt(i);
    i++;
    setTimeout(() => typewriter(messageBox, message, i), 50);
  }
}

function hideButtons(...args) {
  for (let button of args) {
    button.classList.add("hidden");
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

export function showShipsPlaced(ships) {
  for (let ship of ships) {
    ship.classList.add("placed");
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
  makeUnclickable(computerBoardDisplay);
}

initializeGame();
