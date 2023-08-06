import React, { useState } from "react";
import { createContext } from "react";
import baseUrl from "../baseUrl";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(null);

  // Data fetching by using API
  const fetchData = async (page = 1) => {
    let url = `${baseUrl}?page=${page}`;
    setLoading(true);
    try {
      const response = await fetch(url);
      const output = await response.json();
      console.log(output);
      setPage(output.page);
      setPost(output.posts);
      setTotalPage(output.totalPages);
    } catch (err) {
      console.log(`Error found for ${err}`);
      setPage(1);
      setTotalPage(null);
      setPost([]);
    }
    setLoading(false);
  };

  const handlePageChange = (page) => {
    setPage(page);
    fetchData(page);
  };

  const value = {
    loading,
    setLoading,
    post,
    setPost,
    page,
    setPage,
    totalPage,
    setTotalPage,
    fetchData,
    handlePageChange,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
