import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import BlogList from "./components/BlogList";
import AddPost from "./components/AddPost";
import EditPost from "./components/EditPost";
import Pagination from "./components/Pagination";



function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "First Post", content: "Hello, world!", category: "General" },
    { id: 2, title: "Second Post", content: "React is awesome!", category: "Tech" },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const postsPerPage = 5;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const filteredPosts = posts.filter(
    (post) =>
      (selectedCategory === "All" || post.category === selectedCategory) &&
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleAddPost = (newPost) => setPosts([...posts, newPost]);
  const handleEditPost = (updatedPost) =>
    setPosts(posts.map((post) => (post.id === updatedPost.id ? updatedPost : post)));
  const handleDeletePost = (id) => setPosts(posts.filter((post) => post.id !== id));

  return (
    <Router>
      <NavBar />
      <div style={{ padding: "1rem" }}>
        <input
          type="text"
          placeholder="Search posts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="All">All</option>
          <option value="General">General</option>
          <option value="Tech">Tech</option>
        </select>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <BlogList posts={currentPosts} onDelete={handleDeletePost} />
              <Pagination
                postsPerPage={postsPerPage}
                totalPosts={filteredPosts.length}
                paginate={paginate}
              />
            </>
          }
        />
        <Route path="/add" element={<AddPost onAdd={handleAddPost} />} />
        <Route path="/edit/:id" element={<EditPost posts={posts} onEdit={handleEditPost} />} />
      </Routes>
    </Router>
  );
}

export default App;
