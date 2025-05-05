'use client';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Papa from 'papaparse';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend);

export default function Dashboard() {
  const [labels, setLabels] = useState([]);
  const [values, setValues] = useState([]);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        const parsed = results.data;
        const labelCol = Object.keys(parsed[0])[0]; // أول عمود كـ labels
        const valueCol = Object.keys(parsed[0])[1]; // ثاني عمود كـ values
        setLabels(parsed.map((row) => row[labelCol]));
        setValues(parsed.map((row) => Number(row[valueCol])));
      },
    });
  };

  const chartData = {
    labels,
    datasets: [
      {
        label: 'القيم من CSV',
        data: values,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.4)',
        fill: false,
        tension: 0.3,
      },
    ],
  };

  return (
    <>
      <Navbar />
      <main className="p-6">
        <h1 className="text-2xl font-bold mb-4">رسم بياني من ملف CSV</h1>
        <input
          type="file"
          accept=".csv"
          onChange={handleFileUpload}
          className="mb-6 p-2 border rounded"
        />
        {labels.length > 0 && <Line data={chartData} />}
      </main>
    </>
  );
}
