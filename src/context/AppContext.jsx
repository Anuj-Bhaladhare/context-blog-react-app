import React, { useState } from "react";
import { createContext } from "react";
import baseUrl from "../baseUrl";

export const AppContext = createContext();

function AppContextProvider({Children}) {

     const[loading, setLoading] = useState(false);
     const[post, setPost] = useState([]);
     const[page, setPage] = useState(1);
     const[totalPage, setTotalPage] = useState(null);


    //  Data featching by using API

    const featchData = async() => {
       let url = `${baseUrl}?page=${page}`;
       setLoading(true);
        try {
            const responce = await fetch(url);
            const outpute = await responce.json();
            console.log(outpute);
            setPage(outpute.page);
            setPost(outpute.posts);
            setTotalPage(outpute.totalPages);
        }
        catch(err) {
            console.log(`Error fount for ${err}`);
            setPage(1);
            setTotalPage(null);
            setPost([])
        }
       setLoading(false);
    }


     const value = {
        loading, 
        setLoading,
        post,
        setPost,
        page,
        setPage,
        totalPage,
        setTotalPage
     };



     return <AppContext.Provider value={value}>
        {Children}
     </AppContext.Provider>
}