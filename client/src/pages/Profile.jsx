import { useEffect, useState } from "react";
import axios from "axios";
import { useTheme } from "../context/ThemeContext";

const API_URL = import.meta.env.VITE_API_URL;

const user = JSON.parse(localStorage.getItem("user"));

function Profile() {
  const { darkMode } = useTheme();
  const isMobile = window.innerWidth < 768;

  const [totalPosts, setTotalPosts] = useState(0);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const res = await axios.get(`${API_URL}/api/posts`);
      setTotalPosts(res.data.length);
    } catch (err) {
      console.log(err);
    }
  };

  const handleEditProfile = async () => {
    const newName = prompt("Enter New Name", user?.name);

    if (!newName) return;

    try {
      const res = await axios.put(
        `${API_URL}/api/users/update/${user._id}`,
        {
          name: newName,
        }
      );

      localStorage.setItem("user", JSON.stringify(res.data));

      alert("Profile Updated Successfully");

      window.location.reload();
    } catch (err) {
      console.log(err.response?.data || err);
      alert(err.response?.data?.message || "Error Updating Profile");
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
          textAlign: "center",
          marginBottom: "25px",
        }}
      >
        👤 My Profile
      </h2>

      <div
        style={{
          width: isMobile ? "100%" : "400px",
          margin: "auto",
          padding: "25px",
          background: darkMode ? "#1e293b" : "#ffffff",
          color: darkMode ? "#ffffff" : "#1e293b",
          borderRadius: "15px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
        }}
      >
        <div
          style={{
            width: "90px",
            height: "90px",
            borderRadius: "50%",
            background: "#2563eb",
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "32px",
            fontWeight: "bold",
            margin: "0 auto 20px",
          }}
        >
          RG
        </div>

        <h3
          style={{
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          {user?.name}
        </h3>

        <p>
          <strong>📧 Email:</strong> {user?.email}
        </p>

        <p>
          <strong>📝 Total Posts:</strong> {totalPosts}
        </p>

        <button
          onClick={handleEditProfile}
          style={{
            width: "100%",
            marginTop: "20px",
            padding: "12px",
            background: "#2563eb",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "16px",
          }}
        >
          ✏️ Edit Profile
        </button>
      </div>

      <p
        style={{
          textAlign: "center",
          marginTop: "30px",
          color: darkMode ? "#cbd5e1" : "#64748b",
        }}
      >
        © 2026 Social Media Dashboard <br />
        Developed by <strong>Raghav Gupta</strong>
      </p>
    </div>
  );
}

export default Profile;