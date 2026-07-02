import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

function AnalyticsChart({ totalPosts, totalLikes }) {
  const barData = [
    {
      name: "Posts",
      value: totalPosts,
    },
  ];

  const pieData = [
    {
      name: "Posts",
      value: totalPosts,
    },
    {
      name: "Likes",
      value: totalLikes,
    },
  ];

  const COLORS = ["#2563eb", "#16a34a"];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(420px, 1fr))",
        gap: "25px",
        marginTop: "35px",
        width: "100%",
      }}
    >
      {/* Bar Chart */}

      <div
        style={{
          background: "#fff",
          borderRadius: "15px",
          padding: "20px",
          boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
          height: "380px",
        }}
      >
        <h3
          style={{
            textAlign: "center",
            marginBottom: "15px",
          }}
        >
          📊 Total Posts
        </h3>

        <ResponsiveContainer width="100%" height="90%">
          <BarChart data={barData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />

            <Bar
              dataKey="value"
              fill="#2563eb"
              radius={[10, 10, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart */}

      <div
        style={{
          background: "#fff",
          borderRadius: "15px",
          padding: "20px",
          boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
          height: "380px",
        }}
      >
        <h3
          style={{
            textAlign: "center",
            marginBottom: "15px",
          }}
        >
          ❤️ Posts vs Likes
        </h3>

        <ResponsiveContainer width="100%" height="90%">
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              outerRadius={120}
              label
            >
              {pieData.map((entry, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Legend />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default AnalyticsChart;