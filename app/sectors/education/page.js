export default function EducationPage() {
  return (
    <main style={{
      padding: "2rem",
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f4f4f4",
      color: "#333",
      minHeight: "100vh"
    }}>
      <div style={{
        maxWidth: "800px",
        margin: "0 auto",
        backgroundColor: "#fff",
        padding: "2rem",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
      }}>
        <h1 style={{ color: "#2c3e50" }}>Education Sector</h1>
        <p>Here you can find data related to schools, universities, and more.</p>
        <ul style={{ lineHeight: "2", paddingLeft: "1rem" }}>
          <li>
            <a href="https://www.stats.gov.sa/en/43" target="_blank" rel="noopener noreferrer" style={{ color: "#0070f3", textDecoration: "underline" }}>
              Saudi Education Statistics
            </a>
          </li>
          <li>
            <a href="https://data.gov.sa/Data/en/dataset/edu-schools" target="_blank" rel="noopener noreferrer" style={{ color: "#0070f3", textDecoration: "underline" }}>
              MOE School Data
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
}

  