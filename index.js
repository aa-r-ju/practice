class InvisibleWord {
  constructor(word, remainingGuesses, guesses, status) {
    this.word = word.toLowerCase().split("");
    this.remainingGuesses = 5;
    this.guesses = [];
    this.status = "playing";
  }

  guessLetter(val) {
    const letter = this.word.toLowerCase();
    if (!this.guesses.includes(letter)) {
      this.guesses.push(letter);
      if (!this.word.includes(letter)) {
        this.remainingGuesses -= 1;
      }
    }
  }
}
