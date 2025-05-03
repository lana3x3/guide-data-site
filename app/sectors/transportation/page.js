export default function TransportationSectorPage() {
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
        قطاع النقل
      </h1>

      <p>
        يعرض هذا القسم بيانات النقل من هيئة النقل العامة، بما في ذلك أعداد الرحلات، مؤشرات النقل العام، بيانات الشحن، وتوزيع البنية التحتية للنقل في المملكة.
      </p>

      <ul>
        <li>
          <a
            href="https://tga.gov.sa/KnowledgeCenter/OpenData/OpenDataCollection"
            target="_blank"
            rel="noopener noreferrer"
          >
            مركز البيانات المفتوحة - هيئة النقل العامة
          </a>
        </li>
      </ul>
    </main>
  );
}

