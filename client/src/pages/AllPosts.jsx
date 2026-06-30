import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

function AllPosts() {
  const [posts, setPosts] = useState([]);

  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const res = await axios.get(`${API_URL}/api/posts`);
      setPosts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const likePost = async (id) => {
  try {
    await axios.put(`${API_URL}/api/posts/like/${id}`);

    fetchPosts();
  } catch (err) {
    console.log(err);
    alert("Error Liking Post");
  }
};


  const deletePost = async (id) => {
  try {
    await axios.delete(`${API_URL}/api/posts/${id}`);

    alert("Post Deleted Successfully");

    fetchPosts();
  } catch (err) {
    console.log(err);
    alert("Error Deleting Post");
  }
};

  return (
    <div style={{ padding: "30px" }}>
      <h2>All Posts</h2>
      <input
  type="text"
  placeholder="🔍 Search Posts..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  style={{
    width: "100%",
    padding: "10px",
    margin: "20px 0",
    borderRadius: "5px",
    border: "1px solid #ccc",
  }}
/>

      {posts.length === 0 ? (
        <p>No Posts Found</p>
      ) : (
        posts
  .filter((post) =>
    post.caption.toLowerCase().includes(search.toLowerCase())
  )
  .map((post) => (
          <div
            key={post._id}
            style={{
              border: "1px solid #ddd",
              padding: "15px",
              marginBottom: "15px",
              borderRadius: "8px",
              background: "#fff",
            }}
          >
            <h3>{post.username}</h3>
            <p>{post.caption}</p>
            <small>❤️ {post.likes} Likes</small>
            <button
  onClick={() => likePost(post._id)}
  style={{
    marginTop: "10px",
    marginRight: "10px",
    padding: "8px 15px",
    background: "#2563eb",
    color: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
  }}
>
  ❤️ Like
</button>

            <button
  onClick={() => {
    const newCaption = prompt("Edit your post", post.caption);

    if (newCaption) {
      updatePost(post._id, newCaption);
    }
  }}
  style={{
    marginTop: "10px",
    marginRight: "10px",
    padding: "8px 15px",
    background: "#2563eb",
    color: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
  }}
>
  ✏️ Edit
</button>

            <button
  onClick={() => deletePost(post._id)}
  style={{
    marginTop: "10px",
    padding: "8px 15px",
    background: "red",
    color: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
  }}
>
  🗑 Delete
</button>
          </div>
        ))
      )}
    </div>
  );
}

export default AllPosts;