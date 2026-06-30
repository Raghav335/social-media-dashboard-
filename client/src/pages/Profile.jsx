import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const user = JSON.parse(localStorage.getItem("user"));

function Profile() {
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
    <div style={{ padding: "30px" }}>
      <h2>My Profile</h2>

      <div
        style={{
          width: "400px",
          padding: "20px",
          background: "#fff",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        }}
      >
        <h3>👤 {user?.name}</h3>

        <p>
          <strong>Email:</strong> {user?.email}
        </p>

        <p>
          <strong>Total Posts:</strong> {totalPosts}
        </p>

        <button
          onClick={handleEditProfile}
          style={{
            padding: "10px 20px",
            background: "#2563eb",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Edit Profile
        </button>
      </div>
    </div>
  );
}

export default Profile;