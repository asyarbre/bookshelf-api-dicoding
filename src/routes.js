const createBook = require("./handler/createBook");
const getAllBook = require("./handler/getAllBook");

const routes = [
  {
    method: "POST",
    path: "/books",
    handler: createBook,
  },
];

module.exports = routes;
