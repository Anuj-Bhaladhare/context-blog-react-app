import React, { useEffect, useState, createContext } from "react";
import baseUrl from "../baseUrl";

export const AppContext = createContext(); // Create the AppContext

const AppContextProvider = ({ children }) => {
  // Creating state variables
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [totalPage, setTotalPage] = useState(null);
  const [loading, setLoading] = useState(false);

  // Calling to API
  const fetchBlogData = async (page = 1) => {
    let url = `${baseUrl}?page=${page}`;
    setLoading(true);

    try {
      const result = await fetch(url);
      const data = await result.json();
      console.log(data);
      setPage(data.page);
      setPosts(data.posts);
      setTotalPage(data.totalPages);
    } catch (error) {
      console.log(error);
      setPage(1);
      setPosts([]);
      setTotalPage(null);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchBlogData();
  }, []);

  const handalSetPage = (page) => {
    setPage(page);
    fetchBlogData(page);
  };

  // Providing context value
  const value = {
    page,
    setPage,
    posts,
    setPosts,
    totalPage,
    setTotalPage,
    loading,
    setLoading,
    fetchBlogData,
    handalSetPage,
  };

  return <AppContext.Provider value={value}> {children} </AppContext.Provider>;
};

export default AppContextProvider;
