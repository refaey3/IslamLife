import React from "react";
import styled from "styled-components";
const Foot = styled("div")`
  position: absolute;
  bottom: -39px;
  left: 0;
  width: 100%;
  background: linear-gradient(90deg, #2c5364, #203a43, #0f2027);
  color: white;
  text-align: center;
  padding: 10px 0;
  font-size: 18px;
`;
export default function Footer() {
  return <Foot>وَاذْكُرُوا اللَّهَ كَثِيرًا لَّعَلَّكُمْ تُفْلِحُونَ</Foot>;
}
