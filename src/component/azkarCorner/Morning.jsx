import React from "react";
import OverLay from "../Comon/OverLay";
import { useFetchAzkar } from "./hooks/useFetchAzkar";
import styled from "styled-components";
import { useState, useEffect } from "react";
const Container = styled.div`
  background: rgba(255, 255, 255, 0.1);
  background-image: url(/pexels-eberhardgross-2098428.jpg);
  min-height: 100vh;
  background-size: contain;
  position: relative;
  overflow: hidden;
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
`;

const Reference = styled.span`
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

export default function Morning() {
  const { morningAzkar, loading, error } = useFetchAzkar();
  const [counts, setCounts] = useState([]);

  useEffect(() => {
    if (morningAzkar && morningAzkar.length > 0) {
      setCounts(morningAzkar.map((azkar) => azkar.count || 0));
    }
  }, [morningAzkar]);

  const handleCardClick = (index) => {
    setCounts((prevCounts) => {
      const newCounts = [...prevCounts];
      if (newCounts[index] > 0) {
        newCounts[index] -= 1;
      }
      return newCounts;
    });
  };
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!morningAzkar || morningAzkar.length === 0)
    return <div>No data available</div>;

  return (
    <Container>
      <OverLay />
      <Main>
        {morningAzkar.map((azkar, index) => (
          <Card key={index} onClick={() => handleCardClick(index)}>
            <ArabicText>{azkar.text}</ArabicText>
            <Reference>عدد التكرار: {counts[index]}</Reference>
          </Card>
        ))}
      </Main>
    </Container>
  );
}
