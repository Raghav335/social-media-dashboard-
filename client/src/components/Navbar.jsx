function Navbar() {
  return (
    <div
      style={{
        height: "60px",
        background: "#ffffff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 20px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      }}
    >
      <h2>Social Media Dashboard</h2>

      <div>
        <span style={{ marginRight: "20px" }}>🔔</span>
        <span>👤 Raghav</span>
      </div>
    </div>
  );
}

export default Navbar;