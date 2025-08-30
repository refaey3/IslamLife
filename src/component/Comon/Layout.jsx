import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
const M = styled.div`
  position: relative;
`;
export default function Layout() {
  return (
    <>
      <M>
        <Navigation />
        <Outlet />
        <Footer />
      </M>
    </>
  );
}
