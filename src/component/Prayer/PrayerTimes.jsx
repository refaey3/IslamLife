import React, { useEffect } from "react";

export default function PrayerTimes() {
  useEffect(() => {
    const FetchDate = async () => {
      const res = await fetch(
        "https://api.aladhan.com/v1/timingsByCity?city=Cairo&country=Egypt&method=2"
      );
      const json = await res.json();
      console.log(json);
    };
    FetchDate();
  }, []);
  return <div>PrayerTimes</div>;
}
