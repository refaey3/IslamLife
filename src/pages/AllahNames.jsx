import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 15px;
  padding: 20px;
  direction: rtl;
`;

const Card = styled.div`
  background: #f9f9f9;
  padding: 20px;
  border-radius: 12px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: #333;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export default function AllahNames() {
  const [names, setNames] = useState([]);

  useEffect(() => {
    const fetchNames = async () => {
      try {
        const res = await fetch("https://api.aladhan.com/v1/asmaAlHusna");
        const data = await res.json();
        setNames(data.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchNames();
  }, []);

  return (
    <Grid>
      {names.map((item) => (
        <Card key={item.number}>
          <div>{item.name}</div>
          <small>{item.transliteration}</small>
          <p style={{ fontSize: "14px", marginTop: "5px" }}>
            {item.en.meaning}
          </p>
        </Card>
      ))}
    </Grid>
  );
}
