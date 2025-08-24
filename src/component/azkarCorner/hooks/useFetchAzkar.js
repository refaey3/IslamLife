import { useState, useEffect } from "react";
import json from "../json.json"
export function useFetchAzkar() {
  const [morningAzkar, setMorningAzkar] = useState([]);
  const [eveningAzkar, setEveningAzkar] = useState([]);
  const [prayerAzkar, setPrayerAzkar] = useState([]);
  const [prayerLaterAzkar, setPrayerLaterAzkar] = useState([]);
  const [sleepAzkar, setSleepAzkar] = useState([]);
  const [wakeUpAzkar, setWakeUpAzkar] = useState([]);
  const [mosqueAzkar, setMosqueAzkar] = useState([]);
  const [miscellaneousAzkar, setMiscellaneousAzkar] = useState([]);
  const [adhanAzkar, setAdhanAzkar] = useState([]);
  const [wuduAzkar, setWuduAzkar] = useState([]);
  const [homeAzkar, setHomeAzkar] = useState([]);
  const [khalaAzkar, setKhalaAzkar] = useState([]);
  const [foodAzkar, setFoodAzkar] = useState([]);
  const [hajjAndUmrahAzkar, setHajjAndUmrahAzkar] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setMorningAzkar(json.morning_azkar || []);
        setEveningAzkar(json.evening_azkar || []);
        setPrayerAzkar(json.prayer_azkar || []);
        setPrayerLaterAzkar(json.prayer_later_azkar || []);
        setSleepAzkar(json.sleep_azkar || []);
        setWakeUpAzkar(json.wake_up_azkar || []);
        setMosqueAzkar(json.mosque_azkar || []);
        setMiscellaneousAzkar(json.miscellaneous_azkar || []);
        setAdhanAzkar(json.adhan_azkar || []);
        setWuduAzkar(json.wudu_azkar || []);
        setHomeAzkar(json.home_azkar || []);
        setKhalaAzkar(json.khala_azkar || []);
        setFoodAzkar(json.food_azkar || []);
        setHajjAndUmrahAzkar(json.hajj_and_umrah_azkar || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return {
    morningAzkar,
    eveningAzkar,
    prayerAzkar,
    prayerLaterAzkar,
    sleepAzkar,
    wakeUpAzkar,
    mosqueAzkar,
    miscellaneousAzkar,
    adhanAzkar,
    wuduAzkar,
    homeAzkar,
    khalaAzkar,
    foodAzkar,
    hajjAndUmrahAzkar,
    loading,
    error,
  };
}