import React, { Component } from "react";
import "./App.css";
import HeaderMainPage from "./mainPage/header/HeaderMainPage";
import SummarySection from "./mainPage/summarySection/SummarySection";
import StepsSection from "./mainPage/stepsSection/StepsSection";
import AboutSection from "./mainPage/aboutSection/AboutSection";
import FoundationSection from "./mainPage/foundationSection/FoundationSection";
import Footer from "./mainPage/footer/Footer";

const API_GET_ALL_QUANTITY = "http://localhost:8080/donation/quantity";
const API_GET_NUMBER_OF_DONATIONS = "http://localhost:8080/donation/count";
const API_GET_ALL_INSTITUTIONS = "http://localhost:8080/institution";

class App extends Component {
  state = {
    donationsAllQuantity: null,
    numberOfDonations: null,
    institutions: [],
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

  componentDidMount() {
    this.GetAllQuantityFetch();
    this.GetNumberOfDonations();
    this.GetAllInstitutions();
  }

  render() {
    return (
      <>
        <HeaderMainPage />
        <SummarySection
          donationsAllQuantity={this.state.donationsAllQuantity}
          numberOfDonations={this.state.numberOfDonations}
        />
        <StepsSection />
        <AboutSection />
        <FoundationSection institutions={this.state.institutions} />
        <Footer />
      </>
    );
  }
}

export default App;
