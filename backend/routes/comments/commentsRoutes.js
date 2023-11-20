const express = require("express");

const isLogin = require("../../middleware/isLogin");
const {
  getAllCommentsController,
  createCommentsController,
  deleteCommentsController,
  updateCommentsController,
} = require("../../controllers/comments/commentsController");
const commetRouter = express.Router();

commetRouter.get("/", getAllCommentsController);
commetRouter.post("/", isLogin, createCommentsController);
commetRouter.delete("/delete/:id", isLogin, deleteCommentsController);
commetRouter.put("/update/:id", isLogin, updateCommentsController);

module.exports = commetRouter;
