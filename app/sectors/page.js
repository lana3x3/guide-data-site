// app/sectors/page.js

"use client";
import Link from 'next/link';

const sectors = [
  { title: "الصحة", description: "بيانات عن المستشفيات، الكوادر الطبية، والمؤشرات الصحية.", link: "/sectors/health" },
  { title: "التعليم", description: "بيانات عن التعليم والمدارس والطلاب في المملكة.", link: "/sectors/education" },
  { title: "النقل", description: "بيانات عن وسائل النقل، البنية التحتية، والطرق.", link: "/sectors/transportation" },
  { title: "السياحة", description: "إحصاءات عن الزوار، الأنشطة السياحية، والمعالم.", link: "/sectors/tourism" },
  { title: "الأعمال", description: "تحليل بيانات التجارة، الشركات، والمؤشرات الاقتصادية.", link: "/sectors/commerce" },
  { title: "التطبيقات", description: "تطبيقات وأدوات مرتبطة بالبيانات الذكية.", link: "/sectors/apps" }
];


export default function SectorsPage() {
  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        background: "#eef2f5",
        minHeight: "100vh",
        padding: "3rem 2rem",
        textAlign: "center"
      }}
    >
      <h1 style={{ fontSize: "2.5rem", marginBottom: "2rem", color: "#2c5364" }}>القطاعات الإحصائية</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "1.5rem",
          maxWidth: "1000px",
          margin: "0 auto"
        }}
      >
        {sectors.map((sector, index) => (
          <Link key={index} href={sector.link} style={{ textDecoration: 'none' }}>
            <div
              style={{
                background: "#fff",
                padding: "1.5rem",
                borderRadius: "10px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                transition: "0.3s"
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <h2 style={{ color: "#203a43" }}>{sector.title}</h2>
              <p style={{ color: "#555" }}>{sector.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
