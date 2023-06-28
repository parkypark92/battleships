import { initializeGameboard } from "../src/gameboard.js";
import { Ship } from "../src/ships.js";

const board = initializeGameboard();
board.squares[0].isOccupied = Ship(5);

test("check board size", () => {
  expect(board.squares.length).toBe(100);
});

test("check board square", () => {
  expect(board.squares[0].coords).toBe("0, 0");
});

test("check board square", () => {
  expect(board.squares[99].coords).toBe("9, 9");
});

test("check board square", () => {
  expect(board.squares[50].coords).toBe("5, 0");
});

test("check if gameboard empty", () => {
  expect(board.hasShips()).toBe(true);
});
