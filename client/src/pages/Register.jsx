import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const API_URL = import.meta.env.VITE_API_URL;

function Register() {
  const { darkMode } = useTheme();
  const isMobile = window.innerWidth < 768;

  const [showPassword, setShowPassword] = useState(false);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${API_URL}/api/users/register`,
        user
      );

      alert(res.data.message);

      setUser({
        name: "",
        email: "",
        password: "",
      });

    } catch (err) {
      alert(
        err.response?.data?.message ||
        "Something went wrong"
      );
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        background:
          "linear-gradient(135deg,#2563eb,#4f46e5,#7c3aed)",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          width: isMobile ? "100%" : "430px",
          background: darkMode ? "#1e293b" : "#ffffff",
          padding: "35px",
          borderRadius: "22px",
          boxShadow: "0 20px 45px rgba(0,0,0,.25)",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "25px",
          }}
        >
          <div style={{ fontSize: "45px" }}>
            ✨
          </div>

          <h1
            style={{
              margin: "10px 0",
              fontSize: "34px",
              color: darkMode ? "#fff" : "#1e293b",
            }}
          >
            Create Account
          </h1>

          <p
            style={{
              color: darkMode ? "#cbd5e1" : "#64748b",
              lineHeight: "1.6",
            }}
          >
            Join Social Media Dashboard
            <br />
            Create your account to get started.
          </p>
        </div>

        <input
          type="text"
          name="name"
          placeholder="👤 Full Name"
          value={user.name}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "15px",
            borderRadius: "12px",
            border: "1px solid #ddd",
            marginBottom: "18px",
            background: darkMode ? "#334155" : "#fff",
            color: darkMode ? "#fff" : "#000",
            fontSize: "16px",
          }}
        />

        <input
          type="email"
          name="email"
          placeholder="📧 Email Address"
          value={user.email}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "15px",
            borderRadius: "12px",
            border: "1px solid #ddd",
            marginBottom: "18px",
            background: darkMode ? "#334155" : "#fff",
            color: darkMode ? "#fff" : "#000",
            fontSize: "16px",
          }}
        />

        <div style={{ position: "relative" }}>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="🔒 Password"
            value={user.password}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "15px",
              borderRadius: "12px",
              border: "1px solid #ddd",
              background: darkMode ? "#334155" : "#fff",
              color: darkMode ? "#fff" : "#000",
              fontSize: "16px",
            }}
          />

          <span
            onClick={() => setShowPassword(!showPassword)}
            style={{
              position: "absolute",
              right: "18px",
              top: "15px",
              cursor: "pointer",
              fontSize: "20px",
            }}
          >
            {showPassword ? "🙈" : "👁️"}
          </span>
        </div><button
          type="submit"
          style={{
            width: "100%",
            padding: "15px",
            marginTop: "25px",
            background: "linear-gradient(90deg,#2563eb,#7c3aed)",
            color: "#fff",
            border: "none",
            borderRadius: "12px",
            cursor: "pointer",
            fontSize: "17px",
            fontWeight: "bold",
            boxShadow: "0 10px 25px rgba(37,99,235,.35)",
          }}
        >
          ✨ Create Account
        </button>

        <div
          style={{
            textAlign: "center",
            marginTop: "25px",
          }}
        >
          <p
            style={{
              color: darkMode ? "#cbd5e1" : "#64748b",
            }}
          >
            Already have an account?
          </p>

          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "#2563eb",
              fontWeight: "bold",
              fontSize: "17px",
            }}
          >
            🔑 Login Now
          </Link>
        </div>

        <hr
          style={{
            margin: "30px 0",
            border: "1px solid",
            borderColor: darkMode ? "#334155" : "#e5e7eb",
          }}
        />

        <div
          style={{
            textAlign: "center",
            color: darkMode ? "#94a3b8" : "#64748b",
            lineHeight: "1.8",
            fontSize: "14px",
          }}
        >
          <h3
            style={{
              marginBottom: "8px",
              color: darkMode ? "#ffffff" : "#1e293b",
            }}
          >
            📱 Social Media Dashboard
          </h3>

          <p>
            Manage Posts • Analytics • Profile
          </p>

          <p>
            © 2026 Developed by
            <br />
            <strong>Raghav Gupta</strong>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Register;