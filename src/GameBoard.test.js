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
