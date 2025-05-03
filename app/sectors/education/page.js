export default function EducationSectorPage() {
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
        قطاع التعليم
      </h1>

      <p>
        يعرض هذا القسم بيانات تعليمية من هيئة تقويم التعليم والتدريب، تشمل مؤشرات الأداء الأكاديمي، نتائج الاختبارات الوطنية، والبيانات المرتبطة بالتعليم العام والجامعي.
      </p>

      <ul>
        <li>
          <a
            href="https://www.etec.gov.sa/ar/page/odata"
            target="_blank"
            rel="noopener noreferrer"
          >
            منصة البيانات المفتوحة - هيئة تقويم التعليم والتدريب
          </a>
        </li>
      </ul>
    </main>
  );
}


  