import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import Navigation from "./Navigation";
const topDown = keyframes`
  0% {
    transform: translateY(-20px);
  }
  50% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-20px);
  }
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
const HomePage = styled("div")`
  background-image: url(${(props) => props.$bg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
`;
const Info = styled("div")`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #e6ffe6;
  padding: 20px;
  max-width: 85%;
  z-index: 6;

  h1 {
    font-size: 2.5rem;
    color: #b8ffcc;
    margin-bottom: 20px;
    line-height: 1.8;
    font-family: "Amiri", serif;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
    animation: topDown 1s ease-in-out forwards;
    animation-delay: 0.2s;
    animation: ${topDown} 2s ease-in-out infinite;
    animation-delay: 0.2s;
  }

  h2 {
    font-size: 2rem;
    color: #00cc66;
    margin-bottom: 15px;
    font-weight: bold;
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.4);
  }

  p {
    font-size: 1.2rem;
    color: #d9ffea;
    line-height: 1.6;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
  }
  @media (max-width: 767px) {
    width: 100%;
    h1 {
      font-size: 26px;
      line-height: 1.5;
    }
    h2 {
      font-size: 1.5rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;

export default function Home() {
  const imgsarray = ["/01.jpg", "/02.jpg", "/03.jpg", "/04.jpg"];
  const [imgBg, setImgBg] = useState(imgsarray[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      let random = Math.floor(Math.random() * imgsarray.length);
      setImgBg(imgsarray[random]);
    }, 100000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <HomePage $bg={imgBg}>
        <Navigation />
        <Ovelay />
        <Info>
          <h1>
            وَلَقَدْ يَسَّرْنَا الْقُرْآنَ لِلذِّكْرِ فَهَلْ مِن مُّدَّكِرٍ
          </h1>
          <h2>اقرأ ،اسمع ،تدبر</h2>
          <p>
            Listen, Reflect, and Connect with the Holy Quran through hundreds of
            beautiful recitations
          </p>
        </Info>
      </HomePage>
    </>
  );
}
