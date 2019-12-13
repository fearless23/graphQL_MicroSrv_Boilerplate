const checkAuth = function(reqHeaders, route = "/") {
  const xAuthKey = reqHeaders["x-auth-key"];
  const origin = reqHeaders["origin"];

  // Demo logic for Checking valid Auth
  // PROD: Use redis db for storing auth or any other auth check here...
  if (xAuthKey !== "123") {
    throw {
      code: "401",
      msg: "Invalid Auth",
      status: false
    };
  }
  return;
};

const wrapper = async function(headers, fn, msg, args = {}) {
  try {
    await checkAuth(headers);
    const data = await fn(args);
    return {
      data,
      status: true,
      code: "S200",
      msg
    };
  } catch (error) {
    return error;
  }
};

module.exports = { wrapper, checkAuth };
