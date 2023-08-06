import React, { useContext } from "react";
import Spinner from "./Spinner";
import { AppContext } from "../context/AppContext";



const Blogs = () => {
  const { posts, loading } = useContext( AppContext );
  return (
    <div>
       {
        loading ? (<Spinner />) : 
        ( posts === 0 ? (<div>No Post Found</div>) : ( posts.map( (post, id) => (
          <div key={id}>
            <p>{post.title}</p>
            <p>{`by ${post.author} on ${post.category}`}</p>
            <p>{`Posted on ${post.date}`}</p>
            <p>{post.content}</p>
            <div>
              {
                post.tags.map( (tag, index) => {
                  return (
                    <span key={index}>{`# ${tag}`}</span>
                  )
                })
              }
            </div>
          </div>
        ) ) ) )
       }
    </div>
  )
}

export default Blogs;