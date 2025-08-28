import React from "react";
import HeroSection from "../component/Home/HeroSection";
import RecitersList from "../component/Reciters/RecitersList";
import PrayerTimes from "../component/Prayer/PrayerTimes";
import Haddith from "../component/Prayer/Haddith";
export default function Home() {
  return (
    <>
      <HeroSection />
      <PrayerTimes />
      <Haddith />
      <RecitersList />
    </>
  );
}
