import expect from "expect";
import GameBoard from "./GameBoard";

test('GameBoard with size of one should have a board.posArr that consist of ["A1"]', () => {
  const gameBoard = GameBoard(1);
  expect(gameBoard.posArr).toEqual([`1,1`]);
});

test('GameBoard with size of two should have a board.posArr that consist of ["A1","A2","B1",B2"]', () => {
  const gameBoard = GameBoard(2);
  expect(gameBoard.posArr).toEqual(["1,1", "1,2", "2,1", "2,2"]);
});

test("GameBoard with size of zero should have a board.posArr that consist of []", () => {
  const gameBoard = GameBoard(0);
  expect(gameBoard.posArr).toEqual([]);
});

test('No ship on board, check if getShipCoordinates("1,1", 1, false) return ["1,1"]', () => {
  const gameBoard = GameBoard();
  const result = gameBoard.getShipCoordinates("1,1,", 1, false);
  expect(result).toEqual(["1,1"]);
});

test('No ship on board, check if getShipCoordinates("1,1", 2, false) return ["1,1", "2,1"]', () => {
  const gameBoard = GameBoard();
  const result = gameBoard.getShipCoordinates("1,1,", 2, false);
  expect(result).toEqual(["1,1", "2,1"]);
});

test('No ship on board, check if getShipCoordinates("1,1", 2, true) return ["1,1", "1,2"]', () => {
  const gameBoard = GameBoard();
  const result = gameBoard.getShipCoordinates("1,1,", 2, true);
  expect(result).toEqual(["1,1", "1,2"]);
});

test("It should be illegal to getShipCoordinates that result in out of bound, vertical", () => {
  const gameBoard = GameBoard(3);
  const result = gameBoard.getShipCoordinates("3,3", 2, true);
  expect(result).toBe(false);
});

test("It should be illegal to getShipCoordinates that result in out of bound, horizontal", () => {
  const gameBoard = GameBoard(3);
  const result = gameBoard.getShipCoordinates("3,3", 2, false);
  expect(result).toBe(false);
});
