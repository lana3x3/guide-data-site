"use client";
import { useEffect, useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from 'recharts';

export default function DashboardPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // البيانات مباشرة داخل الكود
    const populationData = [
      { region: "الرياض", saudis: 6143095, non_saudis: 2403365 },
      { region: "مكة المكرمة", saudis: 6191062, non_saudis: 2790505 },
      { region: "الشرقية", saudis: 3410766, non_saudis: 2130656 },
      { region: "المدينة المنورة", saudis: 1866718, non_saudis: 670759 },
      { region: "القصيم", saudis: 1278162, non_saudis: 297413 },
      { region: "عسير", saudis: 1876216, non_saudis: 276457 },
      { region: "تبوك", saudis: 847402, non_saudis: 164475 },
      { region: "حائل", saudis: 650213, non_saudis: 80934 },
      { region: "الباحة", saudis: 462256, non_saudis: 29298 },
      { region: "نجران", saudis: 541201, non_saudis: 91725 },
      { region: "جازان", saudis: 1662346, non_saudis: 63484 },
      { region: "الجوف", saudis: 468748, non_saudis: 63203 },
      { region: "الحدود الشمالية", saudis: 344264, non_saudis: 42997 },
      { region: "الباحة", saudis: 456368, non_saudis: 23553 }
    ];
    setData(populationData);
  }, []);

  return (
    <main style={{ padding: '2rem', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2rem', color: '#4fd1c5' }}>لوحة البيانات الذكية</h1>
      <p>مقارنة عدد السعوديين وغير السعوديين حسب المنطقة (تعداد 2022)</p>

      <ResponsiveContainer width="100%" height={500}>
        <BarChart data={data} margin={{ top: 30, right: 30, left: 20, bottom: 100 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="region" angle={-45} textAnchor="end" interval={0} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="saudis" fill="#3182CE" name="سعوديين" />
          <Bar dataKey="non_saudis" fill="#E53E3E" name="غير سعوديين" />
        </BarChart>
      </ResponsiveContainer>
    </main>
  );
}
