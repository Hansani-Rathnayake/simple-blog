import React from "react";
import BlogPost from "./BlogPost";

const BlogList = ({ posts, onDelete }) => (
  <div>
    {posts.map((post) => (
      <BlogPost key={post.id} post={post} onDelete={onDelete} />
    ))}
  </div>
);

export default BlogList;
