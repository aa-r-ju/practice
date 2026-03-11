/* eslint-env jasmine */
/* eslint-disable no-undef */

describe("Library Class", () => {
  let library;

  beforeEach(() => {
    library = new Library();
  });

  it("starts with an empty books array", () => {
    expect(library.books).toEqual([]);
  });

  it("addBook adds a book", () => {
    library.addBook("Clean Code", "Robert Martin");

    expect(library.books.length).toBe(1);
  });

  it("books store title, author and borrowed status", () => {
    library.addBook("Clean Code", "Robert Martin");

    expect(library.books[0]).toEqual({
      title: "Clean Code",
      author: "Robert Martin",
      borrowed: false,
    });
  });

  it("borrowBook marks book as borrowed", () => {
    library.addBook("Clean Code", "Robert Martin");

    library.borrowBook("Clean Code");

    expect(library.books[0].borrowed).toBe(true);
  });

  it("returnBook marks book as not borrowed", () => {
    library.addBook("Clean Code", "Robert Martin");

    library.borrowBook("Clean Code");
    library.returnBook("Clean Code");

    expect(library.books[0].borrowed).toBe(false);
  });

  it("getBorrowedBooks returns only borrowed books", () => {
    library.addBook("Clean Code", "Robert Martin");
    library.addBook("JS Guide", "MDN");

    library.borrowBook("Clean Code");

    expect(library.getBorrowedBooks().length).toBe(1);
  });
});
