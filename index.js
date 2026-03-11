class Library {
  constructor() {
    this.books = [];
  }

  addBook(title, author) {
    this.books.push({
      title: title,
      author: author,
      borrowed: false,
    });
  }

  borrowBook(title) {
    const book = this.books.find((book) => book.title === title);

    if (book) {
      book.borrowed = true;
    }
  }

  returnBook(title) {
    const book = this.books.find((book) => book.title === title);

    if (book) {
      book.borrowed = false;
    }
  }

  getBorrowedBooks() {
    return this.books.filter((book) => book.borrowed);
  }
}
