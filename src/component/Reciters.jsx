import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const Card = styled("div")`
  background: white;
  border-radius: 10px;
  padding: 15px;
  color: #222;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s;
  &:hover {
    transform: translateY(-3px);
  }
`;
const Name = styled("h3")`
  margin: 0;
  font-size: 18px;
  color: #33d933b5;
`;

const Info = styled("p")`
  font-size: 14px;
  margin: 5px 0;
`;
export default function Reciter({ name,id}) {
  const navigate = useNavigate();
  return (
    <Card onClick={() => navigate(`/reciter/${id}`)}>
      <Name>{name}</Name>
    </Card>
  );
}
//