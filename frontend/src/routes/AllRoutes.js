import { Routes, Route } from "react-router-dom";
import {
  AllArticle,
  Article,
  CreateArticle,
  Login,
  Profile,
  Register,
} from "../pages";
export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AllArticle />} />
        <Route path="/myBlog/login" element={<Login />} />
        <Route path="/myBlog/register" element={<Register />} />
        <Route path="/myBlog/profile/:id" element={<Profile />} />
        <Route path="/myBlog/create-article" element={<CreateArticle />} />
        <Route path="/myBlog/article/:id" element={<Article />} />
      </Routes>
    </div>
  );
};
