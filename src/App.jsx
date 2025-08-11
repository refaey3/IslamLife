import React from "react";
import RecitersList from "./component/RecitersList";
import Home from "./pages/Home";
import ReciterDetails from "./pages/ReciterDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./component/Layout";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="reciter/:id" element={<ReciterDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
