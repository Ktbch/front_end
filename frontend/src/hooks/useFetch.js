import { useEffect, useState } from "react";

export const useFetch = (apiPath = null) => {
  const [data, setData] = useState([]);
  const api = `http://localhost:8080/api/v2/article/${apiPath}`;
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(api);
      const res = await response.json();
      setData(res.articles);
    }
    fetchData();
  }, [apiPath]);
  return { data };
};
