/* eslint-disable no-useless-escape, no-unused-vars, no-prototype-builtins, no-undef */

describe("InvisibleWord Class", () => {
  it("attaches a constructor to InvisibleWord", () => {
    expect(typeof InvisibleWord.constructor).toBe("function");
  });

  it("instance has word, remainingGuesses, guesses, and status properties", () => {
    const game = new InvisibleWord("banana");

    expect(game.word).toEqual(["b", "a", "n", "a", "n", "a"]);
    expect(game.remainingGuesses).toBe(5);
    expect(game.guesses).toEqual([]);
    expect(game.status).toBe("playing");
  });

  describe("guessLetter method", () => {
    it("is a prototype method", () => {
      const game = new InvisibleWord("apple");
      expect(game.hasOwnProperty("guessLetter")).toBe(false);
    });

    it("stores unique guesses only", () => {
      const game = new InvisibleWord("apple");
      game.guessLetter("a");
      game.guessLetter("a");
      game.guessLetter("p");

      expect(game.guesses).toEqual(["a", "p"]);
    });

    it("reduces remainingGuesses for incorrect unique guesses", () => {
      const game = new InvisibleWord("cat");

      game.guessLetter("z");
      game.guessLetter("x");
      game.guessLetter("c");
      game.guessLetter("v");

      expect(game.remainingGuesses).toBe(3);
    });
  });

  describe("checkStatus method", () => {
    it("is a prototype method", () => {
      const game = new InvisibleWord("dog");
      expect(game.hasOwnProperty("checkStatus")).toBe(false);
    });

    it("sets status to lost if remainingGuesses is 0", () => {
      const game = new InvisibleWord("dog");

      game.guessLetter("a");
      game.guessLetter("b");
      game.guessLetter("c");
      game.guessLetter("e");
      game.guessLetter("f");

      game.checkStatus();

      expect(game.status).toBe("lost");
    });

    it("sets status to won if all letters guessed", () => {
      const game = new InvisibleWord("hi");

      game.guessLetter("h");
      game.guessLetter("i");

      game.checkStatus();

      expect(game.status).toBe("won");
    });
  });

  describe("getPuzzle method", () => {
    it('returns puzzle using "_" for hidden letters', () => {
      const game = new InvisibleWord("apple");
      expect(game.getPuzzle()).toBe("_____");
    });

    it("reveals correct letters", () => {
      const game = new InvisibleWord("apple");

      game.guessLetter("p");

      expect(game.getPuzzle()).toBe("_pp__");
    });

    it("handles spaces", () => {
      const game = new InvisibleWord("ice cream");
      expect(game.getPuzzle()).toBe("___ _____");
    });
  });

  describe("getStatusMessage method", () => {
    it("returns correct playing message", () => {
      const game = new InvisibleWord("car");

      expect(game.getStatusMessage()).toBe(`Guesses left: 5

=====
`);
    });

    it("returns lost message with revealed word", () => {
      const game = new InvisibleWord("hat");

      game.guessLetter("x");
      game.guessLetter("y");
      game.guessLetter("z");
      game.guessLetter("q");
      game.guessLetter("w");
      game.checkStatus();

      expect(game.getStatusMessage()).toBe(`You lost! The word was "hat"

  X
=====
`);
    });

    it("returns winning message", () => {
      const game = new InvisibleWord("ok");

      game.guessLetter("o");
      game.guessLetter("k");
      game.checkStatus();

      expect(game.getStatusMessage()).toBe("You cracked the code!");
    });
  });
});
