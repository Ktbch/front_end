"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      article.belongsTo(models.users, { foreignKey: "user_id" });
      article.hasMany(models.articles, { foreignKey: "article_id" });

      article.belongsToMany(models.articles, {
        as: "likes",
        foreignKey: "user_Id",
        through: "like",
      });
      article.belongsToMany(models.articles, {
        as: "dilikes",
        foreignKey: "user_id",
        through: "dislike",
      });
    }
  }
  article.init(
    {
      content: DataTypes.TEXT,
      description: DataTypes.TEXT,
      title: DataTypes.TEXT,
      user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "articles",
    }
  );
  return article;
};
