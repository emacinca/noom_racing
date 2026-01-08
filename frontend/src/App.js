import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/home.js";
import GameLoop from "./pages/gameloop.js";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/gameloop" element={<GameLoop />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
