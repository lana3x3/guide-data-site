export default function HealthSectorPage() {
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
        قطاع الصحة
      </h1>

      <p>
        يعرض هذا القسم بيانات صحية رسمية من وزارة الصحة وهيئة الإحصاء، تشمل مؤشرات المستشفيات، الكوادر الطبية، والأمراض المزمنة في المملكة.
      </p>

      <ul>
        <li>
          <a
            href="https://www.moh.gov.sa/Ministry/OpenData/Pages/Open-Data-Library.aspx"
            target="_blank"
            rel="noopener noreferrer"
          >
            مكتبة البيانات المفتوحة - وزارة الصحة السعودية
          </a>
        </li>
      </ul>
    </main>
  );
}
