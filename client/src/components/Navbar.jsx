import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const isMobile = window.innerWidth < 768;

  const { darkMode, setDarkMode } = useTheme();

  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div
      style={{
        height: isMobile ? "auto" : "70px",
        background: darkMode ? "#1e293b" : "#ffffff",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: isMobile ? "15px" : "0 25px",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        marginBottom: "20px",
        gap: isMobile ? "15px" : "0",
      }}
    >
      <div style={{ textAlign: isMobile ? "center" : "left" }}>
        <h2
          style={{
            margin: 0,
            color: darkMode ? "#ffffff" : "#1e293b",
            fontSize: isMobile ? "24px" : "28px",
          }}
        >
          📱 Social Media Dashboard
        </h2>

        <small
          style={{
            color: darkMode ? "#cbd5e1" : "#64748b",
          }}
        >
          {today}
        </small>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "15px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <button
          onClick={() => setDarkMode(!darkMode)}
          style={{
            border: "none",
            background: darkMode ? "#334155" : "#eef2ff",
            color: darkMode ? "#fff" : "#000",
            borderRadius: "8px",
            padding: "8px 12px",
            cursor: "pointer",
            fontSize: "18px",
          }}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

        <span
          style={{
            fontSize: "22px",
            cursor: "pointer",
          }}
        >
          🔔
        </span>

        <div
          style={{
            width: "42px",
            height: "42px",
            borderRadius: "50%",
            background: "#2563eb",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            fontWeight: "bold",
          }}
        >
          RG
        </div>

        {!isMobile && (
          <span
            style={{
              fontWeight: "600",
              color: darkMode ? "#ffffff" : "#1e293b",
            }}
          >
            Raghav Gupta
          </span>
        )}
      </div>
    </div>
  );
}

export default Navbar;