import React, {Component} from "react";
import Instructions from "./Instructions";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import StepFive from "./StepFive";
import Confirmation from "./Confirmation"

const API_GET_ALL_CATEGORIES = "https://zgorzalcharity.herokuapp.com/category";

class DonateForm extends Component {
    state = {
        step: 1,
        categories: [],
        numberOfBags: "",
        selectFundationId: "",
        selectFundationName: "",
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
        const fundations = this.props.fundations;
        fundations.forEach((fundation) => {
            if (Number(fundation.id) === Number(e.target.value)) {
                this.setState({
                    selectFundationId: e.target.value,
                    selectFundationName: fundation.name,
                });
            }
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
                {this.state.step <= 4 ? <Instructions step={this.state.step}/> : null}

                <div className="form--steps-container">
                    {this.state.step <= 4 ? (
                        <div className="form--steps-counter">
                            Krok <span>{this.state.step}</span>/4
                        </div>
                    ) : null}

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
                                selectFundationId={this.state.selectFundationId}
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
                        {this.state.step === 5 ? (
                            <StepFive
                                handleNextButtonClick={this.handleNextButtonClick}
                                summary={this.state}
                            />
                        ) : null}
                        {this.state.step === 6 ? (
                            <Confirmation/>
                        ) : null}
                    </form>
                </div>
            </section>
        );
    }
}

export default DonateForm;
