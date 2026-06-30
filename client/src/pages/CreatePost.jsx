


import { useState } from "react";

import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

function CreatePost() {
  const [post, setPost] = useState({
    title: "",
    content: "",
  });

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await axios.post(`${API_URL}/api/posts`, {



      username: "Raghav Gupta",
      caption: post.content,
      image: "",
    });

    alert("Post Created Successfully");

    setPost({
      title: "",
      content: "",
    });

  } catch (err) {
    alert("Error Creating Post");
    console.log(err);
  }
};

  return (
    <div style={{ padding: "30px" }}>
      <h2>Create New Post</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Post Title"
          value={post.title}
          onChange={(e) =>
            setPost({ ...post, title: e.target.value })
          }
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
          }}
        />

        <textarea
          placeholder="Write your post..."
          value={post.content}
          onChange={(e) =>
            setPost({ ...post, content: e.target.value })
          }
          rows="6"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
          }}
        />

        <button
          type="submit"
          style={{
            padding: "10px 20px",
            background: "#2563eb",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
        >
          Create Post
        </button>
      </form>
    </div>
  );
}

export default CreatePost;