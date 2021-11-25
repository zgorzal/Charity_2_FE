import React, { Component } from "react";
import "./App.css";
import HeaderMainPage from "./mainPage/header/HeaderMainPage";
import SummarySection from "./mainPage/summarySection/SummarySection";
import StepsSection from "./mainPage/stepsSection/StepsSection";
import AboutSection from "./mainPage/aboutSection/AboutSection";
import FoundationSection from "./mainPage/foundationSection/FoundationSection";
import Footer from "./mainPage/footer/Footer";
import DonateForm from "./donateForm/DonateForm";

const API_GET_ALL_QUANTITY = "http://localhost:8080/donation/quantity";
const API_GET_NUMBER_OF_DONATIONS = "http://localhost:8080/donation/count";
const API_GET_ALL_INSTITUTIONS = "http://localhost:8080/institution";

class App extends Component {
  state = {
    aboutSectionIsVisible: true,
    summarySectionIsVisible: true,
    stepsSectionIsVisible: true,
    foundationSectionIsVisible: true,
    donateFormIsVisible: false,

    donationsAllQuantity: null,
    numberOfDonations: null,
    institutions: [],

    donateFormIsActive: false,
  };

  GetAllQuantityFetch = () => {
    fetch(API_GET_ALL_QUANTITY)
      .then((response) => {
        if (response.ok) {
          return response;
        }
        throw Error(response.status);
      })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          donationsAllQuantity: data.quantity,
        });
      })
      .catch((error) => console.log(error));
  };

  GetNumberOfDonations = () => {
    fetch(API_GET_NUMBER_OF_DONATIONS)
      .then((response) => {
        if (response.ok) {
          return response;
        }
        throw Error(response.status);
      })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          numberOfDonations: data.numberOfDonations,
        });
      })
      .catch((error) => console.log(error));
  };

  GetAllInstitutions = () => {
    fetch(API_GET_ALL_INSTITUTIONS)
      .then((response) => {
        if (response.ok) {
          return response;
        }
        throw Error(response.status);
      })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          institutions: data,
        });
      })
      .catch((error) => console.log(error));
  };

  handleDonateButton = () => {
    this.setState({
      aboutSectionIsVisible: false,
      summarySectionIsVisible: false,
      stepsSectionIsVisible: false,
      foundationSectionIsVisible: false,
      donateFormIsActive: true,
      donateFormIsVisible: true,
    });
  };

  handleStartButton = () => {
    this.setState({
      aboutSectionIsVisible: true,
      summarySectionIsVisible: true,
      stepsSectionIsVisible: true,
      foundationSectionIsVisible: true,
      donateFormIsActive: false,
      donateFormIsVisible: false,
    });
  };

  componentDidMount() {
    this.GetAllQuantityFetch();
    this.GetNumberOfDonations();
    this.GetAllInstitutions();
  }

  render() {
    return (
      <>
        <HeaderMainPage
          startButton={this.handleStartButton}
          donateButton={this.handleDonateButton}
          donateFormIsActive={this.state.donateFormIsActive}
        />

        {this.state.donateFormIsVisible && (
          <DonateForm fundations={this.state.institutions} />
        )}

        {this.state.summarySectionIsVisible && (
          <SummarySection
            donationsAllQuantity={this.state.donationsAllQuantity}
            numberOfDonations={this.state.numberOfDonations}
          />
        )}

        {this.state.stepsSectionIsVisible && <StepsSection />}

        {this.state.aboutSectionIsVisible && <AboutSection />}

        {this.state.foundationSectionIsVisible && (
          <FoundationSection institutions={this.state.institutions} />
        )}

        <Footer />
      </>
    );
  }
}

export default App;
