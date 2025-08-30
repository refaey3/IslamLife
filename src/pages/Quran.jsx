import React, { useState } from "react";
import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Container = styled.div`
  background: #fdf6e3;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  @media (max-width: 767px) {
    padding-top: 86px;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 15px;
  width: 100%;
  max-width: 600px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;
    gap: 8px;
  }
`;

const Label = styled.span`
  font-size: 18px;
  color: #333;
  white-space: nowrap;
`;

const Dropdown = styled.select`
  padding: 10px;
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid #aaa;
  flex-grow: 1;
  width: 100%;
`;

const PageBox = styled.div`
  text-align: center;
  background: #fffefa;
  padding: 10px;
  border-radius: 12px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  max-width: 100%;
  position: relative;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  overflow: hidden;
`;

const StyledImage = styled(LazyLoadImage)`
  width: 100%;
  max-width: 600px;
  border-radius: 8px;

  @media (max-width: 600px) {
    max-width: 100%;
  }
  @media (max-width: 767px) {
    height: 69vh;
  }
`;

const NavButton = styled.button`
  padding: 8px;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  font-size: 18px;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }

  @media (max-width: 600px) {
    font-size: 16px;
    width: 32px;
    height: 32px;
  }
`;
const surahs = [
  { name: "الفاتحة", start: 1 },
  { name: "البقرة", start: 2 },
  { name: "آل عمران", start: 50 },
  { name: "النساء", start: 77 },
  { name: "المائدة", start: 106 },
  { name: "الأنعام", start: 128 },
  { name: "الأعراف", start: 151 },
  { name: "الأنفال", start: 177 },
  { name: "التوبة", start: 187 },
  { name: "يونس", start: 208 },
  { name: "هود", start: 221 },
  { name: "يوسف", start: 235 },
  { name: "الرعد", start: 249 },
  { name: "إبراهيم", start: 255 },
  { name: "الحجر", start: 262 },
  { name: "النحل", start: 267 },
  { name: "الإسراء", start: 282 },
  { name: "الكهف", start: 293 },
  { name: "مريم", start: 305 },
  { name: "طه", start: 312 },
  { name: "الأنبياء", start: 322 },
  { name: "الحج", start: 332 },
  { name: "المؤمنون", start: 342 },
  { name: "النور", start: 350 },
  { name: "الفرقان", start: 359 },
  { name: "الشعراء", start: 367 },
  { name: "النمل", start: 377 },
  { name: "القصص", start: 385 },
  { name: "العنكبوت", start: 396 },
  { name: "الروم", start: 404 },
  { name: "لقمان", start: 411 },
  { name: "السجدة", start: 415 },
  { name: "الأحزاب", start: 418 },
  { name: "سبإ", start: 428 },
  { name: "فاطر", start: 434 },
  { name: "يس", start: 440 },
  { name: "الصافات", start: 446 },
  { name: "ص", start: 453 },
  { name: "الزمر", start: 458 },
  { name: "غافر", start: 467 },
  { name: "فصلت", start: 477 },
  { name: "الشورى", start: 483 },
  { name: "الزخرف", start: 489 },
  { name: "الدخان", start: 496 },
  { name: "الجاثية", start: 499 },
  { name: "الأحقاف", start: 502 },
  { name: "محمد", start: 507 },
  { name: "الفتح", start: 511 },
  { name: "الحجرات", start: 515 },
  { name: "ق", start: 518 },
  { name: "الذاريات", start: 520 },
  { name: "الطور", start: 523 },
  { name: "النجم", start: 526 },
  { name: "القمر", start: 528 },
  { name: "الرحمن", start: 531 },
  { name: "الواقعة", start: 534 },
  { name: "الحديد", start: 537 },
  { name: "المجادلة", start: 542 },
  { name: "الحشر", start: 545 },
  { name: "الممتحنة", start: 549 },
  { name: "الصف", start: 551 },
  { name: "الجمعة", start: 553 },
  { name: "المنافقون", start: 554 },
  { name: "التغابن", start: 556 },
  { name: "الطلاق", start: 558 },
  { name: "التحريم", start: 560 },
  { name: "الملك", start: 562 },
  { name: "القلم", start: 564 },
  { name: "الحاقة", start: 566 },
  { name: "المعارج", start: 568 },
  { name: "نوح", start: 570 },
  { name: "الجن", start: 572 },
  { name: "المزمل", start: 574 },
  { name: "المدثر", start: 575 },
  { name: "القيامة", start: 577 },
  { name: "الإنسان", start: 578 },
  { name: "المرسلات", start: 580 },
  { name: "النبأ", start: 582 },
  { name: "النازعات", start: 583 },
  { name: "عبس", start: 585 },
  { name: "التكوير", start: 586 },
  { name: "الانفطار", start: 587 },
  { name: "المطففين", start: 587 },
  { name: "الانشقاق", start: 589 },
  { name: "البروج", start: 590 },
  { name: "الطارق", start: 591 },
  { name: "الأعلى", start: 591 },
  { name: "الغاشية", start: 592 },
  { name: "الفجر", start: 593 },
  { name: "البلد", start: 594 },
  { name: "الشمس", start: 595 },
  { name: "الليل", start: 595 },
  { name: "الضحى", start: 596 },
  { name: "الشرح", start: 596 },
  { name: "التين", start: 597 },
  { name: "العلق", start: 597 },
  { name: "القدر", start: 598 },
  { name: "البينة", start: 598 },
  { name: "الزلزلة", start: 599 },
  { name: "العاديات", start: 599 },
  { name: "القارعة", start: 600 },
  { name: "التكاثر", start: 600 },
  { name: "العصر", start: 601 },
  { name: "الهمزة", start: 601 },
  { name: "الفيل", start: 601 },
  { name: "قريش", start: 602 },
  { name: "الماعون", start: 602 },
  { name: "الكوثر", start: 602 },
  { name: "الكافرون", start: 603 },
  { name: "النصر", start: 603 },
  { name: "المسد", start: 603 },
  { name: "الإخلاص", start: 604 },
  { name: "الفلق", start: 604 },
  { name: "الناس", start: 604 },
];

