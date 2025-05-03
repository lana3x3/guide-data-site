export default function TourismSectorPage() {
  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        background: "#eef2f5",
        minHeight: "100vh",
        padding: "3rem 2rem",
        maxWidth: "800px",
        margin: "0 auto",
        lineHeight: "1.8"
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem", color: "#2c5364" }}>
        قطاع السياحة
      </h1>

      <p>
        يحتوي هذا القسم على بيانات سياحية رسمية من وزارة السياحة، تشمل مؤشرات الزوار، إنفاق السياح، أنواع الأنشطة السياحية، وتوزيع المنشآت السياحية في مناطق المملكة.
      </p>

      <ul>
        <li>
          <a
            href="https://mt.gov.sa/tic/open-data"
            target="_blank"
            rel="noopener noreferrer"
          >
            منصة البيانات المفتوحة - وزارة السياحة السعودية
          </a>
        </li>
      </ul>
    </main>
  );
}
