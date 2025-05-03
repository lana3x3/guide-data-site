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

export default function DataDashboardPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const populationData = [
      { region: "الرياض", saudis: 6143095, non_saudis: 2403365 },
      { region: "مكة", saudis: 6191062, non_saudis: 2790505 },
      { region: "الشرقية", saudis: 3410766, non_saudis: 2130656 },
      { region: "المدينة", saudis: 1866718, non_saudis: 670759 },
      { region: "القصيم", saudis: 1278162, non_saudis: 297413 },
      { region: "عسير", saudis: 1876216, non_saudis: 276457 },
      { region: "تبوك", saudis: 847402, non_saudis: 164475 },
      { region: "حائل", saudis: 650213, non_saudis: 80934 },
      { region: "نجران", saudis: 541201, non_saudis: 91725 },
      { region: "جازان", saudis: 1662346, non_saudis: 63484 },
    ];
    setData(populationData);
  }, []);

  return (
    <main
      style={{
        padding: "2rem",
        backgroundColor: "#f4f4f4",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif"
      }}
    >
      <h1 style={{ color: "#2c5364", marginBottom: "1rem", textAlign: "center" }}>
        لوحة البيانات السكانية
      </h1>

      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="region" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="saudis" fill="#4f81bd" name="سعوديين" />
          <Bar dataKey="non_saudis" fill="#c0504d" name="غير سعوديين" />
        </BarChart>
      </ResponsiveContainer>
    </main>
  );
}

