import React, {Component} from "react";
import "./App.css";
import HeaderMainPage from "./mainPage/header/HeaderMainPage";
import SummarySection from "./mainPage/summarySection/SummarySection";
import StepsSection from "./mainPage/stepsSection/StepsSection";
import AboutSection from "./mainPage/aboutSection/AboutSection";
import FoundationSection from "./mainPage/foundationSection/FoundationSection";
import Footer from "./mainPage/footer/Footer";
import DonateForm from "./donateForm/DonateForm";
import Login from "./login/Login";
import Register from "./register/Register";

const API_GET_ALL_QUANTITY = "https://zgorzalcharity.herokuapp.com/donation/quantity";
const API_GET_NUMBER_OF_DONATIONS = "https://zgorzalcharity.herokuapp.com/donation/count";
const API_GET_ALL_INSTITUTIONS = "https://zgorzalcharity.herokuapp.com/institution";
const API_POST_ADD_USER = "https://zgorzalcharity.herokuapp.com/user";
const API_POST_LOGIN = "https://zgorzalcharity.herokuapp.com/login?";
const API_GET_USER = "https://zgorzalcharity.herokuapp.com/user/1";

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
        loginSectionIsActive: false,
        registerSectionIsActive: false,
        login: false,
        email: ""
    };

    GetAllQuantityFetch = () => {
        fetch(API_GET_ALL_QUANTITY)
            .then((response) => {
                if (response.ok) {
                    return response;
                } else {
                    return response.text().then(text => {
                        throw new Error(text)
                    })
                }
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
                } else {
                    return response.text().then(text => {
                        throw new Error(text)
                    })
                }
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
                } else {
                    return response.text().then(text => {
                        throw new Error(text)
                    })
                }
            })
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    institutions: data,
                });
            })
            .catch((error) => console.log(error));
    };

    AddUser = (e, email, password, repeatPassword) => {
        e.preventDefault()
        fetch(API_POST_ADD_USER, {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: email,
                password: password,
                repeatPassword: repeatPassword
            }),
        })
            .then((response) => {
                if (response.ok) {
                    this.setState({
                        aboutSectionIsVisible: true,
                        summarySectionIsVisible: true,
                        stepsSectionIsVisible: true,
                        foundationSectionIsVisible: true,
                        donateFormIsActive: false,
                        donateFormIsVisible: false,
                        loginSectionIsActive: false,
                        registerSectionIsActive: false
                    });
                } else {
                    return response.text().then(text => {
                        throw new Error(text)
                    })
                }
            })
            .catch((error) => console.log(error));
    };

    LoginUser = (e, email, password) => {
        e.preventDefault()

        fetch(API_POST_LOGIN + "email=" + email + "&password=" + password, {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
        })
            .then((response) => response.json())
            .then((data) => {
                localStorage.setItem("access_token", data.access_token)
                localStorage.setItem("refresh_token", data.refresh_token)
                this.setState({
                    aboutSectionIsVisible: true,
                    summarySectionIsVisible: true,
                    stepsSectionIsVisible: true,
                    foundationSectionIsVisible: true,
                    donateFormIsActive: false,
                    donateFormIsVisible: false,
                    loginSectionIsActive: false,
                    registerSectionIsActive: false,
                    login: true,
                    email: email
                });
            })
            .catch((error) => console.log(error));
    }

    GetUser = () => {
        fetch(API_GET_USER, {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("access_token"),
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                if (response.ok) {
                    return response;
                } else {
                    return response.text().then(text => {
                        throw new Error(text)
                    })
                }
            })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
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
            loginSectionIsActive: false,
            registerSectionIsActive: false
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
            loginSectionIsActive: false,
            registerSectionIsActive: false
        });
    };

    handleLoginButton = () => {
        this.setState({
            aboutSectionIsVisible: false,
            summarySectionIsVisible: false,
            stepsSectionIsVisible: false,
            foundationSectionIsVisible: false,
            donateFormIsActive: false,
            donateFormIsVisible: false,
            loginSectionIsActive: true,
            registerSectionIsActive: false
        });
    }

    handleRegisterButton = () => {
        this.setState({
            aboutSectionIsVisible: false,
            summarySectionIsVisible: false,
            stepsSectionIsVisible: false,
            foundationSectionIsVisible: false,
            donateFormIsActive: false,
            donateFormIsVisible: false,
            loginSectionIsActive: false,
            registerSectionIsActive: true
        });
    }

    componentDidMount() {
        this.GetAllQuantityFetch();
        this.GetNumberOfDonations();
        this.GetAllInstitutions();
    }

    render() {
        return (
            <>
                <HeaderMainPage
                    email={this.state.email}
                    login={this.state.login}
                    startButton={this.handleStartButton}
                    donateButton={this.handleDonateButton}
                    loginButton={this.handleLoginButton}
                    registerButton={this.handleRegisterButton}
                    donateFormIsActive={this.state.donateFormIsActive}
                    loginSectionIsActive={this.state.loginSectionIsActive}
                    registerSectionIsActive={this.state.registerSectionIsActive}
                />
                {this.state.donateFormIsVisible && (<DonateForm fundations={this.state.institutions}/>)}
                {this.state.loginSectionIsActive && (<Login LoginUser={this.LoginUser}/>)}
                {this.state.registerSectionIsActive && (<Register AddUser={this.AddUser}/>)}
                {this.state.summarySectionIsVisible && (
                    <SummarySection
                        donationsAllQuantity={this.state.donationsAllQuantity}
                        numberOfDonations={this.state.numberOfDonations}
                    />
                )}
                {this.state.stepsSectionIsVisible && <StepsSection registerButton={this.handleRegisterButton}/>}
                {this.state.aboutSectionIsVisible && <AboutSection/>}
                {this.state.foundationSectionIsVisible && (<FoundationSection institutions={this.state.institutions}/>)}
                <Footer/>
            </>
        );
    }
}


export default App;
