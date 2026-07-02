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
    fontSize: "34px",
    marginBottom: "25px",
  }}
>
  👤 My Profile
</h2>

      <div
        style={{
          width: "400px",
          padding: "20px",
          background: "#fff",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          margin: "auto",
boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
transition: "0.3s",
        }}
      >

        <div
  style={{
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    background: "#2563eb",
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "28px",
    fontWeight: "bold",
    margin: "0 auto 20px",
  }}
>
  RG
</div>
        <h3
  style={{
    textAlign: "center",
    color: "#1e293b",
  }}
>
  {user?.name}
</h3>

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
            width: "100%",
marginTop: "20px",
fontWeight: "bold",
fontSize: "16px",
          }}
        >
          Edit Profile
        </button>
      </div>

      <p
  style={{
    textAlign: "center",
    marginTop: "30px",
    color: "#64748b",
  }}
>
  Social Media Dashboard • Developed by <strong>Raghav Gupta</strong>
</p>
    </div>
  );
}

export default Profile;