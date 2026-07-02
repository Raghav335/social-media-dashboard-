import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

import Navbar from "../components/Navbar";



function Dashboard() {
  const isMobile = window.innerWidth < 768;
const darkMode = localStorage.getItem("theme") === "dark";

  const [totalPosts, setTotalPosts] = useState(0);
const [totalLikes, setTotalLikes] = useState(0);

useEffect(() => {
  fetchDashboardData();
}, []);

const fetchDashboardData = async () => {
  try {
    const res = await axios.get(`${API_URL}/api/posts`);

    setTotalPosts(res.data.length);

    const likes = res.data.reduce(
      (sum, post) => sum + post.likes,
      0
    );

    setTotalLikes(likes);
  } catch (err) {
    console.log(err);
  }
};
  return (
    <div
  style={{
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    minHeight: "100vh",
  }}
>
      {/* Sidebar */}
      <div
        style={{
          width: isMobile ? "100%" : "250px",
          background: "#0f172a",
          color: "white",
          padding: isMobile ? "20px" : "30px 20px",
        }}
      >
        <h2
  style={{
    color: "white",
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "28px",
    fontWeight: "bold",
  }}
>
  📊 Dashboard
</h2>

        <hr />

        <Link
  to="/dashboard"
  style={{ color: "white", textDecoration: "none" }}
>
  <p
  style={{
    padding: "12px",
    borderRadius: "8px",
    marginBottom: "10px",
    background: "#1e293b",
  }}
>
  🏠 Home
</p>
</Link>

        <Link
  to="/create-post"
  style={{ color: "white", textDecoration: "none" }}
>
  <p>➕ Create Post</p>
</Link>
        <Link
  to="/all-posts"
  style={{ color: "white", textDecoration: "none" }}
>
  <p>📰 All Posts</p>
</Link>
        <Link
  to="/profile"
  style={{ color: "white", textDecoration: "none" }}
>
  <p>👤 Profile</p>
</Link>
       <Link
  to="/analytics"
  style={{ color: "white", textDecoration: "none" }}
>
  <p>📊 Analytics</p>
</Link>

<p
  onClick={() => {
    if (window.confirm("Are you sure you want to logout?")) {
      localStorage.clear();
      window.location.href = "/";
    }
  }}
  style={{
    cursor: "pointer",
    color: "white",
  }}
>
  🚪 Logout
</p>
      </div>

      {/* Main Content */}
      <div
        style={{
          flex: 1,
          background: darkMode ? "#0f172a" : "#eef2ff",
padding: isMobile ? "20px" : "40px",
        }}
      >
        <Navbar />

        <div style={{ paddingTop: "60px" }}>
          <h1
  style={{
    margin: 0,
    fontSize: isMobile ? "30px" : "42px",
    fontWeight: "bold",
    color: darkMode ? "#fff" : "#1e293b",
  }}
>
            Welcome to Social Media Dashboard
          </h1>

          <p
  style={{
    marginTop: "20px",
    fontSize: "18px",
    color: darkMode ? "#cbd5e1" : "#475569",
    maxWidth: "700px",
    marginLeft: "auto",
    marginRight: "auto",
    lineHeight: "1.6",
  }}
>
            Manage your posts, track engagement, and analyze your social media performance in one place.
          </p>

          <div
  style={{
    display: "flex",
    gap: "25px",
    marginTop: "40px",
    flexWrap: "wrap",
    justifyContent: "space-between",
  }}
>
  <div
    style={{
      background: "#2563eb",
      color: "white",
      padding: "25px",
      borderRadius: "15px",
      width: isMobile ? "100%" : "230px",
      textAlign: "center",
      boxShadow: "0 8px 20px rgba(0,0,0,0.15)",

      transition: "0.3s",
cursor: "pointer",
    }}
  >
    <h3 style={{ marginBottom: "10px", fontSize: "20px" }}>
      📝 Total Posts
    </h3>

    <h2
      style={{
        fontSize: "38px",
        margin: 0,
        fontWeight: "bold",
      }}
    >
      {totalPosts}
    </h2>
  </div>

  <div
    style={{
      background: "#16a34a",
      color: "white",
      padding: "25px",
      borderRadius: "15px",
      width: isMobile ? "100%" : "230px",
      textAlign: "center",
      boxShadow: "0 8px 20px rgba(0,0,0,0.15)",

      transition: "0.3s",
cursor: "pointer",
    }}
  >
    <h3 style={{ marginBottom: "10px", fontSize: "20px" }}>
      ❤️ Total Likes
    </h3>

    <h2
      style={{
        fontSize: "38px",
        margin: 0,
        fontWeight: "bold",
      }}
    >
      {totalLikes}
    </h2>
  </div>

  <div
    style={{
      background: "#ea580c",
      color: "white",
      padding: "25px",
      borderRadius: "15px",
      width: isMobile ? "100%" : "230px",
      textAlign: "center",
      boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
      transition: "0.3s",
cursor: "pointer",
    }}
  >
    <h3 style={{ marginBottom: "10px", fontSize: "20px" }}>
      👤 Logged In User
    </h3>

    <h2
      style={{
        fontSize: "38px",
        margin: 0,
        fontWeight: "bold",
      }}
    >
      1
    </h2>
  </div>
</div>

<div
  style={{
    marginTop: "30px",
    background: "#ffffff",
    padding: "25px",
    borderRadius: "15px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
    transition: "0.3s",
cursor: "pointer",
  }}
>
  <h2 style={{ marginBottom: "20px", color: "#1e293b" }}>
    🚀 Quick Actions
  </h2>

  <p
  style={{
    color: "#64748b",
    marginTop: "-10px",
    marginBottom: "20px",
  }}
>
  Access frequently used features quickly.
</p> 

  <div
    style={{
      display: "flex",
flexDirection: isMobile ? "column" : "row",
      gap: "15px",
      flexWrap: "wrap",
    }}
  >
    <Link to="/create-post">
      <button
        style={{
          padding: "12px 20px",

          width: isMobile ? "100%" : "170px",
height: "50px",
fontWeight: "bold",
fontSize: "15px",
          background: "#2563eb",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        ➕ Create Post
      </button>
    </Link>

    <Link to="/all-posts">
      <button
        style={{
          padding: "12px 20px",

          width: isMobile ? "100%" : "170px",
height: "50px",
fontWeight: "bold",
fontSize: "15px",
          background: "#16a34a",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        📰 All Posts
      </button>
    </Link>

    <Link to="/analytics">
      <button
        style={{
          padding: "12px 20px",
          width: isMobile ? "100%" : "170px",
height: "50px",
fontWeight: "bold",
fontSize: "15px",
          background: "#ea580c",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        📊 Analytics
      </button>
    </Link>

    <Link to="/profile">
      <button
        style={{
          padding: "12px 20px",
          width: isMobile ? "100%" : "170px",
height: "50px",
fontWeight: "bold",
fontSize: "15px",
          background: "#7c3aed",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        👤 Profile
      </button>
    </Link>
  </div>
</div>

<footer
  style={{
    textAlign: "center",
    marginTop: "40px",
    color: "#64748b",
    fontSize: "14px",
    paddingBottom: "20px",
  }}
>
  © 2026 Social Media Dashboard
  <br />
  Developed by <strong>Raghav Gupta</strong>
</footer>


        </div>
      </div>
    </div>
  );
}

export default Dashboard;