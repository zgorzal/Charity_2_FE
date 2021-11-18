import React, { Component } from "react";
import "./App.css";
import HeaderMainPage from "./mainPage/header/HeaderMainPage";
import SummarySection from "./mainPage/summarySection/SummarySection";
import StepsSection from "./mainPage/stepsSection/StepsSection";
import AboutSection from "./mainPage/aboutSection/AboutSection";
import FoundationSection from "./mainPage/foundationSection/FoundationSection";
import Footer from "./mainPage/footer/Footer";

class App extends Component {
  render() {
    return (
      <>
        <HeaderMainPage />
        <SummarySection />
        <StepsSection />
        <AboutSection />
        <FoundationSection />
        <Footer />
      </>
    );
  }
}

export default App;
