import React from "react";
import RecitersList from "./component/Reciters/RecitersList";
import Home from "./pages/Home";
import ReciterDetails from "./pages/ReciterDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./component/Comon/Layout";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="reciter/:id" element={<ReciterDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
