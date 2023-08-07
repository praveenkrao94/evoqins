import React from "react";
import Navbar from "./components/navbar/Navbar";

import "./App.css";
import HeroPage from "./components/heropage/HeroPage";

import "bootstrap/dist/css/bootstrap.min.css";


import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from './components/navbar/Footer/Footer'
import { FilterProvider } from "./components/useFilterContext";


function App() {
  return (
    <>
      <BrowserRouter>
      <FilterProvider initialPageNumber={1}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HeroPage />} />
        </Routes>

       <Footer/>
       </FilterProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
