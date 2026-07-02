import { useEffect, useState } from "react";
import axios from "axios";
import { useTheme } from "../context/ThemeContext";

const API_URL = import.meta.env.VITE_API_URL;

function AllPosts() {
  const { darkMode } = useTheme();
  const isMobile = window.innerWidth < 768;

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

  const updatePost = async (id, newCaption) => {
    try {
      await axios.put(`${API_URL}/api/posts/${id}`, {
        caption: newCaption,
      });

      alert("Post Updated Successfully");
      fetchPosts();
    } catch (err) {
      console.log(err);
      alert("Error Updating Post");
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
    <div
      style={{
        padding: isMobile ? "20px" : "30px",
        background: darkMode ? "#0f172a" : "#eef2ff",
        minHeight: "100vh",
      }}
    >
      <h2
        style={{
          color: darkMode ? "#ffffff" : "#1e293b",
          fontSize: isMobile ? "28px" : "34px",
          marginBottom: "20px",
          textAlign: "center",
        }}
      >
        📰 All Posts
      </h2>

      <input
        type="text"
        placeholder="🔍 Search Posts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          margin: "20px 0",
          borderRadius: "8px",
          border: "1px solid #ccc",
          background: darkMode ? "#1e293b" : "#ffffff",
          color: darkMode ? "#ffffff" : "#000",
          boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
          fontSize: "16px",
        }}
      />

      {posts.length === 0 ? (
        <p
          style={{
            color: darkMode ? "#fff" : "#000",
            textAlign: "center",
          }}
        >
          No Posts Found
        </p>
      ) : (
        posts
          .filter((post) =>
            post.caption
              .toLowerCase()
              .includes(search.toLowerCase())
          )
          .map((post) => (
            <div
              key={post._id}
              style={{
                border: "1px solid #ddd",
                padding: "20px",
                marginBottom: "20px",
                borderRadius: "12px",
                background: darkMode ? "#1e293b" : "#ffffff",
                color: darkMode ? "#ffffff" : "#1e293b",
                boxShadow:
                  "0 8px 20px rgba(0,0,0,0.08)",
              }}
            >
              <h3
                style={{
                  marginBottom: "10px",
                }}
              >
                👤 {post.username}
              </h3>

              <p>{post.caption}</p>

              <small>
                ❤️ {post.likes} Likes
              </small>

              <br />

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "10px",
                  marginTop: "15px",
                }}
              ><button
                  onClick={() => likePost(post._id)}
                  style={{
                    background: "#2563eb",
                    color: "#fff",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                    padding: "10px",
                    width: isMobile ? "100%" : "120px",
                    fontWeight: "bold",
                  }}
                >
                  ❤️ Like
                </button>

                <button
                  onClick={() => {
                    const newCaption = prompt(
                      "Edit your post",
                      post.caption
                    );

                    if (newCaption) {
                      updatePost(post._id, newCaption);
                    }
                  }}
                  style={{
                    background: "#16a34a",
                    color: "#fff",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                    padding: "10px",
                    width: isMobile ? "100%" : "120px",
                    fontWeight: "bold",
                  }}
                >
                  ✏️ Edit
                </button>

                <button
                  onClick={() => deletePost(post._id)}
                  style={{
                    background: "#dc2626",
                    color: "#fff",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                    padding: "10px",
                    width: isMobile ? "100%" : "120px",
                    fontWeight: "bold",
                  }}
                >
                  🗑 Delete
                </button>
              </div>
            </div>
          ))
      )}
    </div>
  );
}

export default AllPosts;