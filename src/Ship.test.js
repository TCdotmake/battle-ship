import expect from "expect";
import Ship from "./Ship";

test("Change in ship.hits after ship.hit() has been called", () => {
  const ship = Ship(5);
  const original = ship.hits;
  ship.hit();
  expect(ship.hits).toBe(original + 1);
});

test("ship with length of 3 will not sink after hit() twice", () => {
  const ship = Ship(3);
  ship.hit();
  ship.hit();
  expect(ship.isSunk()).toBe(false);
});

test("ship with length of 3 will sink after hit() three times", () => {
  const ship = Ship(3);
  ship.hit();
  ship.hit();
  ship.hit();
  expect(ship.isSunk()).toBe(true);
});

test("ship with length of 3 will sink after hit() more than three times", () => {
  const ship = Ship(3);
  ship.hit();
  ship.hit();
  ship.hit();
  ship.hit();
  ship.hit();
  expect(ship.isSunk()).toBe(true);
});
