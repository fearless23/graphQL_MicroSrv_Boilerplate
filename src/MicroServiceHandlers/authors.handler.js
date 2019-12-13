// const axios = require("axios");

const fakeAuthorsData = [
  {
    name: "J.k. Rowling",
    age: 42
  },
  {
    name: "Michael Crichton",
    age: 34
  }
];

// 1. Get Authors from fakeData above - For Demo
const getAuthors = async function() {
  return fakeAuthorsData;
};
const getAuthor = async function(id) {
  return fakeAuthorsData;
};

// 2. Get Authors from Micro Service Endpoint like AWS Lambda - USE THIS
const getAuthors2 = async function(xAuthKey) {
  const { data } = await axios.get(`https://<MicroServiceEndPoint>/authors`, {
    // Authentication Handled inside every micro-service
    // You can opt for authentication here at GraphQL Server. and make sure Microservice
    // only return result from GrahpQL req for security.
    headers: {
      "x-auth-key": xAuthKey
    }
  });
  return data.data;
};

const getAuthor2 = async function(xAuthKey) {
  const { data } = await axios.get(
    `https://<MicroServiceEndPoint>/authors/:id`,
    {
      headers: {
        "x-auth-key": xAuthKey
      }
    }
  );
  return data.data;
};

// 3. Get Authors Directly from Db -- Monolithic, AVOID

module.exports = { getAuthors };
