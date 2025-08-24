import React from "react";
import OverLay from "../Comon/OverLay";
import { useFetchAzkar } from "./hooks/useFetchAzkar";
import styled from "styled-components";
import AzkarCard from "./common/AzcarCard";
const Container = styled.div`
  background: rgba(255, 255, 255, 0.1);
  background-image: url(/pexels-eberhardgross-2098428.jpg);
  min-height: 100vh;
  background-size: contain;
  position: relative;
  overflow: hidden;
`;

const Titel = styled.h2`
  color: orange;
  font-size: 47px;
  text-align: center;
  position: relative;
  top: 14px;
  font-weight: bold;
`;
export default function KhalaAzkar() {
  const { khalaAzkar } = useFetchAzkar();

  return (
    <Container>
      <Titel>أذكار دخول الخلاء</Titel>
      <OverLay />
      <AzkarCard api={khalaAzkar} />
    </Container>
  );
}
