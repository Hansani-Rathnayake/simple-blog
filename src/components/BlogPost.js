import { Link } from "react-router-dom";
import './BlogPost.css';

const BlogPost = ({ post, onDelete }) => {
  return (
    <div className="blog-post">
      <h2>{post.title}</h2>
      <p>{post.content.substring(0, 100)}...</p>
      <div className="post-actions">
      <button onClick={() => onDelete(post.id)}>Delete</button>
      <Link to={`/edit/${post.id}`}>Edit</Link>
      <Link to={`/view/${post.id}`}>View More</Link>
      </div>
    </div>
  );
};

export default BlogPost;
