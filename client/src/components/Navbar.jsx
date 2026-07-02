function Navbar() {
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div
      style={{
        height: "70px",
        background: "#ffffff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 25px",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        marginBottom: "20px",
      }}
    >
      <div>
        <h2
          style={{
            margin: 0,
            color: "#1e293b",
          }}
        >
          📱 Social Media Dashboard
        </h2>

        <small style={{ color: "#64748b" }}>
          {today}
        </small>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
        }}
      >
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

        <span
          style={{
            fontWeight: "600",
            color: "#1e293b",
          }}
        >
          Raghav Gupta
        </span>
      </div>
    </div>
  );
}

export default Navbar;