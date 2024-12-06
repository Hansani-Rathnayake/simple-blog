import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import BlogList from "./components/BlogList";
import AddPost from "./components/AddPost";
import EditPost from "./components/EditPost";
import ViewPost from "./components/ViewPost";
import Pagination from "./components/Pagination";
import "./App.css"


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
  const handleEditPost = (updatedPost) =>{
    console.log(posts.filter((t)=>t.id!==updatedPost.id))
    setPosts(posts.map((post) => (post.id === updatedPost.id ? updatedPost : post)));
}
  const handleDeletePost = (id) => setPosts(posts.filter((post) => post.id !== id));

  return (
    <Router>
      <NavBar />
      
      <Routes>
        <Route
          path="/"
          element={
            <>
            <div className="filter-section" style={{ padding: "1rem" }}>
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
        <Route path="/edit/:id" element={<EditPost posts={posts} onUpdate={handleEditPost} />} />
        <Route path="/view/:id" element={<ViewPost posts={posts} />} />
      
      </Routes>
    </Router>
  );
}

export default App;
