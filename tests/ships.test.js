import { Ship } from "../src/ships.js";

const testShip = Ship(5);
testShip.hit();
testShip.hit();
testShip.hit();
testShip.hit();
testShip.hit();

test("set ship length", () => {
  expect(testShip.length).toBe(5);
});

test("is ship sunk", () => {
  expect(testShip.isSunk()).toBe(true);
});
