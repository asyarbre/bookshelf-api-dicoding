const books = require("../books");

const getAllBook = (request, h) => {
  const { name, reading, finished } = request.query;

  let filteredBooks = books;

  if (name) {
    filteredBooks = filteredBooks.filter((book) =>
      book.name.toLowerCase().includes(name.toLowerCase()));
  }

  if (reading) {
    filteredBooks = filteredBooks.filter(
      (book) => Number(book.reading) === Number(reading)
    );
  }

  if (finished) {
    filteredBooks = filteredBooks.filter(
      (book) => Number(book.finished) === Number(finished)
    );
  }

  return h
    .response({
      status: "success",
      data: {
        books: filteredBooks.map((book) => ({
          id: book.id,
          name: book.name,
          publisher: book.publisher,
        })),
      },
    })
    .code(200);
};

module.exports = getAllBook;
