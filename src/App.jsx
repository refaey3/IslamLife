import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./component/Comon/Layout";
import "./App.css";
import ReciterDetails from "./pages/ReciterDetails";
import Home from "./pages/Home";
import Live from "./pages/Live";
import Favorites from "./pages/Favorites";
import Azkar from "./pages/Azkar";
import Quran from "./pages/Quran";
import Ruqyah from "./pages/Ruqyah";
import Duaa from "./pages/Duaa";
import Ibadat from "./pages/Ibadat";
import AllahNames from "./pages/AllahNames";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
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
        path: "/Favorites",
        element: <Favorites />,
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
        path: "/Ibadat",
        element: <Ibadat />,
      },
      {
        path: "/Duaa",
        element: <Duaa />,
      },
      {
        path: "/AllahNames",
        element: <AllahNames />,
      },
      {
        path: "/Azkar",
        element: <Azkar />,
      },
    ],
  },
]);
export default function App() {
  return <RouterProvider router={router} />;
}
