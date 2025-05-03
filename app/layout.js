export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>دليل البيانات الذكي</title>
        <meta name="description" content="Explore official data sources by category and region." />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body style={{ fontFamily: "Arial, sans-serif", padding: "1rem", backgroundColor: "#f4f4f4", color: "#222" }}>
        <nav style={{ marginBottom: "1rem" }}>
          <a href="/" style={{ marginRight: "1rem" }}>Home</a>
          <a href="/sectors" style={{ marginRight: "1rem" }}>Sectors</a>
          <a href="/about">About</a>
        </nav>
        {children}
      </body>
    </html>
  );
}


