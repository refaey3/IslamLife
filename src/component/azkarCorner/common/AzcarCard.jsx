import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";

const Card = styled.div`
  background: rgba(255, 255, 255, 0.08);
  border: 2px solid #423b34ff;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 45px;
  width: 100%;
  color: #fff;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.25);
  position: relative;
  cursor: pointer;
`;

const ArabicText = styled.p`
  font-size: 20px;
  line-height: 1.8;
  color: #f1f1f1;
  direction: rtl;
  margin: 10px 0;
  user-select: none;
  white-space: pre-line;
  text-align: center;
`;
const Main = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  z-index: 555;
  margin-top: 40px;
  @media (min-width: 768px) {
    width: 750px;
  }
  @media (min-width: 992px) {
    width: 970px;
  }
  @media (min-width: 1200px) {
    width: 1170px;
  }
`;
const Count = styled.span`
  position: absolute;
  bottom: -12px;
  right: 15px;
  background: #f4a261;
  color: #1a1a1a;
  padding: 4px 10px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
`;
export default function AzkarCard({ api }) {
  const [counts, setCounts] = useState([]);

  useEffect(() => {
    if (api && api.length > 0) {
      setCounts(api.map((azkar) => azkar.count || 0));
    }
  }, [api]);

  const handleCardClick = (index) => {
    setCounts((prevCounts) => {
      const newCounts = [...prevCounts];
      if (newCounts[index] > 0) {
        newCounts[index] -= 1;
      }
      return newCounts;
    });
  };
  return (
    <Main>
      {api.map((azkar, index) => (
        <Card key={index} onClick={() => handleCardClick(index)}>
          <ArabicText>{azkar.text}</ArabicText>
          <Count>عدد التكرار: {counts[index]}</Count>
        </Card>
      ))}
    </Main>
  );
}
