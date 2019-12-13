const { types } = require("../Types/_types");
const { typeQuery } = require("./typeQuery");
const { typeMutation } = require("./typeMutation");

module.exports = {
  typeDefs: [...types, typeQuery, typeMutation]
};
