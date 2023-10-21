import expect from "expect";
import Player from "./Player";

test("setOpponent", () => {
  let player1 = Player();
  let Player2 = Player();
  player1.setOpponent(Player2);
  expect(player1.opponent).toBe(Player2);
});

test("check if Attack is affecting opponent", () => {
  let player1 = Player();
  let Player2 = Player();
  player1.setOpponent(Player2);
  player1.attack(3, 3);
  expect(Player2.board.getToken(3, 3)).toBe("missed");
});
