const getTokenFromHeaders = require("../utils/getTokenFromHeader");
const verifyToken = require("../utils/verifyToken");
const isLogin = (req, res, next) => {
  const token = getTokenFromHeaders(req);
  const decoded = verifyToken(token);
  if (!decoded) {
    res.status(409).json({
      status: "invalid token",
      message: "invalid token",
    });
  }
  req.auth = decoded.id;
  next();
  return;
};

module.exports = isLogin;
