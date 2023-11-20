const {
  registerUserService,
  loginUserService,
  getUserSevice,
} = require("./userServies");

const registerController = async (req, res) => {
  try {
    const newUser = await registerUserService(req.body);
    res.status(200).json({
      status: "ok",
      message: "success",
      user: newUser,
    });
  } catch (error) {
    console.log(error);
    res.status(409).json({
      status: "internalk server error",
      message: "internal server error",
    });
  }
};

const loginController = async (req, res) => {
  try {
    const { userFound, token } = await loginUserService(req.body);
    res.status(200).json({
      status: "ok",
      message: "success",
      token: token,
      user: userFound,
    });
    return;
  } catch (error) {
    res.status(500).json({
      status: "internal Server error",
      message: "failed",
    });
    return;
  }
};
const getUserController = async (req, res) => {
  try {
    const { username, userId } = await getUserSevice(req.auth);
    if (username && userId) {
      console.log(username, userId);
      res.status(200).json({
        status: "ok",
        message: "sucesss",
        userId: userId,
        username: username,
      });
    }
  } catch (error) {
    res.status(400).json({
      status: "error",
    });
    console.log(error.message);
    throw error;
  }
};

const profileController = async (req, res) => {
  try {
    res.status(200).json({
      status: "okay",
      message: "login Route",
    });
  } catch (error) {
    res.status(403).json({
      status: "internal Server error",
      message: "failed",
    });
  }
};
const updateUserController = async (req, res) => {
  try {
    res.status(200).json({
      status: "okay",
      message: "login Route",
    });
  } catch (error) {
    res.status(403).json({
      status: "internal Server error",
      message: "failed",
    });
  }
};
const deletUSerController = async (req, res) => {
  try {
    res.status(200).json({
      status: "okay",
      message: "login Route",
    });
  } catch (error) {
    res.status(403).json({
      status: "internal Server error",
      message: "failed",
    });
  }
};

module.exports = {
  loginController,
  deletUSerController,
  profileController,
  registerController,
  updateUserController,
  getUserController,
};
