import expect from "expect";
import GameBoard from "./GameBoard";

test("board size of 0 should have 0 elements", () => {
  const size = 0;
  const gb = GameBoard(size);
  expect(gb.board.length).toBe(0);
});

test("board size of 3 should have 9 elements", () => {
  const size = 3;
  const gb = GameBoard(size);
  expect(gb.board.length).toBe(9);
});

test("board size of 6 should have 36 elements", () => {
  const size = 6;
  const gb = GameBoard(size);
  expect(gb.board.length).toBe(36);
});

test("on a size 3x3 board, getIndex(2,2) should be 8", () => {
  const size = 3;
  const gb = GameBoard(size);
  expect(gb.getIndex(2, 2)).toBe(8);
});

test("on a size 3x3 board, getIndex(0,1) should be 3", () => {
  const size = 3;
  const gb = GameBoard(size);
  expect(gb.getIndex(0, 1)).toBe(3);
});

test("test out of bound, on a size 3x3 board, getIndex(3,1) should be undefined", () => {
  const size = 3;
  const gb = GameBoard(size);
  expect(gb.getIndex(3, 1)).toBe(undefined);
});

test("test out of bound, on a size 3x3 board, getIndex(-1,1) should be undefined", () => {
  const size = 3;
  const gb = GameBoard(size);
  expect(gb.getIndex(-1, 1)).toBe(undefined);
});

test('setToken(2,2,"token") on a 3x3 board, board[8] should be token', () => {
  const size = 3;
  const gb = GameBoard(size);
  gb.setToken(2, 2, "meow");
  expect(gb.board[8]).toEqual("meow");
});

test("retriving existing token with getToken", () => {
  const size = 3;
  const gb = GameBoard(size);
  gb.setToken(2, 2, "meow");
  expect(gb.getToken(2, 2)).toEqual("meow");
});

test("trying to allocateSpace that leads to out of bound return undefined, vertical", () => {
  const size = 3;
  const gb = GameBoard(size);
  const result = gb.allocateSpace(0, 0, 5, true);
  expect(result).toBe(undefined);
});

test("trying to allocateSpace that leads to out of bound return undefined, horizontal", () => {
  const size = 3;
  const gb = GameBoard(size);
  const result = gb.allocateSpace(0, 0, 5, false);
  expect(result).toBe(undefined);
});

test("allocateSpace space with valid parameter on empty board, vertical", () => {
  const size = 3;
  const gb = GameBoard(size);
  const result = gb.allocateSpace(0, 0, 2, true);
  expect(result).toEqual([0, 3]);
});

test("allocateSpace space with valid parameter on empty board, horizontal", () => {
  const size = 3;
  const gb = GameBoard(size);
  const result = gb.allocateSpace(0, 0, 2, false);
  expect(result).toEqual([0, 1]);
});

test("allocateSpace should return false if coordinate is not empty", () => {
  const size = 3;
  const gb = GameBoard(size);
  gb.board[1] = "token";
  const result = gb.allocateSpace(0, 0, 3, false);
  expect(result).toBe(undefined);
});

test("out of bound placement lead to placShip returning false", () => {
  const size = 3;
  const gb = GameBoard(size);
  let result = gb.placeShip(4, 5, 4, true);
  expect(result).toBe(false);
});

test("length of board.ship should be 1 after first placement", () => {
  const size = 5;
  const gb = GameBoard(size);
  let result = gb.placeShip(2, 3, 2, true);
  expect(gb.ships.length).toBe(1);
});

test("ship coordinate should contain index of the ship in ships", () => {
  const size = 5;
  const gb = GameBoard(size);
  let result = gb.placeShip(2, 3, 2, true);
  expect(gb.getToken(2, 3)).toBe(0);
});
test("ship coordinate should contain index of the ship in ships", () => {
  const size = 5;
  const gb = GameBoard(size);
  let result = gb.placeShip(2, 3, 2, true);
  expect(gb.getToken(2, 4)).toBe(0);
});
test("check if 2nd ship is index correctly as 1", () => {
  const size = 7;
  const gb = GameBoard(size);
  let result = gb.placeShip(2, 3, 2, true);
  let result2 = gb.placeShip(3, 3, 2, true);
  expect(gb.getToken(3, 3)).toBe(1);
});
test("ships cannot have over lapping coordinates", () => {
  const size = 7;
  const gb = GameBoard(size);
  let result = gb.placeShip(2, 3, 2, true);
  let result2 = gb.placeShip(2, 4, 2, false);
  expect(result2).toBe(false);
});

test("coordinate should be marked missed on board if missed", () => {
  const size = 7;
  const gb = GameBoard(size);
  gb.receiveAttack(5, 5);
  expect(gb.getToken(5, 5)).toBe("missed");
});

test("coordinate should be marked hit on board if missed", () => {
  const size = 7;
  const gb = GameBoard(size);
  gb.placeShip(2, 3, 2, true);
  gb.receiveAttack(2, 4);
  expect(gb.getToken(2, 4)).toBe("hit");
});

test("hit gets call on correct ship when receiveAttack is called", () => {
  const size = 7;
  const gb = GameBoard(size);
  let result = gb.placeShip(2, 3, 2, true);
  let result2 = gb.placeShip(3, 3, 2, true);
  gb.receiveAttack(3, 4);
  expect(gb.ships[1].hits).toBe(1);
});
test("should not be able to sink a ship by hitting the same spot over and over", () => {
  const size = 7;
  const gb = GameBoard(size);
  let result = gb.placeShip(2, 3, 2, true);
  let result2 = gb.placeShip(3, 3, 2, true);
  gb.receiveAttack(3, 4);
  gb.receiveAttack(3, 4);
  gb.receiveAttack(3, 4);
  expect(gb.ships[1].isSunk()).toBe(false);
});

test("isDefeated return true when all ships are sunk", () => {
  const size = 7;
  const gb = GameBoard(size);
  let result = gb.placeShip(2, 3, 2, true);
  let result2 = gb.placeShip(3, 3, 2, true);
  gb.receiveAttack(2, 3);
  gb.receiveAttack(2, 4);
  gb.receiveAttack(3, 3);
  gb.receiveAttack(3, 4);
  expect(gb.isDefeated()).toBe(true);
});
test("isDefeated return false when not all ships are sunk", () => {
  const size = 7;
  const gb = GameBoard(size);
  let result = gb.placeShip(2, 3, 2, true);
  let result2 = gb.placeShip(3, 3, 2, true);
  gb.receiveAttack(2, 3);
  gb.receiveAttack(2, 4);
  gb.receiveAttack(3, 3);

  expect(gb.isDefeated()).toBe(false);
});
