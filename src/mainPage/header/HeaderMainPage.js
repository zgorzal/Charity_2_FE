import React from "react";
import NavigatorHeader from "./NavigatorHeader";
import TitleHeader from "./TitleHeader";

const HeaderMainPage = (props) => {
    const startButton = props.startButton;
    const donateButton = props.donateButton;
    const loginButton = props.loginButton;
    const donateFormIsActive = props.donateFormIsActive;
    const loginSectionIsActive = props.loginSectionIsActive
    let headerClass = ""
    if (donateFormIsActive) {
        headerClass = "header--form-page"
    } else if (loginSectionIsActive) {
        headerClass = ""
    } else {
        headerClass = "header--main-page"
    }
    return (
        <header className={headerClass}>
            <NavigatorHeader
                startButton={startButton}
                donateButton={donateButton}
                loginButton={loginButton}
                donateFormIsActive={donateFormIsActive}
                loginSectionIsActive={loginSectionIsActive}
            />
            <TitleHeader
                donateFormIsActive={donateFormIsActive}
                loginSectionIsActive={loginSectionIsActive}
            />
        </header>
    );
};

export default HeaderMainPage;
