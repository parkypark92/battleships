import { initializeGameboard } from "../src/gameboard.js";

test("check board size", () => {
  expect(initializeGameboard().length).toBe(100);
});

test("check board square", () => {
  expect(initializeGameboard()[0]).toBe("0, 0");
});

test("check board square", () => {
  expect(initializeGameboard()[99]).toBe("9, 9");
});

test("check board square", () => {
  expect(initializeGameboard()[50]).toBe("5, 0");
});
