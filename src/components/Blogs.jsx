import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";

const Blogs = () => {
  const { loading, posts } = useContext(AppContext);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <>
          {posts.length === 0 ? (
            <div>No Post Found</div>
          ) : (
            posts.map((post) => (
              <div key={post.id}>
                <p>{post.title}</p>
                <p>{`By ${post.author} on ${post.category}`}</p>
                <p>{`Posted On ${post.date}`}</p>
                <p>{post.content}</p>
                <div>
                  {post.tags.map((tag, index) => {
                    return <span key={index}>#{tag} </span>;
                  })}
                </div>
              </div>
            ))
          )}
        </>
      )}
    </div>
  );
};

export default Blogs;
