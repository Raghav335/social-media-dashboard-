import { useState } from "react";
import axios from "axios";
import { useTheme } from "../context/ThemeContext";

const API_URL = import.meta.env.VITE_API_URL;

function CreatePost() {
  const { darkMode } = useTheme();
  const isMobile = window.innerWidth < 768;

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
        padding: isMobile ? "20px" : "30px",
        background: darkMode ? "#0f172a" : "#eef2ff",
        minHeight: "100vh",
      }}
    >
      <h2
        style={{
          color: darkMode ? "#fff" : "#1e293b",
          marginBottom: "20px",
          textAlign: "center",
        }}
      >
        ✍️ Create New Post
      </h2>

      <form
        onSubmit={handleSubmit}
        style={{
          background: darkMode ? "#1e293b" : "#ffffff",
          color: darkMode ? "#fff" : "#1e293b",
          padding: "25px",
          borderRadius: "15px",
          boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
          maxWidth: "700px",
          margin: "auto",
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
            background: darkMode ? "#334155" : "#fff",
            color: darkMode ? "#fff" : "#000",
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
            background: darkMode ? "#334155" : "#fff",
            color: darkMode ? "#fff" : "#000",
          }}
        />

        <h3
          style={{
            color: darkMode ? "#fff" : "#1e293b",
          }}
        >
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
            background: darkMode ? "#334155" : "#fff",
            color: darkMode ? "#fff" : "#000",
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
            background: darkMode ? "#334155" : "#fff",
            color: darkMode ? "#fff" : "#000",
          }}
        />

        {scheduleDate && scheduleTime && (
          <div
            style={{
              background: darkMode ? "#334155" : "#f8fafc",
              color: darkMode ? "#fff" : "#1e293b",
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
            width: isMobile ? "100%" : "220px",
            padding: "12px",
            background: "#2563eb",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          🚀 Publish Post
        </button>
      </form>
    </div>
  );
}

export default CreatePost;


