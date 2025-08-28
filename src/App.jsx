import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./component/Comon/Layout";
import ScrollToTop from "./component/Comon/ScrollToTop";
import "./App.css";
import ReciterDetails from "./pages/ReciterDetails";
import Home from "./pages/Home";
import Live from "./pages/Live";
import Azkar from "./pages/Azkar";
import Quran from "./pages/Quran";
import Ruqyah from "./pages/Ruqyah";
import AllahNames from "./pages/AllahNames";

import Morning from "./component/azkarCorner/Morning";
import EveningAzkar from "./component/azkarCorner/EveningAzkar";
import FoodAzkar from "./component/azkarCorner/FoodAzkar";
import HajjAndUmrahAzkar from "./component/azkarCorner/HajjAndUmrahAzkar.jsx";
import KhalaAzkar from "./component/azkarCorner/KhalaAzkar.jsx";
import MosqueAzkar from "./component/azkarCorner/MosqueAzkar.jsx";
import WuduAzkar from "./component/azkarCorner/WuduAzkar.jsx";
import SleepAzkar from "./component/azkarCorner/SleepAzkar";
import WakeUpAzkar from "./component/azkarCorner/WakeUpAzkar.jsx";
import PrayerAzkar from "./component/azkarCorner/PrayerAzkar.jsx";
import PrayerLaterAzkar from "./component/azkarCorner/PrayerLaterAzkar.jsx";
import AdhanAzkar from "./component/azkarCorner/AdhanAzkar.jsx";
import HomeAzkar from "./component/azkarCorner/HomeAzkar.jsx";
import MiscellaneousAzkar from "./component/azkarCorner/MiscellaneousAzkar.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
        <Layout />
      </>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "reciter/:id",
        element: <ReciterDetails />,
      },
      {
        path: "/Live",
        element: <Live />,
      },

      {
        path: "/Quran",
        element: <Quran />,
      },
      {
        path: "/Ruqyah",
        element: <Ruqyah />,
      },

      {
        path: "/AllahNames",
        element: <AllahNames />,
      },
      {
        path: "/Azkar",
        element: <Azkar />,
      },
      {
        path: "/Morning",
        element: <Morning />,
      },
      {
        path: "/EveningAzkar",
        element: <EveningAzkar />,
      },
      {
        path: "/FoodAzkar",
        element: <FoodAzkar />,
      },
      {
        path: "/HajjAndUmrahAzkar",
        element: <HajjAndUmrahAzkar />,
      },
      {
        path: "/MosqueAzkar",
        element: <MosqueAzkar />,
      },
      {
        path: "/SleepAzkar",
        element: <SleepAzkar />,
      },
      {
        path: "/WuduAzkar",
        element: <WuduAzkar />,
      },
      {
        path: "/WakeUpAzkar",
        element: <WakeUpAzkar />,
      },
      {
        path: "/AdhanAzkar",
        element: <AdhanAzkar />,
      },
      {
        path: "/KhalaAzkar",
        element: <KhalaAzkar />,
      },
      {
        path: "/PrayerAzkar",
        element: <PrayerAzkar />,
      },
      {
        path: "/HomeAzkar",
        element: <HomeAzkar />,
      },
      {
        path: "/PrayerLaterAzkar",
        element: <PrayerLaterAzkar />,
      },
      {
        path: "/MiscellaneousAzkar",
        element: <MiscellaneousAzkar />,
      },
    ],
  },
]);
export default function App() {
  return <RouterProvider router={router} />;
}
