const { mockRandom } = require("jest-mock-random");
const { guessingGame } = require("./guessing-game");

describe("guessingGame", function() {
  let game;
  // force the random number to always be the same
  mockRandom(0.6);

  beforeEach(function() {
    game = guessingGame();
  });

  it("returns a function", function() {
    expect(game).toBeInstanceOf(Function);
  });

  it("tells you when your guess is too low", function() {
    expect(game(10)).toBe("You're too low.");
  });

  it("tells you when your guess is too high", function() {
    expect(game(80)).toBe("You're too high.");
  });

  it("tells you when your guess is correct, along with the number of guesses.", function() {
    game(55);
    game(65);
    expect(game(60)).toBe(`YOU WIN! Number of gueses: 3`);
  });

  it("stops you from guessing when the game is over", function() {
    game(60);
    expect(game(60)).toBe('You already won');
  });
});
