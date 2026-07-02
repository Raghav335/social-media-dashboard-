
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";

import axios from "axios";
import AnalyticsChart from "../components/AnalyticsChart";
import Navbar from "../components/Navbar";

const API_URL = import.meta.env.VITE_API_URL;

function Analytics() {
  const [totalPosts, setTotalPosts] = useState(0);
  const [totalLikes, setTotalLikes] = useState(0);

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const fetchAnalytics = async () => {
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
        background: "#eef2ff",
        minHeight: "100vh",
        padding: "40px",
      }}
    >
      <Navbar />

      <div
  style={{
    paddingTop: "60px",
    textAlign: "center",
  }}
>
        <h1
  style={{
    color: "#1e293b",
    fontSize: "56px",
    fontWeight: "bold",
    marginBottom: "15px",
    lineHeight: "1.2",
  }}
>
          📊 Analytics Dashboard
        </h1>

        <p
  style={{
    color: "#64748b",
    fontSize: "18px",
    marginTop: "0",
    marginBottom: "40px",
  }}
>
  Monitor posts, likes and overall engagement through interactive analytics.
</p>

        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            justifyContent: "center",
            marginBottom: "30px",

          }}
        >
          <div
            style={{
              background: "#2563eb",
              color: "white",
              padding: "20px",
              borderRadius: "12px",
              width: "220px",
              textAlign: "center",
            }}
          >
            <h3>Total Posts</h3>
            <h1>{totalPosts}</h1>
          </div>

          <div
            style={{
              background: "#16a34a",
              color: "white",
              padding: "20px",
              borderRadius: "12px",
              width: "220px",
              textAlign: "center",
            }}
          >
            <h3>Total Likes</h3>
            <h1>{totalLikes}</h1>
          </div>
        </div>

        <AnalyticsChart
          totalPosts={totalPosts}
          totalLikes={totalLikes}
        />

        <div
  style={{
    marginTop: "30px",
    background: "#fff",
    borderRadius: "15px",
    padding: "25px",
    boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
  }}
>
  <h2 style={{ color: "#1e293b" }}>📋 Analytics Summary</h2>

  <p>📝 Total Posts Created: {totalPosts}</p>

  <p>❤️ Total Likes Received: {totalLikes}</p>

  <p>📈 Average Likes Per Post: {totalPosts ? (totalLikes / totalPosts).toFixed(1) : 0}</p>

  <p>🚀 Dashboard Status: Active</p>
</div>

<div
  style={{
    textAlign: "center",
    marginTop: "30px",
  }}
>
  <Link to="/dashboard">
    <button
      style={{
        background: "#2563eb",
        color: "#fff",
        border: "none",
        padding: "12px 25px",
        borderRadius: "8px",
        cursor: "pointer",
        fontSize: "16px",
        fontWeight: "bold",
      }}
    >
      🏠 Back to Dashboard
    </button>
  </Link>
</div>
      </div>
    </div>
  );
}

export default Analytics;