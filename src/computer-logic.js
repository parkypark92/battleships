import {
  randomNumber,
  randomCoords,
  attackSquare,
  checkAllSunk,
  flagSquaresAdjacentToSunkShip,
  declareWinner,
} from "./app.js";
import {
  computerBoardDisplay,
  playerBoardDisplay,
  placeShips,
  checkShipOverlap,
  getSquareFromDOM,
  markSquareAsMissed,
  markSquareAsHit,
  markShipAsSunk,
  turnShipTokenRed,
  setAdjacentSquares,
  addShipPlacedClass,
  computerShips,
  showShipsPlaced,
  computerMessage,
  displayHitMessage,
  displayMissMessage,
  displaySunkMessage,
} from "./UI.js";
import { computer, player } from "./game.js";

let boardSquare;
let squareToAttack;

export function placeComputerShips() {
  for (let ship of computer.ships) {
    setRandomShipDirection(ship);
    let squaresToOccupy = computer.board.addShip(
      ship,
      computer.board.getSquare(randomCoords())
    );
    let overlap = checkShipOverlap(squaresToOccupy, computerBoardDisplay);
    while (squaresToOccupy === false || overlap === true) {
      squaresToOccupy = computer.board.addShip(
        ship,
        computer.board.getSquare(randomCoords())
      );
      overlap = checkShipOverlap(squaresToOccupy, computerBoardDisplay);
    }
    computer.board.occupySquares(ship, squaresToOccupy);
    addShipPlacedClass(squaresToOccupy, computerBoardDisplay);
    setAdjacentSquares(squaresToOccupy, computerBoardDisplay, computer, ship);
  }
  showShipsPlaced(computerShips);
}

export function attackPlayer() {
  if (
    player.board.lastSquareHit === "" ||
    player.board.lastSquareHit.isOccupied.isSunk()
  ) {
    boardSquare = getSquareFromDOM(playerBoardDisplay, randomCoords());
    while (
      boardSquare.classList.contains("attacked") ||
      boardSquare.classList.contains("adjacent-to-sunk-ship")
    ) {
      boardSquare = getSquareFromDOM(playerBoardDisplay, randomCoords());
    }
    squareToAttack = player.board.getSquare(
      boardSquare.getAttribute("data-coord")
    );
  } else {
    aimForAdjacentSquare(player.board.lastSquareHit);
  }
  attackSquare(player, squareToAttack.coords);
  if (squareToAttack.isOccupied) {
    markSquareAsHit(boardSquare);
    player.board.lastSquareHit = squareToAttack;
    if (squareToAttack.isOccupied.isSunk()) {
      markShipAsSunk(
        playerBoardDisplay,
        squareToAttack.isOccupied.placedCoords
      );
      turnShipTokenRed(squareToAttack.isOccupied, placeShips);
      flagSquaresAdjacentToSunkShip(squareToAttack.isOccupied.adjacentSquares);
      if (checkAllSunk(player.ships)) {
        declareWinner(computer);
        return;
      }
      displaySunkMessage(computerMessage, squareToAttack.isOccupied);
    } else {
      displayHitMessage(computerMessage);
    }
  } else {
    markSquareAsMissed(boardSquare);
    displayMissMessage(computerMessage);
  }
}

function aimForAdjacentSquare(lastHit) {
  const adjacent = getLeftRightUpDownAdjacentSquares(lastHit);
  const boardSquares = getDOMSquares(adjacent);
  let adjacentHit = boardSquares.filter((square) =>
    square.classList.contains("square-hit")
  );
  if (adjacentHit.length == 2) {
    adjacentHit = adjacentHit.filter(
      (square) => !square.classList.contains("checked")
    );
  }
  if (adjacentHit.length == 1) {
    const adjSquare = calculateNextMove(lastHit, adjacentHit[0]);
    if (boardSquare === null || boardSquare.classList.contains("attacked")) {
      lastHit = adjSquare;
      aimForAdjacentSquare(lastHit);
    }
  } else {
    const freeSquares = boardSquares.filter(
      (square) =>
        !square.classList.contains("attacked") &&
        !square.classList.contains("adjacent-to-sunk-ship")
    );
    boardSquare = freeSquares[randomNumber(freeSquares.length - 1)];
  }
  boardSquare.classList.add("checked");
  squareToAttack = player.board.getSquare(
    boardSquare.getAttribute("data-coord")
  );
}

function getLeftRightUpDownAdjacentSquares(lastHit) {
  let adjacentSquares = [];
  let xCoord = lastHit.col;
  let yCoord = lastHit.row;
  adjacentSquares.push(player.board.getSquare(`${xCoord}, ${yCoord - 1}`));
  adjacentSquares.push(player.board.getSquare(`${xCoord + 1}, ${yCoord}`));
  adjacentSquares.push(player.board.getSquare(`${xCoord}, ${yCoord + 1}`));
  adjacentSquares.push(player.board.getSquare(`${xCoord - 1}, ${yCoord}`));
  const filtered = adjacentSquares.filter((square) => square !== undefined);
  return filtered;
}

export function getDOMSquares(arrayOfSquares) {
  let boardSquares = [];
  for (let square of arrayOfSquares) {
    boardSquares.push(getSquareFromDOM(playerBoardDisplay, square.coords));
  }
  return boardSquares;
}

function calculateNextMove(lastHit, adjacentHit) {
  const adjSquare = player.board.getSquare(
    adjacentHit.getAttribute("data-coord")
  );
  if (lastHit.col < adjSquare.col) {
    boardSquare = getSquareFromDOM(
      playerBoardDisplay,
      `${lastHit.col - 1}, ${lastHit.row}`
    );
  } else if (lastHit.col > adjSquare.col) {
    boardSquare = getSquareFromDOM(
      playerBoardDisplay,
      `${lastHit.col + 1}, ${lastHit.row}`
    );
  } else if (lastHit.row < adjSquare.row) {
    boardSquare = getSquareFromDOM(
      playerBoardDisplay,
      `${lastHit.col}, ${lastHit.row - 1}`
    );
  } else if (lastHit.row > adjSquare.row) {
    boardSquare = getSquareFromDOM(
      playerBoardDisplay,
      `${lastHit.col}, ${lastHit.row + 1}`
    );
  }
  return adjSquare;
}

function setRandomShipDirection(ship) {
  const number = randomNumber(10);
  if (number >= 0 && number <= 4) {
    ship.direction = "vertical";
  } else if (number >= 5 && number <= 9) {
    ship.direction = "horizontal";
  }
}

export function hardCodeAttack(coords) {
  const square = player.board.getSquare(coords);
  attackSquare(player, square.coords);
  const boardSquare = getSquareFromDOM(playerBoardDisplay, square.coords);
  markSquareAsHit(boardSquare);
  player.board.lastSquareHit = square;
}
