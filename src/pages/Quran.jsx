import React from "react";
import json from "../component/json/quran.json";
import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const Container = styled.div`
  padding: 20px;
  background: #fdfcf7;
  min-height: 100vh;
  font-family: "Amiri", serif;
`;
const Titel = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  font-size: 28px;
  color: #2c3e50;
`;
const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  max-height: 90vh;
  overflow-y: auto;
  padding: 10px;
  border: 2px solid #ddd;
  border-radius: 12px;
  background: #fffefa;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
`;
const PageBox = styled.div`
  text-align: center;
  border-bottom: 1px dashed #ccc;
  padding-bottom: 20px;
`;

const StyledLazyImage = styled(LazyLoadImage)`
  width: 40%;
  max-width: 800px;
  border: 3px solid #16a085;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);

  @media (max-width: 757px) {
    width: 85%;
  }
`;
export default function Quran() {
  return (
    <Container>
      <Titel> المصحف الشريف</Titel>

      {json.pages.map((page) => (
        <PageBox key={page.page_number}>
          <StyledLazyImage
            effect="blur"
            src={page.page_url}
            alt={`صفحة ${page.page_number}`}
          />
        </PageBox>
      ))}
    </Container>
  );
}
