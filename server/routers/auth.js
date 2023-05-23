const { Router } = require("express");
const authController = require("../controllers/User.js");
const authMiddleware = require("../middlewares/auth.js");
const errorHandler = require("../helpers/errorHandler.js");
const CustomError = require("../helpers/CustomError.js");
const router = Router();

router.post("/sign-in", errorHandler(authController.signIn));
router.post("/sign-up", errorHandler(authController.signUp));
router.post(
  "/me",
  authMiddleware,
  errorHandler((req, res, next) => {
    try {
      res.json({
        statusCode: 200,
        data: {
          user: req.user,
        },
      });
    } catch (error) {
      next(new CustomError(500, "Internal Error"));
    }
  })
);
module.exports = router;
