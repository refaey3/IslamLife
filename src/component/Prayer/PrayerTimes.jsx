import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { FaMosque, FaSun, FaMoon, FaRegClock } from "react-icons/fa";
import { WiSunrise, WiSunset } from "react-icons/wi";
const Main = styled.div`
  position: relative;
  overflow: hidden;
  background: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Open Sans", sans-serif;
  min-height: 70vh;
`;
const Container = styled.div`
  margin-top: 50px;
  direction: rtl;
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
const TimerBox = styled.div`
  background: #6b705c;
  color: white;
  text-align: center;
  padding: 30px 10px;
  border-radius: 10px;
  margin-bottom: 20px;
  font-size: 2.5em;
  font-weight: bold;
`;
const TimeList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 10px;
  margin-bottom: 20px;
`;

const TimeItem = styled.div`
  background: #e0e7d8;
  padding: 15px;
  text-align: center;
  border-radius: 5px;
  font-size: 1.1em;
`;

const Time = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`;

const Icon = styled.div`
  margin-bottom: 5px;
`;

const Label = styled.div`
  color: #514e4eff;
`;
const Title = styled.h2`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const DateText = styled.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 30px;
`;
export default function PrayerTimes() {
  const [loading, setLoading] = useState(true);
  const [timings, setTimings] = useState({});
  const [hijri, setHijri] = useState({});
  const [gregorian, setGregorian] = useState({});
  const [nextPrayer, setNextPrayer] = useState("");
  const [timeLeft, setTimeLeft] = useState("");
  const audioRef = useRef(null);
  const prayerNames = {
    Fajr: "الفجْر",
    Sunrise: "الشروق",
    Dhuhr: "الظُّهْر",
    Asr: "العَصر",
    Maghrib: "المَغرب",
    Isha: "العِشاء",
  };
  const formatTimeTo12 = (time) => {
    if (!time) return "";
    let [hour, minute] = time.split(":").map(Number);
    let period = hour >= 12 ? "PM" : "AM";
    ``;
    hour = hour % 12 || 12;
    return `${hour}:${minute.toString().padStart(2, "0")} ${period}`;
  };
  const getNextPrayer = (timings) => {
    const now = new Date();
    console.log(now);
    const prayers = ["Fajr", "Sunrise", "Dhuhr", "Asr", "Maghrib", "Isha"];
    for (let i = 0; i < prayers.length; i++) {
      const [hour, minute] = timings[prayers[i]].split(":").map(Number);
      const prayerTime = new Date();
      prayerTime.setHours(hour, minute, 0, 0);
      if (prayerTime > now) {
        return prayers[i];
      }
    }
    return "Fajr";
  };
  const calculateTimeLeft = (timing) => {
    if (!timing) return "";

    const [hour, minute] = timing.split(":").map(Number);
    const now = new Date();
    const prayerTime = new Date();
    prayerTime.setHours(hour, minute, 0, 0);

    let diff = prayerTime - now;
    if (diff < 0) diff += 24 * 60 * 60 * 1000;

    const h = String(Math.floor(diff / (1000 * 60 * 60))).padStart(2, "0");
    const m = String(
      Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
    ).padStart(2, "0");
    const s = String(Math.floor((diff % (1000 * 60)) / 1000)).padStart(2, "0");

    return `${h}:${m}:${s}`;
  };

  useEffect(() => {
    const Fetchdata = async () => {
      try {
        const res = await fetch(
          "https://api.aladhan.com/v1/timingsByCity?city=Cairo&country=Egypt&method=5"
        );
        const json = await res.json();
        setTimings(json.data.timings);
        setHijri(json.data.date.hijri);
        setGregorian(json.data.date.gregorian);
        const next = getNextPrayer(json.data.timings);
        setNextPrayer(next);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };
    Fetchdata();
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      if (timings && nextPrayer) {
        setTimeLeft(calculateTimeLeft(timings[nextPrayer]));
      }
      const now = new Date();
      const [hour, minute] = timings[nextPrayer].split(":").map(Number);
      if (
        now.getHours() === hour &&
        now.getMinutes() === minute &&
        now.getSeconds() === 0
      ) {
        if (audioRef.current) {
          audioRef.current.play();
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timings, nextPrayer]);

  return (
    <Main>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Container>
          <Title>مواقيت الصلاة والأذان في مصر, القاهرة</Title>
          <DateText>{`${hijri.weekday?.ar} ${hijri.day} ${hijri.month?.ar} ${hijri.year} هجريه الموافق ${gregorian.date}`}</DateText>

          <TimerBox>
            {prayerNames[nextPrayer]} <br />
            {timeLeft} <br />
            <div style={{ fontSize: "0.6em" }}>الوقت المتبقي للصلاة</div>
          </TimerBox>
          <TimeList>
            <TimeItem
              style={{
                background: nextPrayer === "Fajr" ? "#6b705c" : "#e0e7d8",
                color: nextPrayer === "Fajr" ? "#fff" : "#000",
              }}
            >
              <Icon>
                <FaMosque />{" "}
              </Icon>
              <Time>{formatTimeTo12(timings.Fajr)}</Time>
              <Label>الفجر</Label>
            </TimeItem>
            <TimeItem
              style={{
                background: nextPrayer === "Sunrise" ? "#6b705c" : "#e0e7d8",
                color: nextPrayer === "Sunrise" ? "#fff" : "#000",
              }}
            >
              <Icon>
                <WiSunrise />
              </Icon>
              <Time>{formatTimeTo12(timings.Sunrise)}</Time>
              <Label>الشروق</Label>
            </TimeItem>
            <TimeItem
              style={{
                background: nextPrayer === "Dhuhr" ? "#6b705c" : "#e0e7d8",
                color: nextPrayer === "Dhuhr" ? "#fff" : "#000",
              }}
            >
              <Icon>
                <FaSun />
              </Icon>
              <Time>{formatTimeTo12(timings.Dhuhr)}</Time>
              <Label>الظهر</Label>
            </TimeItem>
            <TimeItem
              style={{
                background: nextPrayer === "Asr" ? "#6b705c" : "#e0e7d8",
                color: nextPrayer === "Asr" ? "#fff" : "#000",
              }}
            >
              <Icon>
                <FaRegClock />
              </Icon>
              <Time>{formatTimeTo12(timings.Asr)}</Time>

              <Label>العصر</Label>
            </TimeItem>
            <TimeItem
              style={{
                background: nextPrayer === "Maghrib" ? "#6b705c" : "#e0e7d8",
                color: nextPrayer === "Maghrib" ? "#fff" : "#000",
              }}
            >
              <Icon>
                <WiSunset />
              </Icon>
              <Time>{formatTimeTo12(timings.Maghrib)}</Time>
              <Label>المغرب</Label>
            </TimeItem>
            <TimeItem
              style={{
                background: nextPrayer === "Isha" ? "#6b705c" : "#e0e7d8",
                color: nextPrayer === "Isha" ? "#fff" : "#000",
              }}
            >
              <Icon>
                <FaMoon />
              </Icon>
              <Time>{formatTimeTo12(timings.Isha)}</Time>
              <Label>العشاء</Label>
            </TimeItem>
          </TimeList>
          <audio ref={audioRef} src="/a9.mp3"></audio>
        </Container>
      )}
    </Main>
  );
}
