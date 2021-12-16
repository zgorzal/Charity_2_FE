import React from "react";
import NavigatorHeader from "./NavigatorHeader";
import TitleHeader from "./TitleHeader";

const HeaderMainPage = (props) => {
    const startButton = props.startButton;
    const donateButton = props.donateButton;
    const loginButton = props.loginButton;
    const registerButton = props.registerButton;
    const donateFormIsActive = props.donateFormIsActive;
    const loginSectionIsActive = props.loginSectionIsActive
    const registerSectionIsActive = props.registerSectionIsActive

    let headerClass = ""
    if (donateFormIsActive) {
        headerClass = "header--form-page"
    } else if (loginSectionIsActive || registerSectionIsActive) {
        headerClass = ""
    } else {
        headerClass = "header--main-page"
    }
    return (
        <header className={headerClass}>
            <NavigatorHeader
                email={props.email}
                login={props.login}
                startButton={startButton}
                donateButton={donateButton}
                loginButton={loginButton}
                registerButton={registerButton}
                donateFormIsActive={donateFormIsActive}
                loginSectionIsActive={loginSectionIsActive}
                registerSectionIsActive={registerSectionIsActive}
            />
            <TitleHeader
                donateFormIsActive={donateFormIsActive}
                loginSectionIsActive={loginSectionIsActive}
                registerSectionIsActive={registerSectionIsActive}
            />
        </header>
    );
};

export default HeaderMainPage;
