import { board, battleship } from "../src/app.js";

const testSquare = board.getSquare("5, 5");

test("add ship to board square", () => {
  expect(testSquare.isOccupied).toBe(battleship);
});
