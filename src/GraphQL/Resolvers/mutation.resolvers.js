// const { registerUser } = require("./../../modules/user/registerUser");

const mutationResolvers = {
  register: async function(_, args, context) {
    console.log(context.req.headers);
    return args;
  }
};

module.exports = { mutationResolvers };
