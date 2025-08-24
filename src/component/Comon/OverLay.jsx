import React from "react";
import styled from "styled-components";
const Ovelay = styled("div")`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: rgb(0 0 0 / 33%);
  z-index: 5;
`;
export default function OverLay() {
  return <Ovelay></Ovelay>;
}
