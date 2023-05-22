const jwt = require("jsonwebtoken");
const authController = require("../models/User.js");

const authMiddleware = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    throw new Error("Unauthorized");
  }
  const token = authorization.split(" ")[1];
  const options = {
    expiresIn: "10h",
  };
  const decoded = jwt.verify(token, process.env.SECRET_KEY, options);

  if (!decoded) {
    throw new Error("Unauthorized");
  }
  req.user = await authController.getUserById(decoded._id);
  next();
};
module.exports = authMiddleware;
