import React, { Component } from "react";
import Instructions from "./Instructions";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";

const API_GET_ALL_CATEGORIES = "http://localhost:8080/category";

class DonateForm extends Component {
  state = {
    step: 1,
    categories: [],
    numberOfBags: "",
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
          </form>
        </div>
      </section>
    );
  }
}

export default DonateForm;
