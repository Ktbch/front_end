"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class comments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      comments.belongsTo(models.users, { foreignKey: "user_id" });
      comments.belongsTo(models.articles, { foreignKey: "article_id" });
    }
  }
  comments.init(
    {
      comments: DataTypes.TEXT,
      article_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "comments",
      timestamps: true,
    }
  );
  return comments;
};
