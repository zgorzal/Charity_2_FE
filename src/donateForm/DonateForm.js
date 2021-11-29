import React, { Component } from "react";
import Instructions from "./Instructions";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";

const API_GET_ALL_CATEGORIES = "http://localhost:8080/category";

class DonateForm extends Component {
  state = {
    step: 1,
    categories: [],
    numberOfBags: "",
    selectFundationId: "",
    street: "",
    city: "",
    zipCode: "",
    phone: "",
    date: "",
    time: "",
    comments: "",
  };

  GetAllCategoriesFetch = () => {
    fetch(API_GET_ALL_CATEGORIES)
      .then((response) => {
        if (response.ok) {
          return response;
        }
        throw Error(response.status);
      })
      .then((response) => response.json())
      .then((data) => {
        const categories = [];
        data.map((category) =>
          categories.push({
            id: category.id,
            name: category.name,
            isSelect: false,
          })
        );
        this.setState({
          categories: categories,
        });
      })
      .catch((error) => console.log(error));
  };

  handleCategoryCheckbox = (id) => {
    const categories = this.state.categories.map((category) => {
      if (id === category.id) {
        category.isSelect = !category.isSelect;
      }
      return category;
    });
    this.setState({
      categories: categories,
    });
  };

  handleFundationRadioButton = (e) => {
    this.setState({
      selectFundationId: e.target.value,
    });
  };

  handleNextButtonClick = (step) => {
    this.setState({
      step: step,
    });
  };

  handleInputBags = (e) => {
    this.setState({
      numberOfBags: e.target.value,
    });
  };

  handleInputStreet = (e) => {
    this.setState({
      street: e.target.value,
    });
  };

  handleInputCity = (e) => {
    this.setState({
      city: e.target.value,
    });
  };

  handleInputZipCode = (e) => {
    this.setState({
      zipCode: e.target.value,
    });
  };

  handleInputPhone = (e) => {
    this.setState({
      phone: e.target.value,
    });
  };

  handleInputDate = (e) => {
    this.setState({
      date: e.target.value,
    });
  };

  handleInputTime = (e) => {
    this.setState({
      time: e.target.value,
    });
  };

  handleInputComments = (e) => {
    this.setState({
      comments: e.target.value,
    });
  };

  componentDidMount() {
    this.GetAllCategoriesFetch();
  }

  render() {
    return (
      <section className="form--steps">
        <Instructions step={this.state.step} />

        <div className="form--steps-container">
          <div className="form--steps-counter">
            Krok <span>{this.state.step}</span>/4
          </div>
          <form action="form-confirmation.html" method="post">
            {this.state.step === 1 ? (
              <StepOne
                categories={this.state.categories}
                handleCategoryCheckbox={this.handleCategoryCheckbox}
                handleNextButtonClick={this.handleNextButtonClick}
              />
            ) : null}
            {this.state.step === 2 ? (
              <StepTwo
                handleInputBags={this.handleInputBags}
                handleNextButtonClick={this.handleNextButtonClick}
                numberOfBags={this.state.numberOfBags}
              />
            ) : null}
            {this.state.step === 3 ? (
              <StepThree
                handleFundationRadioButton={this.handleFundationRadioButton}
                handleNextButtonClick={this.handleNextButtonClick}
                fundations={this.props.fundations}
              />
            ) : null}
            {this.state.step === 4 ? (
              <StepFour
                handleInputStreet={this.handleInputStreet}
                street={this.state.street}
                handleInputCity={this.handleInputCity}
                city={this.state.city}
                handleNextButtonClick={this.handleNextButtonClick}
                handleInputZipCode={this.handleInputZipCode}
                zipCode={this.state.zipCode}
                handleInputPhone={this.handleInputPhone}
                phone={this.state.phone}
                handleInputDate={this.handleInputDate}
                date={this.state.date}
                handleInputTime={this.handleInputTime}
                time={this.state.time}
                handleInputComments={this.handleInputComments}
                comments={this.state.comments}
              />
            ) : null}
          </form>
        </div>
      </section>
    );
  }
}

export default DonateForm;
