import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import Loader from "../component/Comon/Loader";
import Container from "../component/Comon/Container";
import styled from "styled-components";
const Audio = styled.div`
  position: fixed;
  bottom: 0;
  left: 400px;
  width: 50%;
  padding: 10px;
  zindex: 9999;
  @media (max-width: 767px) {
    width: 90%;
    left: 30px;
  }
`;
const Wrapper = styled.div`
  padding: 20px;
  max-width: 900px;
  margin: auto;
  background: rgba(255, 255, 255, 0.05);
`;

const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 20px;
  color: #e0e7ff;
  text-align: right;
`;

const Select = styled.select`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #4b5e6d;
  border-radius: 6px;
  margin-bottom: 20px;
  width: 100%;
  background-color: #2d3748;
  color: #e0e7ff;
  &:focus {
    outline: none;
    border-color: #68d391;
  }
`;

const SurahList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 10px;
  direction: rtl;
`;

const SurahItem = styled.li`
  background-color: #2d3748;
  border: 1px solid #4b5e6d;
  padding: 10px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: 0.3s;
  color: white;
  &:hover {
    background-color: #4a5568;
  }
`;
const Buttons = styled.div`
  display: flex;
  gap: 5px;
  justify-content: center;
`;

const Button = styled.button`
  padding: 6px 10px;
  border-radius: 6px;
  font-size: 14px;
  border: none;
  cursor: pointer;
  color: #fff;
  background-color: ${(props) => (props.play ? "#68d391" : "#4299e1")};
  transition: 0.3s;

  &:hover {
    opacity: 0.9;
  }
`;
const SurahTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
`;
const Main = styled.div`
  background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
  min-height: 100vh;
`;
export default function ReciterDetails() {
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  const [reciter, setReciter] = useState(null);
  const [moshafs, setMoshafs] = useState([]);
  const [suwar, setSuwar] = useState([]);
  const [selectedMoshaf, setSelectedMoshaf] = useState(null);
  const [filteredSuwar, setFilteredSuwar] = useState([]);
  const [currentAudio, setCurrentAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [recRes, suwarRes] = await Promise.all([
          fetch("https://mp3quran.net/api/v3/reciters?language=ar"),
          fetch("https://mp3quran.net/api/v3/suwar?language=ar"),
        ]);

        const recJson = await recRes.json();
        const suwarJson = await suwarRes.json();

        const founderReciter = recJson.reciters.find(
          (r) => r.id === parseInt(id)
        );
        setReciter(founderReciter);
        setMoshafs(founderReciter.moshaf);
        setSuwar(suwarJson.suwar);
        if (founderReciter.moshaf.length > 0) {
          const firstMoshaf = founderReciter.moshaf[0];
          setSelectedMoshaf(firstMoshaf);
          const surahNumbers = firstMoshaf.surah_list
            .split(",")
            .map((num) => parseInt(num));
          const filtered = suwarJson.suwar.filter((s) =>
            surahNumbers.includes(s.id)
          );
          setFilteredSuwar(filtered);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handleMoshafChange = (moshafId) => {
    const moshaf = moshafs.find((m) => m.id === parseInt(moshafId));
    setSelectedMoshaf(moshaf);
    const surahNumbers = moshaf.surah_list
      .split(",")
      .map((num) => parseInt(num));
    const filtered = suwar.filter((s) => surahNumbers.includes(s.id));

    setFilteredSuwar(filtered);
  };

  const handlePlay = (surahId) => {
    const audioUrl = `${selectedMoshaf.server}${String(surahId).padStart(
      3,
      "0"
    )}.mp3`;

    if (currentAudio === audioUrl && isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      setCurrentAudio(audioUrl);
      audioRef.current.src = audioUrl;
      audioRef.current.play();
      setIsPlaying(true);
    }
  };
  return (
    <Main>
      {loading ? (
        <Loader />
      ) : (
        <Wrapper>
          <Title>{`القارئ الشيخ ${reciter.name}`}</Title>
          <Select
            value={selectedMoshaf?.id || ""}
            onChange={(e) => handleMoshafChange(e.target.value)}
          >
            {moshafs.map((m) => (
              <option key={m.id} value={m.id}>
                {m.name}
              </option>
            ))}
          </Select>
          <SurahList>
            {filteredSuwar.map((surah) => {
              const audioUrl = `${selectedMoshaf.server}${String(
                surah.id
              ).padStart(3, "0")}.mp3`;

              return (
                <SurahItem key={surah.id}>
                  <SurahTitle>{`${surah.id} - ${surah.name}`}</SurahTitle>
                  <Buttons>
                    <Button play onClick={() => handlePlay(surah.id)}>
                      {currentAudio === audioUrl && isPlaying
                        ? "⏸ إيقاف "
                        : "▶ تشغيل"}
                    </Button>
                    <Button as="a" href={audioUrl} download>
                      ⬇ تحميل
                    </Button>
                  </Buttons>
                </SurahItem>
              );
            })}
          </SurahList>
          {currentAudio && (
            <Audio>
              <audio
                ref={audioRef}
                controls
                style={{ width: "100%" }}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              >
                <source src={currentAudio} type="audio/mpeg" />
                متصفحك لا يدعم تشغيل الصوت
              </audio>
            </Audio>
          )}
        </Wrapper>
      )}
    </Main>
  );
}
