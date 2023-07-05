import { initializeGameboard } from "../src/gameboard.js";
import { Ship } from "../src/ships.js";

const testBoard = initializeGameboard();
const testShip = Ship(5);
const testSquare1 = testBoard.getSquare("0, 0");
const testSquare2 = testBoard.getSquare("0, 1");
const testSquare3 = testBoard.getSquare("0, 2");
const testSquare4 = testBoard.getSquare("0, 3");
const testSquare5 = testBoard.getSquare("0, 4");
testBoard.addShip(testShip, testSquare1);
testBoard.recieveAttack("0, 0");
testBoard.recieveAttack("0, 0");

test("add ship to board", () => {
  expect(
    testSquare1.isOccupied &&
      testSquare2.isOccupied &&
      testSquare3.isOccupied &&
      testSquare4.isOccupied &&
      testSquare5.isOccupied
  ).toBe(testShip);
});

test("recieve hit", () => {
  expect(testShip.hits).toBe(1);
});
