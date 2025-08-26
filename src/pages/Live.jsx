import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

const radios = [
  {
    name: "القاهرة",
    url: "https://stream.radiojar.com/8s5u5tpdtwzuv",
    img: "/cairo.jpg",
  },
  {
    name: "الإمارات",
    url: "https://zayedquran.gov.ae/stream.php",
    img: "/emrats.jpg",
  },
  {
    name: "السعودية - مكة",
    url: "https://stream.radiojar.com/4wqre23fytzuv",
    img: "/mka.jpg",
  },
  {
    name: "الرقية الشرعية",
    url: "https://qurango.net/radio/roqiah",
    img: "/ruuka.jpg",
  },
  {
    name: "الجزائر",
    url: "https://webradio.tda.dz/Coran_64K.mp3",
    img: "/jzaar.jpg",
  },
];

const Container = styled.div`
  text-align: center;
  padding: 20px;
  background: #f9f9f5;
  font-family: "Amiri", serif;
  min-height: 100vh; /* يخلي الصفحة تاخد معظم الشاشة */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Title = styled.h2`
  color: #2c3e50;
  margin-bottom: 20px;
`;

const RadiosGrid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 25px;
  margin-top: 20px;
`;

const RadioCard = styled.div`
  width: 130px;
  cursor: pointer;
  text-align: center;
  transition: all 0.3s ease;

  img {
    width: 110px;
    height: 110px;
    object-fit: cover;
    border-radius: 50%;
    border: 3px solid ${(props) => (props.active ? "#16a085" : "#ccc")};
    margin-bottom: 10px;
    transition: 0.3s;
  }

  p {
    font-size: 15px;
    color: ${(props) => (props.active ? "#16a085" : "#333")};
    font-weight: ${(props) => (props.active ? "bold" : "normal")};
  }

  &:hover {
    transform: scale(1.08);
  }
`;

export default function Live() {
  const [current, setCurrent] = useState(radios[0]);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
      audioRef.current.play().catch(() => {});
    }
  }, [current]);

  return (
    <Container>
      <Title>إذاعة {current.name}</Title>
      <audio
        ref={audioRef}
        controls
        style={{ width: "100%", marginBottom: "20px" }}
      >
        <source src={current.url} type="audio/mpeg" />
        متصفحك لا يدعم تشغيل الراديو
      </audio>

      <RadiosGrid>
        {radios.map((radio) => (
          <RadioCard
            key={radio.name}
            active={radio.name === current.name}
            onClick={() => setCurrent(radio)}
          >
            <img src={radio.img} alt={radio.name} />
            <p>{radio.name}</p>
          </RadioCard>
        ))}
      </RadiosGrid>
    </Container>
  );
}
