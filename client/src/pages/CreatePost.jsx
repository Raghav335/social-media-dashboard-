


import { useState } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

function CreatePost() {
  const [post, setPost] = useState({
    title: "",
    content: "",
  });

  const [scheduleDate, setScheduleDate] = useState("");
  const [scheduleTime, setScheduleTime] = useState("");

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

      setScheduleDate("");
      setScheduleTime("");

    } catch (err) {
      alert("Error Creating Post");
      console.log(err);
    }
  };

  return (
    <div
      style={{
        padding: "30px",
        background: "#eef2ff",
        minHeight: "100vh",
      }}
    >
      <h2
        style={{
          color: "#1e293b",
          marginBottom: "20px",
        }}
      >
        ✍️ Create New Post
      </h2>

      <form
        onSubmit={handleSubmit}
        style={{
          background: "#fff",
          padding: "25px",
          borderRadius: "15px",
          boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
          maxWidth: "700px",
        }}
      >
        <input
          type="text"
          placeholder="Post Title"
          value={post.title}
          onChange={(e) =>
            setPost({ ...post, title: e.target.value })
          }
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            borderRadius: "8px",
            border: "1px solid #ccc",
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
            padding: "12px",
            marginBottom: "20px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />

        <h3 style={{ color: "#1e293b" }}>
          📅 Schedule Post (UI)
        </h3>

        <input
          type="date"
          value={scheduleDate}
          onChange={(e) => setScheduleDate(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />

        <input
          type="time"
          value={scheduleTime}
          onChange={(e) => setScheduleTime(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "20px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />

        {scheduleDate && scheduleTime && (
          <div
            style={{
              background: "#f8fafc",
              padding: "15px",
              borderRadius: "10px",
              marginBottom: "20px",
            }}
          >
            <strong>📌 Scheduled For:</strong>
            <br />
            {scheduleDate} at {scheduleTime}
          </div>
        )}

        <button
          type="submit"
          style={{
            padding: "12px 25px",
            background: "#2563eb",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          🚀 Publish Post
        </button>
      </form>
    </div>
  );
}

export default CreatePost;