import BlogList from "./BlogList";

const Home = ({ posts, onDelete }) => {
  return (
    <div className="home-container">
      <h1 className="home-title">All Blog Posts</h1>
      <div className="blog-list-container">
        <BlogList posts={posts} onDelete={onDelete} />
      </div>
    </div>
  );
};

export default Home;
