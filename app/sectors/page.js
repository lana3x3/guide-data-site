"use client";
import { useState } from "react";
import Link from "next/link";

export default function Sectors() {
  const [searchTerm, setSearchTerm] = useState("");

  const sectors = [
    { name: "Education", slug: "education" },
    { name: "Health", slug: "health" },
    { name: "Commerce", slug: "commerce" },
    { name: "Transportation", slug: "transportation" },
    { name: "Tourism", slug: "tourism" },
  ];

  const filteredSectors = sectors.filter((sector) =>
    sector.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
        color: "#fff",
        minHeight: "100vh",
        padding: "3rem 1rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          padding: "2.5rem",
          borderRadius: "12px",
          boxShadow: "0 6px 16px rgba(0, 0, 0, 0.4)",
          maxWidth: "700px",
          width: "100%",
          textAlign: "center",
          backdropFilter: "blur(6px)",
        }}
      >
        <h1 style={{ fontSize: "2rem", color: "#4fd1c5", marginBottom: "1rem" }}>
          Available Sectors
        </h1>

        <input
          type="text"
          placeholder="Search sectors..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: "0.5rem",
            marginBottom: "1.5rem",
            width: "100%",
            maxWidth: "400px",
            border: "none",
            borderRadius: "6px",
            outline: "none",
          }}
        />

        <ul style={{ listStyle: "none", padding: 0 }}>
          {filteredSectors.map((sector, index) => (
            <li key={index} style={{ margin: "0.5rem 0" }}>
              <Link href={`/sectors/${sector.slug}`} style={{ color: "#4fd1c5", textDecoration: "underline" }}>
                {sector.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
