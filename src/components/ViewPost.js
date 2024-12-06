import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ViewPost = ({ posts }) => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    const post = posts.find((post) => post.id === Number(id));
    if (post) {
      setTitle(post.title);
      setContent(post.content);
      setCategory(post.content)
    }
  }, [id, posts]);

  return (
    <div>
        <h1>{title}</h1>
        <h3>{category}</h3>
        <p>{content}</p>
        
    </div>
  );
};

export default ViewPost;