export default function Quran() {
  const [currentPage, setCurrentPage] = useState(1);
  const [touchStartX, setTouchStartX] = useState(null);

  const handleSurahChange = (e) => {
    setCurrentPage(parseInt(e.target.value));
  };

  const handleNext = () => setCurrentPage((p) => Math.min(p + 1, 604));
  const handlePrev = () => setCurrentPage((p) => Math.max(p - 1, 1));

  const isFirstPage = currentPage === 1;

  // swipe detect
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (!touchStartX) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (diff > 50) {
      // swipe left → next
      handlePrev();
    } else if (diff < -50) {
      // swipe right → prev
      handleNext();
    }

    setTouchStartX(null);
  };

  return (
    <Container>
      <Header>
        <Label>اختر السورة:</Label>
        <Dropdown onChange={handleSurahChange} value={currentPage}>
          <option value="" disabled>
            اختر سورة
          </option>
          {surahs.map((s, i) => (
            <option key={i} value={s.start}>
              {s.name}
            </option>
          ))}
        </Dropdown>
      </Header>

      <PageBox onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
        <NavButton
          onClick={handleNext}
          disabled={currentPage === 604}
          aria-label="السابق"
        >
          ◀
        </NavButton>

        <StyledImage
          src={`https://quran.ksu.edu.sa/png_big/${currentPage}.png`}
          alt={`صفحة ${currentPage}`}
          effect="blur"
        />

        <NavButton
          onClick={handlePrev}
          disabled={isFirstPage}
          aria-label="التالي"
        >
          ▶
        </NavButton>
      </PageBox>
    </Container>
  );
}
