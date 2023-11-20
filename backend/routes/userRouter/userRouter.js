const express = require("express");
const {
  registerController,
  loginController,
  profileController,
  getUserController,
} = require("../../controllers/Users/userController");
const isLogin = require("../../middleware/isLogin");
const useRouter = express.Router();

useRouter.post("/register", registerController);
useRouter.post("/login", loginController);
useRouter.get("/users", isLogin, getUserController);
useRouter.get("/:id", isLogin, profileController);

useRouter.delete("/:id");

module.exports = useRouter;
