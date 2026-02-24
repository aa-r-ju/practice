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
      return;
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
  getStatusMessage() {
    if (this.status === "won") {
      return "You cracked the code!";
    }

    if (this.status === "lost") {
      const word = this.word.join("");

      return `You lost! The word was "${word}"

  X
=====
`;
    }

    return `Guesses left: ${this.remainingGuesses}

=====
`;
  }
}

const kk = new InvisibleWord("Banana");
console.log(kk.guessLetter("h"));
console.log(kk.guessLetter("b"));
console.log(kk.guessLetter("a"));
console.log(kk.guessLetter("n"));
console.log(kk.guessLetter("j"));
console.log(kk.checkStatus());
console.log(kk.getPuzzle());
console.log(kk.getStatusMessage());
console.log(kk);
