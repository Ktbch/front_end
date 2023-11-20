const getTokenFromHeaders = (req) => {
  const headerObj = req.headers;
  const token = headerObj["authorization"].split(" ")[1];

  if (!token) return;

  return token;
};

module.exports = getTokenFromHeaders;
