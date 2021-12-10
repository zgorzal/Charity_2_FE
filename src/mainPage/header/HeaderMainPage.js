import React from "react";
import NavigatorHeader from "./NavigatorHeader";
import TitleHeader from "./TitleHeader";

const HeaderMainPage = (props) => {
    const startButton = props.startButton;
    const donateButton = props.donateButton;
    const donateFormIsActive = props.donateFormIsActive;
    const headerClass = !donateFormIsActive
        ? "header--main-page"
        : "header--form-page";
    return (
        <header className={headerClass}>
            <NavigatorHeader
                startButton={startButton}
                donateButton={donateButton}
                donateFormIsActive={donateFormIsActive}
            />
            <TitleHeader donateFormIsActive={donateFormIsActive}/>
        </header>
    );
};

export default HeaderMainPage;
