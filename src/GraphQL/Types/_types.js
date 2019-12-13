const { typeBook } = require("./book.type");
const { typeAuthor } = require("./author.type");
const { typeError } = require("./error.type");

// Combine all Types
const types = [typeBook, typeAuthor, typeError];

/*
Sometimes the error msg if there is invalid type is not
very descriptive by apollo-server. Thus implemented self 
check func defined below.
*/
(() => {
  for (let i = 0; i < types.length; ++i) {
    const type = types[i];
    if(typeof type !== 'object') throw `Index ${i} type in types is invalid`
  }
})();
module.exports = { types };
