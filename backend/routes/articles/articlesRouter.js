const express = require("express");
const {
  createAticleController,
  getArticleController,
  getOneArticleController,
} = require("../../controllers/Articles/articlesContoller");
const articleRouter = express.Router();
const isLogin = require("../../middleware/isLogin");

articleRouter.get("/", getArticleController);
articleRouter.get("/:id", getOneArticleController);
articleRouter.post("/create-article", isLogin, createAticleController);

module.exports = articleRouter;
