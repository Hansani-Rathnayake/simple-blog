import { Link } from "react-router-dom";
import './BlogPost.css';

const BlogPost = ({ post, onDelete }) => {
  return (
    <div className="blog-post">
      <h2>{post.title}</h2>
      <p>{post.content.substring(0, 100)}...</p>
      <button onClick={() => onDelete(post.id)}>Delete</button>
      <Link to={`/edit/${post.id}`}>Edit</Link>
    </div>
  );
};

export default BlogPost;
