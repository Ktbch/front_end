const { users, articles } = require("../../models");

const createArticleService = async (postInfo, auth) => {
  try {
    const { title, description, content } = postInfo;
    const userFound = await users.findByPk(auth);

    if (!userFound) {
      console.log(auth);
      throw new Error("please log in");
    }

    const newArticle = await userFound.createArticle({
      content: content,
      description: description,
      title: title,
    });
    if (newArticle) {
      console.log("success");
      return newArticle;
    }
    return;
  } catch (error) {
    console.log("failed to create article", error.message);
    throw error;
  }
};
const getArticleService = async () => {
  try {
    const allArticles = await articles.findAll({
      include: [
        {
          model: users,
          attributes: ["username"],
        },
      ],
    });
    return allArticles;
  } catch (error) {
    throw error;
  }
};

const getOneArticleService = async (artId) => {
  try {
    const { id } = artId;
    const article = await articles.findByPk(id, {
      include: [
        {
          model: users,
          attributes: ["username"],
        },
      ],
    });

    return article;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createArticleService,
  getArticleService,
  getOneArticleService,
};
