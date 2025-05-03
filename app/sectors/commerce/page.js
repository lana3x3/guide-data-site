export default function CommerceSectorPage() {
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
        قطاع التجارة والأعمال
      </h1>

      <p>
        يعرض هذا القسم بيانات تجارية رسمية صادرة عن وزارة التجارة، تشمل مؤشرات السوق، السجلات التجارية، وتوزيع الأنشطة الاقتصادية.
      </p>

      <ul>
        <li>
          <a
            href="https://mc.gov.sa/ar/OpenData/Pages/default.aspx"
            target="_blank"
            rel="noopener noreferrer"
          >
            صفحة البيانات المفتوحة - وزارة التجارة السعودية
          </a>
        </li>
      </ul>
    </main>
  );
}


  