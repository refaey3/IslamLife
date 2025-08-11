import React from "react";
import styled from "styled-components";
import { FaBookReader, FaVideo, FaStar, FaCog, FaBars } from "react-icons/fa";
const NabBar = styled("nav")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 10px 18px;

  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);

  border-radius: 5px;
  padding: 20px 20px;
  color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  position: sticky;
  top: 0;
  z-index: 1000;
  @media (max-width: 767px) {
    justify-content: center;
  }
`;
const Logo = styled("img")`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: contain;
  @media (max-width: 767px) {
    display: none;
  }
`;
const Rigth = styled("div")`
  display: flex;
  align-items: center;
`;
const Links = styled("ul")`
  list-style: none;
  display: flex;
  gap: 18px;
  align-items: center;
  margin: 0;
  padding: 0;

  li {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #222;
    cursor: pointer;
    padding: 8px 10px;
    border-radius: 8px;
    transition: background 0.15s, color 0.15s;
    font-size: 15px;
    @media (max-width: 767px) {
      padding: 8px 0px;
    }
  }
  li:hover {
    color: #16ff16;
    background: rgba(22, 255, 22, 0.08);
  }
`;
const BurgerIconAndHome = styled("div")`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;

  p {
    margin: 0;
    font-size: 15px;
    font-weight: 500;
    color: #222;
    cursor: pointer;
    position: relative;
    padding: 8px 10px;
    border-radius: 8px;

    &:hover {
      color: #16ff16;
      background: rgba(22, 255, 22, 0.08);
    }
    &::before {
      content: "";
      position: absolute;
      width: 2px;
      height: 150%;
      background: #16ff16;
      top: -10px;
      left: 89px;
      z-index: -1;
      @media (max-width: 767px) {
        left: -3px;
      }
    }
  }
  svg {
    font-size: 29px;
    color: #222;
    cursor: pointer;
    position: relative;
    left: 33px;
    @media (max-width: 767px) {
      left: 20px;
    }
  }
`;

export default function Navigation() {
  return (
    <NabBar>
      <Logo src="/Logo.webp"></Logo>
      <Rigth>
        <Links>
          <li>
            <FaBookReader size={18} /> القراء
          </li>
          <li>
            <FaVideo size={18} /> مباشر
          </li>
          <li>
            <FaStar size={18} /> المفضلة
          </li>
        </Links>
        <BurgerIconAndHome>
          <p>الرئيسية</p>
          <FaBars />
        </BurgerIconAndHome>
        <BurgerIconAndHome></BurgerIconAndHome>
      </Rigth>
    </NabBar>
  );
}
