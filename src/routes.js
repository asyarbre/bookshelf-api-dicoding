const createBook = require("./handler/createBook");
const getAllBook = require("./handler/getAllBook");
const getByIdBook = require("./handler/getByIdBook");
const updateBook = require("./handler/updateBook");

const routes = [
  {
    method: "POST",
    path: "/books",
    handler: createBook,
  },
  {
    method: "GET",
    path: "/books",
    handler: getAllBook,
  },
  {
    method: "GET",
    path: "/books/{bookId}",
    handler: getByIdBook,
  },
  {
    method: "PUT",
    path: "/books/{bookId}",
    handler: updateBook,
  },
];

module.exports = routes;
