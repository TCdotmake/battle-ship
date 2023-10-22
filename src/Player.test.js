import expect from "expect";
import Player from "./Player";

test("setOpponent", () => {
  let player1 = Player();
  let Player2 = Player();
  player1.setOpponent(Player2);
  expect(player1.opponent).toBe(Player2);
});

test("check if Attack is registering misses", () => {
  let player1 = Player();
  let Player2 = Player();
  player1.setOpponent(Player2);
  player1.attack(3, 3);
  expect(Player2.board.getToken(3, 3)).toBe("missed");
});

test("check if Attack is registering hits", () => {
  let player1 = Player();
  let Player2 = Player();
  player1.setOpponent(Player2);
  Player2.board.placeShip(3, 3, 2, true);
  player1.attack(3, 3);
  expect(Player2.board.getToken(3, 3)).toBe("hit");
});

test("check behavior of duplicated hits", () => {
  let player1 = Player();
  let Player2 = Player();
  player1.setOpponent(Player2);
  Player2.board.placeShip(3, 3, 2, true);
  let index = Player2.board.getToken(3, 3);
  player1.attack(3, 3);
  player1.attack(3, 3);
  player1.attack(3, 3);
  expect(Player2.board.ships[index].hits).toBe(1);
});
