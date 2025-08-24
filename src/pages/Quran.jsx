import React, { useEffect, useState } from "react";

export default function Quran() {
  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://alquran.vip/APIs/quranPagesImage")
      .then((res) => res.json())
      .then((data) => {
        setPages(data.pages); // هنا بقى مظبوط
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching Quran pages:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>جاري التحميل...</p>;

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      {pages.map((page) => (
        <div key={page.page_number} style={{ marginBottom: "30px" }}>
          <img
            src={page.page_url}
            alt={`صفحة ${page.page_number}`}
            style={{
              width: "50%",
              border: "1px solid #ddd",
              borderRadius: "8px",
            }}
          />
          <p>صفحة {page.page_number}</p>
        </div>
      ))}
    </div>
  );
}
