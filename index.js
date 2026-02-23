class InvisibleWord {
  constructor(word, remainingGuesses, guesses, status) {
    this.word = word.toLowerCase().split("");
    this.remainingGuesses = 5;
    this.guesses = [];
    this.status = "playing";
  }
}
