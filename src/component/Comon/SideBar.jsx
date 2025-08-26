// SideBar.js
import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import {
  FaBookReader,
  FaVideo,
  FaStar,
  FaPray,
  FaDharmachakra,
  FaQuran,
  FaShieldAlt,
  FaMosque,
} from "react-icons/fa";

const SideBarContainer = styled.div`
  position: fixed;
  top: 50px;
  right: ${({ isOpen }) => (isOpen ? "0" : "-260px")};
  width: 170px;
  height: calc(100vh - 51px);
  background: rgba(107, 112, 92, 0.9); /* لون خلفية مشابه للتصميم */
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.2);
  transition: right 0.3s ease-in-out;
  z-index: 2000;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const Menu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  flex: 1;

  li {
    margin-bottom: 18px;

    a {
      text-decoration: none;
      color: #222;
      font-size: 16px;
      font-weight: 500;
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px;
      border-radius: 8px;
      transition: all 0.3s ease;

      &:hover {
        color: #16ff16;
        background: rgba(22, 255, 22, 0.1);
        transform: translateX(-5px);
      }
    }
  }
`;
const ChangeLi = styled.li`
  @media (min-width: 767px) {
    display: none;
  }
`;
export default function SideBar({ isOpen }) {
  const navigate = useNavigate();

  const handleGoToReciters = () => {
    navigate("/");

    setTimeout(() => {
      window.scrollTo({
        top: 1500,
        behavior: "smooth",
      });
    }, 100);
  };
  return (
    <SideBarContainer isOpen={isOpen}>
      <Menu>
        <ChangeLi>
          <Link to="/">
            <FaMosque /> الرئيسية
          </Link>
        </ChangeLi>
        <ChangeLi>
          <Link to="/Favorites">
            <FaStar /> المفضلة
          </Link>
        </ChangeLi>
        <ChangeLi>
          <Link to="/Live">
            <FaVideo /> مباشر
          </Link>
        </ChangeLi>
        <li>
          <Link onClick={handleGoToReciters}>
            <FaBookReader /> القراء
          </Link>
        </li>

        <li>
          <Link to="/AllahNames">
            <FaDharmachakra /> أسماء الله الحسنى
          </Link>
        </li>
        <li>
          <Link to="/Azkar">
            <FaPray /> أذكار إسلامية
          </Link>
        </li>
        <li>
          <Link to="/Quran">
            <FaQuran /> القرآن الكريم
          </Link>
        </li>
        <li>
          <Link to="/Ruqyah">
            <FaShieldAlt /> الرقية الشرعية
          </Link>
        </li>
      </Menu>
    </SideBarContainer>
  );
}
