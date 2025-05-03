export default function HealthPage() {
  return (
    <main
      style={{
        padding: "2rem",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f4f4f4",
        color: "#333",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          backgroundColor: "#fff",
          padding: "2rem",
          borderRadius: "8px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        <h1 style={{ color: "#2c3e50" }}>Health Sector</h1>
        <p style={{ marginBottom: "1rem" }}>
          Explore health-related statistics and datasets in Saudi Arabia.
        </p>
        <ul style={{ lineHeight: "2", paddingLeft: "1rem" }}>
          <li>
            <a
              href="https://www.stats.gov.sa/en/42"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0070f3", textDecoration: "underline" }}
            >
              Saudi Health Statistics
            </a>
          </li>
          <li>
            <a
              href="https://data.gov.sa/Data/en/dataset/moh-statistics"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0070f3", textDecoration: "underline" }}
            >
              MOH Datasets
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
}
