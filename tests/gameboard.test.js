import { initializeGameboard } from "../src/gameboard.js";
import { Ship } from "../src/ships.js";

const testArea = initializeGameboard();
testArea.board[0].isOccupied = Ship(5);

test("check board size", () => {
  expect(testArea.board.length).toBe(100);
});

test("check board square", () => {
  expect(testArea.board[0].coords).toBe("0, 0");
});

test("check board square", () => {
  expect(testArea.board[99].coords).toBe("9, 9");
});

test("check board square", () => {
  expect(testArea.board[50].coords).toBe("5, 0");
});

test("check if gameboard empty", () => {
  expect(testArea.hasShips()).toBe(true);
});
