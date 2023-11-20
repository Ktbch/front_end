const {
  createArticleService,
  getArticleService,
  getOneArticleService,
} = require("./articlesService");

const createAticleController = async (req, res) => {
  try {
    console.log(req.auth);
    const createdArticle = await createArticleService(req.body, req.auth);
    if (createdArticle) {
      res.status(200).json({
        status: "ok",
        message: "done",
        createdArticle: createdArticle,
      });
      return;
    }
    res.status(401).json({
      status: "failed",
      message: "could not create article",
    });
    return;
  } catch (error) {
    console.log("failed to create article", error.message);

    res.status(500).json({
      status: "internal server error",
      message: "internal server error",
    });
    return;
  }
};

const getArticleController = async (req, res) => {
  try {
    const Allarticles = await getArticleService();
    return res.status(200).json({
      status: "ok",
      articles: Allarticles,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      status: "erro",
    });
  }
};
const getOneArticleController = async (req, res) => {
  try {
    const article = await getOneArticleService(req.params);
    res.status(200).json({
      status: "ok",
      articles: article,
    });
    return;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createAticleController,
  getArticleController,
  getOneArticleController,
};
