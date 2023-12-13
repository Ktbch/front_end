const express = require("express");
const useRouter = require("./routes/userRouter/userRouter");
const db = require("./models");
require("dotenv").config();

const cors = require("cors");
const articleRouter = require("./routes/articles/articlesRouter");
const commetRouter = require("./routes/comments/commentsRoutes");

const app = express();

app.use(express.json());

var corOptions = {
  origin: "https://the-blog-mx3v.onrender.com/",
};
app.use(cors(corOptions));

app.use(express.urlencoded({ extended: true }));

app.use("/api/v2/comments", commetRouter);
app.use("/api/v2/article", articleRouter);
app.use("/api/v2/users", useRouter);

const port = process.env.PORT || 8080;

try {
  app.listen(port, console.log(`Server started on port ${port}`));
} catch (error) {
  console.log(error.message);
}
