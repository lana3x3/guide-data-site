export default function Home() {
  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
        color: "#fff",
        minHeight: "100vh",
        padding: "3rem 1rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          padding: "2.5rem",
          borderRadius: "12px",
          boxShadow: "0 6px 16px rgba(0, 0, 0, 0.4)",
          maxWidth: "700px",
          width: "100%",
          textAlign: "center",
          backdropFilter: "blur(6px)",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", color: "#4fd1c5", marginBottom: "1rem" }}>
          دليل البيانات الذكي
        </h1>
        <p style={{ fontSize: "1.2rem", color: "#eee", marginBottom: "1.5rem" }}>
          Explore official data sources by sector and region.
        </p>
        <ul style={{ listStyle: "none", padding: 0, lineHeight: "2rem" }}>
          <li>• Browse data by sector (Health, Education, Commerce...)</li>
          <li>• Search using smart filters and keywords</li>
          <li>• Direct access to trusted government sources</li>
        </ul>
      </div>
    </main>
  );
}
