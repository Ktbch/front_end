const { users, comments } = require("../../models");
const { articles } = require("../../models");

const getAllCommentService = async (postInfo) => {
  const { id } = postInfo;
  try {
    const allComments = await comments.findOne({
      where: {
        id: id,
      },
      include: [
        {
          model: "users",
          attributes: ["username"],
        },
      ],
    });
    return allComments;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

const createCommentService = async (commentInfo, auth) => {
  try {
    const { comment, articleId } = commentInfo;
    const userFound = await users.findByPk(auth);

    if (userFound) {
      const newComment = userFound.createComment({
        comments: comment,
        user_id: userFound.id,
        article_id: articleId,
      });
      return newComment;
    } else {
      throw new Error("user not found");
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = { getAllCommentService, createCommentService };
