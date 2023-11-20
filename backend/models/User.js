"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsToMany(models.users, {
        as: "followers",
        foreignKey: "userId",
        through: "follower",
      });
      User.belongsToMany(models.users, {
        as: "viewers",
        foreignKey: "userId",
        through: "viewer",
      });
      User.hasMany(models.articles, { foreignKey: "user_id" });
      User.hasOne(models.profile, { foreignKey: "user_id" });
    }
  }
  User.init(
    {
      firstname: DataTypes.STRING,
      lastname: DataTypes.STRING,
      email: DataTypes.STRING,
      username: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "users",
      tableName: "users",
      timestamps: true,
    }
  );
  return User;
};
