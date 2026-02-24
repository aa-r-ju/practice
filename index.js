class InvisibleWord {
  constructor(word, remainingGuesses, guesses, status) {
    this.word = word.toLowerCase().split("");
    this.remainingGuesses = 5;
    this.guesses = [];
    this.status = "playing";
  }

  guessLetter(val) {
    if (this.status !== "playing") return;

    const letter = val.toLowerCase();

    if (!this.guesses.includes(letter)) {
      this.guesses.push(letter);

      if (!this.word.includes(letter)) {
        this.remainingGuesses--;
      }
    }
  }

  checkStatus() {
    if (this.remainingGuesses <= 0) {
      this.status = "lost";
    }
    let winner = true;
    for (let i = 0; i < this.word.length; i++) {
      if (this.word[i] !== " " && !this.guesses.includes(this.word[i])) {
        winner = false;
        break;
      }
    }
    if (winner) {
      this.status = "won";
    }
  }
}
