import React, { useState } from "react";
import styled from "styled-components";
import { FaBookReader, FaVideo, FaStar, FaCog, FaBars } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import SideBar from "./SideBar";
const NabBar = styled("nav")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 10px 18px;

  background: rgb(255 255 255 / 26%);
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  height: 50px;
  border-radius: 5px;
  padding: 20px 20px;
  color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  position: sticky;
  top: 0;
  z-index: 1000;
  // @media (max-width: 767px) {
  //   justify-content: center;
  // }
`;
const Logo = styled("img")`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: contain;
  cursor: pointer;
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
    cursor: pointer;
    padding: 8px 10px;
    border-radius: 8px;
    font-size: 15px;
    a {
      text-decoration: none;
      color: #222;
      display: flex;
      align-items: center;
      gap: 8px;
      transition: background 0.15s, color 0.15s;
    }

    @media (max-width: 767px) {
      padding: 8px 0px;
    }
  }
  li:hover {
    color: #16ff16;
    background: rgba(22, 255, 22, 0.08);
  }
  @media (max-width: 767px) {
    display: none;
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
    @media (max-width: 767px) {
      display: none;
    }
    &:hover {
      color: #16ff16;
      background: rgba(22, 255, 22, 0.08);
    }
    &::before {
      // content: "";
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
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleGoToReciters = () => {
    navigate("/");

    setTimeout(() => {
      window.scrollTo({
        top: 1400,
        behavior: "smooth",
      });
    }, 100);
  };
  return (
    <>
      <NabBar>
        <Link to="/">
          <Logo src="/Logo.webp"></Logo>
        </Link>
        <Rigth>
          <Links>
            <li>
              <Link onClick={handleGoToReciters}>
                <FaBookReader size={18} /> القراء
              </Link>
            </li>
            <li>
              <Link to="/Live">
                <FaVideo size={18} /> مباشر
              </Link>
            </li>
            <li>
              <Link to="/Favorites">
                <FaStar size={18} /> المفضلة
              </Link>
            </li>
          </Links>
          <BurgerIconAndHome onClick={() => setIsOpen(!isOpen)}>
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <p>الرئيسية</p>
            </Link>
            <FaBars />
          </BurgerIconAndHome>
          <BurgerIconAndHome></BurgerIconAndHome>
        </Rigth>
      </NabBar>
      <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
