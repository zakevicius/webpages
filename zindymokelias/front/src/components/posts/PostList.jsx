import React, { useEffect } from "react";
import Post from "./Post.jsx";
import posts from "../json/posts.json";

const PostList = ({ cat, subCat }) => {
  const renderPosts = () => {
    const postsToRender = posts.filter((post) => {
      if (!cat && !subCat) return post;
      if (subCat) {
        return post.subCat === subCat;
      } else {
        return post.cat === cat;
      }
    });

    if (postsToRender.length > 0) {
      return postsToRender.map((post) => <Post key={post.id} post={post} />);
    } else {
      return "No posts";
    }
  };

  return <div>{renderPosts()}</div>;
};

export default PostList;
