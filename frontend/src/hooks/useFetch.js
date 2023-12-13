import { useEffect, useState } from "react";

export const useFetch = (
  apiPath = "", // Set a default value that works for your use case
  apiData = false,
  resourcePath = "article",
  isComment,
  isCommentCount = false
) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [commentCount, setCommentCount] = useState(0);

  const api = `http://localhost:8080/api/v2/${resourcePath}/${apiPath}`;

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(api);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const res = await response.json();
      setData(apiData ? res.Comment : res.articles);
      if (Array.isArray(res.Comment)) {
        setCommentCount(res.Comment.length);
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const getCommentCount = async () => {
    try {
      const response = await fetch(api);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const res = await response.json();
      setData()
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, [apiPath, isComment]);

  return { data, loading, error, commentCount, fetchData }; // Include loading and error in the return object
};
