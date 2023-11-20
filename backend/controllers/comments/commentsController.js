const {
  getAllCommentService,
  createCommentService,
} = require("./commentsServices");

const getAllCommentsController = async (req, res) => {
  try {
    const allComments = await getAllCommentService(req.body);
    res.status(200).json({
      status: "ok",
      Comment: allComments,
    });
    return;
  } catch (error) {
    console.log(error.message);
    res.status(400).json({
      status: "failed",
    });
    return;
  }
};

const createCommentsController = async (req, res) => {
  try {
    const newComment = await createCommentService(req.body, req.auth);
    res.status(200).json({
      status: "ok",
      newComment: newComment,
    });
    return;
  } catch (error) {
    console.log(error.message);
    res.status(400).json({
      status: "failed",
    });
    return;
  }
};

const deleteCommentsController = (req, res) => {
  try {
    res.status(200).json({
      status: "ok",
    });
    return;
  } catch (error) {
    console.log(error.message);
    res.status(400).json({
      status: "failed",
    });
    return;
  }
};

const updateCommentsController = async (req, res) => {
  try {
    const allComments = await getAllCommentService(req.body);
    res.status(200).json({
      status: "ok",
      Comment: allComments,
    });
    return;
  } catch (error) {
    console.log(error.message);
    res.status(400).json({
      status: "failed",
    });
    return;
  }
};

module.exports = {
  getAllCommentsController,
  createCommentsController,
  deleteCommentsController,
  updateCommentsController,
};
