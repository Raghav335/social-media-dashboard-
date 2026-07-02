import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const API_URL = import.meta.env.VITE_API_URL;

function Login() {
  const navigate = useNavigate();
  const { darkMode } = useTheme();

  const [showPassword, setShowPassword] = useState(false);

  const [user, setUser] = useState({
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
        `${API_URL}/api/users/login`,
        user
      );

      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      alert("Login Successful");

      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(135deg,#2563eb,#4f46e5,#7c3aed)",
        padding: "20px",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          width: "430px",
          background: "rgba(255,255,255,.95)",
          backdropFilter: "blur(15px)",
          padding: "40px",
          borderRadius: "25px",
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
            🚀
          </div>

          <h1
            style={{
              margin: "10px 0",
              fontSize: "34px",
              color: "#1e293b",
            }}
          >
            Welcome Back
          </h1>

          <p
            style={{
              color: "#64748b",
              lineHeight: "1.6",
            }}
          >
            Login to Social Media Dashboard
            <br />
            and continue your journey.
          </p>
        </div>

        <label
          style={{
            fontWeight: "bold",
          }}
        >
          📧 Email Address
        </label>

        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Enter Email"
          style={{
            width: "100%",
            padding: "15px",
            borderRadius: "12px",
            border: "1px solid #ddd",
            marginTop: "8px",
            marginBottom: "20px",
            fontSize: "15px",
          }}
        />

        <label
          style={{
            fontWeight: "bold",
          }}
        >
          🔒 Password
        </label>

        <div
          style={{
            position: "relative",
          }}
        >
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={user.password}
            onChange={handleChange}
            placeholder="Enter Password"
            style={{
              width: "100%",
              padding: "15px",
              borderRadius: "12px",
              border: "1px solid #ddd",
              fontSize: "15px",
            }}
          />

          <span
            onClick={() =>
              setShowPassword(!showPassword)
            }
            style={{
              position: "absolute",
              right: "18px",
              top: "15px",
              cursor: "pointer",
              fontSize: "20px",
            }}
          >
            {showPassword ? "🙈" : "👁️"}
          </span></div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "15px",
            marginBottom: "25px",
            fontSize: "14px",
          }}
        >
          <label
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              cursor: "pointer",
            }}
          >
            <input type="checkbox" />
            Remember Me
          </label>

          <span
            style={{
              color: "#2563eb",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Forgot Password?
          </span>
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "15px",
            background:
              "linear-gradient(90deg,#2563eb,#7c3aed)",
            color: "#fff",
            border: "none",
            borderRadius: "12px",
            cursor: "pointer",
            fontSize: "17px",
            fontWeight: "bold",
            boxShadow: "0 10px 25px rgba(37,99,235,.35)",
          }}
        >
          🚀 Login to Dashboard
        </button>

        <div
          style={{
            textAlign: "center",
            marginTop: "30px",
          }}
        >
          <p
            style={{
              color: "#64748b",
            }}
          >
            Don't have an account?
          </p>

          <Link
            to="/register"
            style={{
              textDecoration: "none",
              color: "#2563eb",
              fontWeight: "bold",
              fontSize: "17px",
            }}
          >
            ✨ Create New Account
          </Link>
        </div>

        <hr
          style={{
            margin: "30px 0",
            border: "1px solid #e5e7eb",
          }}
        />

        <div
          style={{
            textAlign: "center",
            color: "#64748b",
            lineHeight: "1.8",
            fontSize: "14px",
          }}
        >
          <h3
            style={{
              marginBottom: "8px",
              color: "#1e293b",
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

export default Login;