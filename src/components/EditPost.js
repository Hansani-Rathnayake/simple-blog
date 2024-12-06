import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EditPost = ({ posts, onUpdate }) => {
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

  const handleSubmit = (e) => {
    e.preventDefault();

   
    if (onUpdate) {
      onUpdate({ id, title, content, category });
    }
  };

  return (
    <div className="add-section-wrapper">
      <form onSubmit={handleSubmit} className="add-post-section">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="">Select Category</option>
          <option value="General">General</option>
          <option value="Tech">Tech</option>
        </select>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditPost;
