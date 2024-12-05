import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditPost = ({ posts, onEdit }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const post = posts.find((post) => post.id === Number(id));
    if (post) {
      setTitle(post.title);
      setContent(post.content);
    }
  }, [id, posts]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onEdit({ id: Number(id), title, content });
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      ></textarea>
      <button type="submit">Update Post</button>
    </form>
  );
};

export default EditPost;
