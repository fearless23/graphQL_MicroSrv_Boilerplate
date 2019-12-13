const {
  getAuthors,
  getBooks
} = require("../../MicroServiceHandlers/_handlers");
const { wrapper } = require("../Helpers/auth.helpers");
/*
const queryResolvers = {
  books: () => booksData,
  authors: () => authorsData
};
*/

const queryResolvers = {
  books: async (parent, args, context) => {
    return wrapper(context.req.headers, getBooks, "Get Books", []);
  },
  authors: getAuthors
};

module.exports = { queryResolvers };
