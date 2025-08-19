import React from "react";
import RecitersList from "./component/Reciters/RecitersList";
import Home from "./pages/Home";
import ReciterDetails from "./pages/ReciterDetails";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./component/Comon/Layout";
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
    ],
  },
]);
export default function App() {
  return <RouterProvider router={router} />;
}
