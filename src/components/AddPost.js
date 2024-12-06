import React, { useState } from "react";

const AddPost = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ id: Date.now(), title, content, category });
    setTitle("");
    setContent("");
    setCategory("");
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
      >

      </textarea>
      <select onChange={(e) => setCategory(e.target.value)} required>
        <option value="">Select Category</option>
        <option value="General">General</option>
        <option value="Tech">Tech</option>
      </select>
      <button type="submit">Add Post</button>
    </form>
    </div>
  );
};

export default AddPost;
