import React from "react";
import Morning from "../component/azkarCorner/Morning";
import styled from "styled-components";
import { useNavigate, NavLink } from "react-router-dom";
import { title } from "framer-motion/client";
const Grid = styled.div`
  display: grid;
  gap: 25px;
  padding: 20px;
  position: relative;
  z-index: 8;

  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));

  @media (max-width: 1200px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }

  @media (max-width: 992px) {
    grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  }

  @media (max-width: 768px) {
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  }


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
  const categories = [
    { title: "أذكار الصباح", path: "/Morning" },
    { title: "أذكار المساء", path: "/EveningAzkar" },
    { title: "أذكار النوم", path: "/SleepAzkar" },
    { title: "أذكار الاستيقاظ", path: "/WakeUpAzkar" },
    { title: "أذكار الوضوء", path: "/WuduAzkar" },
    { title: "أذكار المسجد", path: "/MosqueAzkar" },
    { title: "أذكار المنزل", path: "/HomeAzkar" },
    { title: "دعاء دخول الخلاء", path: "/KhalaAzkar" },
    { title: "أذكار الحج والعمرة", path: "/HajjAndUmrahAzkar" },
    { title: "أذكار عن الطعام", path: "/FoodAzkar" },
    { title: "أذكار متنوعة", path: "/MiscellaneousAzkar" },
    { title: "الدعاء عن الاذان", path: "/AdhanAzkar" },
    { title: "أذكار الصلاة", path: "/PrayerAzkar" },
    { title: "أذكار بعد الصلاة", path: "/PrayerLaterAzkar" },
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
