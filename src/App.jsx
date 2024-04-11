import React, { useState } from "react";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CarouselCustomNavigation } from "./pages/Company Page/Carousel_HomePage";; // Adjust the path if needed
import FAQmore from "./pages/FAQ/FaqViewer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />  {/* Default route */}
        <Route path="/CompanyPage" element={<CarouselCustomNavigation />} />
        <Route path="/FAQ" element={<FAQmore />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
