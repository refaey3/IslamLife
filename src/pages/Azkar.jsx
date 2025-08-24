import React from "react";
import Morning from "../component/azkarCorner/Morning";
import styled from "styled-components";
import { useNavigate, NavLink } from "react-router-dom";
import { title } from "framer-motion/client";
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 20px;
  padding: 20px;
  position: relative;
  z-index: 8;
`;

const Card = styled.div`
  background: white;
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: 0.3s;
  background: rgb(255 255 255 / 26%);
  color: black;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
`;
const Main = styled.div`
  background-image: url(/pexels-rpnickson-2559941.jpg);
  background-size: cover;
  min-height: 100vh;
  position: relative;
`;
const Ovelay = styled("div")`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: rgb(0 0 0 / 33%);
  z-index: 5;
`;
export default function Azkar() {
  const navigate = useNavigate();

  const categories = [
    { title: "الصباح", path: "/Morning" },
    {
      title: "المساء",
      path: "/EveningAzkar",
    },
  ];
  return (
    <Main>
      <Ovelay />
      <Grid>
        {categories.map((cat, i) => (
          <NavLink to={cat.path} key={i} style={{ textDecoration: "none" }}>
            <Card>
              <p>{cat.title}</p>
            </Card>
          </NavLink>
        ))}
      </Grid>
    </Main>
  );
}
