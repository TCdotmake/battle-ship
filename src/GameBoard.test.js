import expect from "expect";
import GameBoard from "./GameBoard";

test('GameBoard with size of one should have a board.posArr that consist of ["A1"]', () => {
  const gameBoard = GameBoard(1);
  expect(gameBoard.posArr).toEqual([`A,1`]);
});

test('GameBoard with size of two should have a board.posArr that consist of ["A1","A2","B1",B2"]', () => {
  const gameBoard = GameBoard(2);
  expect(gameBoard.posArr).toEqual(["A,1", "A,2", "B,1", "B,2"]);
});

test("GameBoard with size of zero should have a board.posArr that consist of []", () => {
  const gameBoard = GameBoard(0);
  expect(gameBoard.posArr).toEqual([]);
});
