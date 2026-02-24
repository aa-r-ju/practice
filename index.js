class InvisibleWord {
  constructor(word, remainingGuesses, guesses, status) {
    this.word = word.toLowerCase().split("");
    this.remainingGuesses = 5;
    this.guesses = [];
    this.status = "playing";
  }
  guessLetter(val) {
    if (this.status !== "playing") {
      return;
    }
    let letter = val.toLowerCase();
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
      return;
    }

    let winner = true;
    for (let i = 0; i < this.word.length; i++) {
      if (!this.guesses.includes(this.word[i])) {
        winner = false;
        break;
      }
    }
    if (winner) {
      this.status = "won";
    }
  }

  getPuzzle() {
    let puzzle = "";
    for (let i = 0; i < this.word.length; i++) {
      if (this.word[i] !== " " && this.guesses.includes(this.word[i])) {
        puzzle += this.word[i];
      } else if (this.word[i] === " ") {
        puzzle += " ";
      } else {
        puzzle += "_";
      }
    }
    return puzzle;
  }
}

const kk = new InvisibleWord("Banana");
console.log(kk.guessLetter("h"));
console.log(kk.guessLetter("b"));
console.log(kk.guessLetter("a"));
console.log(kk.checkStatus());
console.log(kk.getPuzzle());
console.log(kk);
