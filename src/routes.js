const createBook = require("./handler/createBook");
const getAllBook = require("./handler/getAllBook");

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
];

module.exports = routes;
