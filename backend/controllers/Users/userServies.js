const { users } = require("../../models");
const bcrypt = require("bcrypt");
const generateToken = require("../../utils/generateToken");

const registerUserService = async (userInfo, reply) => {
  try {
    const { firstname, lastname, username, email, password } = userInfo;

    const useFound = await users.findOne({ where: { email } });

    if (useFound) {
      throw new Error("user already exists");
    }

    // hash password

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const newUser = await users.create({
      firstname: firstname,
      lastname: lastname,
      username: username,
      email: email,
      password: hashPassword,
    });

    return newUser;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const loginUserService = async (userInfo) => {
  try {
    const { username, password } = userInfo;

    const userFound = await users.findOne({ where: { username: username } });

    if (userFound) {
      const checkPassword = await bcrypt.compare(password, userFound.password);
      if (checkPassword) {
        const token = generateToken(userFound.id);
        console.log(token);
        return { userFound, token };
      }
    }
  } catch (error) {
    throw error;
  }
};

const getUserSevice = async (auth) => {
  try {
    const userFound = await users.findByPk(auth);

    if (userFound) {
      const username = userFound.username;
      const userId = userFound.id;
      return { username, userId };
    }
    return;
  } catch (error) {
    console.log(error.message);
    throw err;
  }
};
module.exports = { registerUserService, loginUserService, getUserSevice };
