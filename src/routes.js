const createBook = require("./handler/createBook");
const getAllBook = require("./handler/getAllBook");
const getByIdBook = require("./handler/getByIdBook");

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
  }
];

module.exports = routes;
