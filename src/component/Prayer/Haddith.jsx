import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Main = styled.div`
  position: relative;
  overflow: hidden;
  background: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Open Sans", sans-serif;
  min-height: 50vh;
  margin-bottom: 55px;
`;

const Container = styled.div`
  margin-top: 50px;
  direction: rtl;
  padding: 20px;
  margin-left: auto;
  margin-right: auto;
  background: #e0e7d8;
  border-radius: 12px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 15px;
  color: #6b705c;
`;

const HadithBox = styled.div`
  background: #6b705c;
  color: #fff;
  padding: 25px;
  border-radius: 10px;
  font-size: 20px;
  line-height: 1.8;
  margin-bottom: 50px;
`;

const Book = styled.div`
  font-weight: bold;
  color: #2c3e50;
`;

export default function Haddith() {
  const [hadith, setHadith] = useState(null);

  useEffect(() => {
    fetch(
      "https://hadithapi.com/api/hadiths?apiKey=$2y$10$xIiYtEn5od7mGGkA1iuKQOGw9UHQDAN8Wvz0zIte5sT4gd8Vw62"
    )
      .then((res) => res.json())
      .then((data) => {
        if (data && data.hadiths && data.hadiths.data.length > 0) {
          const randomIndex = Math.floor(
            Math.random() * data.hadiths.data.length
          );
          setHadith(data.hadiths.data[randomIndex]);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <Main>
      <Container>
        <Title> حديث اليوم</Title>
        {hadith ? (
          <>
            <HadithBox>{hadith.hadithArabic}</HadithBox>
            <Book>المصدر : {hadith.book.bookName}</Book>
          </>
        ) : (
          <p>جاري تحميل الحديث...</p>
        )}
      </Container>
    </Main>
  );
}
