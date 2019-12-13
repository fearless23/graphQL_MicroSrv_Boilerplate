// const axios = require("axios");

const fakeBooksData = [
  {
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling"
  },
  {
    title: "Jurassic Park",
    author: "Michael Crichton"
  }
];

// 1. Get Books from fakeData above - For Demo
const getBooks = async function(args){
  return fakeBooksData
}

// 2. Get Books from Micro Service Endpoint like AWS Lambda - USE THIS
const getBooks2 = async function(xAuthKey) {
  const { data } = await axios.get(`https://api.bitruslabs.com/v2/profile`, {
    headers: {
      "x-auth-key": xAuthKey
    }
  });
  return data.data;
};

// 3. Get Books Directly from Db -- Monolithic, AVOID

module.exports = { getBooks };
