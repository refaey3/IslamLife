import React, { useEffect, useState } from "react";
import Loader from "../Comon/Loader";
import Reciter from "./Reciters";
import styled from "styled-components";
import RecitersFilter from "./RecitersFilter";
import { motion, AnimatePresence } from "framer-motion";
const Container = styled("div")`
  display: grid;
  gap: 20px;
  margin-top: 27px;
  position: relative;
  grid-template-columns: repeat(5, 1fr);
  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 295px;
    left: 36px;
  }
  padding-right: 15px;
  padding-left: 15px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    width: 750px;
  }

  @media (min-width: 992px) {
    width: 970px;
  }

  @media (min-width: 1200px) {
    width: 1170px;
  }
`;
const CardContainer = styled("div")`
  min-height: 100vh;
  background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
  background-size: cover;
  background-position: center;
  overflow: hidden;
  padding: 20px;
  position: relative;
  overflow: hidden;
`;
const Titel = styled("h2")`
  text-align: center;
  font-size: 28px;
  font-weight: bold;
  color: #a9e4b5;
  margin-bottom: 20px;
  letter-spacing: 1px;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
  position: relative;
  top: 20px;
  left: -1px;
`;
const Input = styled("input")`
  padding: 10px 15px;
  width: 100%;
  max-width: 280px;
  margin: 2px auto 20px;
  display: block;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  text-align: right;
  font-size: 16px;
  background-color: rgba(255, 255, 255, 0.1);
  color: white;

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
    font-style: italic;
  }

  position: relative;
  left: 20px;
  top: 5px;
  @media (max-width: 1024px) {
    left: 0;
  }

  @media (max-width: 768px) {
    max-width: 90%;
    font-size: 14px;
    left: 15px;
  }
`;
export default function RecitersList() {
  const [loading, setLoading] = useState(true);
  const [reciters, setReciters] = useState([]);
  const [selectedLetter, setSelectedLetter] = useState("الكل");
  const [searchTerm, setSearchTerm] = useState("");
  const [visbleCount, setVisbleCount] = useState(() => {
    if (window.innerWidth >= 1200) {
      return 50; // الشاشات الكبيرة
    } else {
      return 22; // الموبايل/التابلت
    }
  });

  useEffect(() => {
    const recitersApi = async () => {
      try {
        const res = await fetch(
          "https://mp3quran.net/api/v3/reciters?language=ar"
        );
        const json = await res.json();
        setReciters(json.reciters);
        // console.log(json.reciters[4].moshaf[1].name);
      } catch (error) {
        console.error("Error fetching reciters:", error);
      } finally {
        setLoading(false);
      }
    };
    recitersApi();
  }, []);

  const filteredReciters = reciters.filter((reciter) => {
    const matchesLetter =
      selectedLetter === "الكل" || reciter.name.startsWith(selectedLetter);
    const matchesSearch = reciter.name.includes(searchTerm.trim());
    return matchesLetter && matchesSearch;
  });
  return (
    <div>
      <CardContainer id="rec">
        <Titel>قائمة المقرئين</Titel>
        <Input
          type="text"
          placeholder="ابحث باسم المقرئ..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <RecitersFilter
          onSelectLetter={(letter) => setSelectedLetter(letter)}
        />
        {loading ? (
          <Loader />
        ) : (
          <>
            <Container>
              <AnimatePresence mode="wait">
                <>
                  {filteredReciters.slice(0, visbleCount).map((reciter) => (
                    <motion.div
                      key={reciter.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Reciter name={reciter.name} id={reciter.id} />
                    </motion.div>
                  ))}
                </>
              </AnimatePresence>
            </Container>
            {visbleCount < filteredReciters.length && (
              <div style={{ textAlign: "center", marginTop: "20px" }}>
                <button
                  onClick={() => setVisbleCount((prev) => prev + 50)}
                  style={{
                    padding: "10px 20px",
                    borderRadius: "8px",
                    border: "none",
                    background: "#00cc66",
                    color: "white",
                    cursor: "pointer",
                    fontSize: "16px",
                  }}
                >
                  عرض المزيد
                </button>
              </div>
            )}
          </>
        )}
      </CardContainer>
    </div>
  );
}
