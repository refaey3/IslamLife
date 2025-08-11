import React, { useState } from "react";
import styled from "styled-components";

const AlphabetBar = styled.div`
  position: absolute;
  top: 2%;
  left: 0;
  display: flex;
  flex-direction: column;
  background: #e3e9ee;
  border-radius: 0 10px 10px 0;
  overflow: hidden;
  @media (max-width: 767px) {
    top: -2px;
  }
`;

const Letter = styled.button`
  background: ${(props) => (props.active ? "#239fb8" : "transparent")};
  border: none;
  padding: 5px;
  cursor: pointer;
  color: ${(props) => (props.active ? "#ffffffff" : "#000")};
  font-size: 12px;
  transition: background 0.3s;

  &:hover {
    background: ##239fb8;
    color: #239fb8;
  }
`;

export default function RecitersFilter({ onSelectLetter }) {
  const letters = [
    "الكل",
    "ا",
    "ب",
    "ت",
    "ث",
    "ج",
    "ح",
    "خ",
    "د",
    "ذ",
    "ر",
    "ز",
    "س",
    "ش",
    "ص",
    "ض",
    "ط",
    "ظ",
    "ع",
    "غ",
    "ف",
    "ق",
    "ك",
    "ل",
    "م",
    "ن",
    "هـ",
    "و",
    "ي",
  ];

  const [activeLetter, setActiveLetter] = useState("الكل");
  const handleClick = (letter) => {
    setActiveLetter(letter);
    onSelectLetter(letter);
  };

  return (
    <AlphabetBar>
      {letters.map((letter) => (
        <Letter
          key={letter}
          active={activeLetter === letter}
          onClick={() => handleClick(letter)}
        >
          {letter}
        </Letter>
      ))}
    </AlphabetBar>
  );
}
