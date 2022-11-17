import React from "react";
import "./App.scss";
import CardsSection from "./components/CardsSection/CardsSection";
import Carousel from "./components/Carousel/Carousel";
import Header from "./components/Header/Header";
import MainSection from "./components/MainSection/MainSection";
import ServicesSection from "./components/ServicesSection/ServicesSection";
import { Data } from "./Data";

function App() {
  return (
    <div className="App">
      <Header />
      <MainSection />
      <CardsSection />
      <ServicesSection />
      <Carousel slides={Data} />
    </div>
  );
}

export default App;
