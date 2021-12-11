import React from "react";
import Button from "../../component/Button";

const NavigatorHeader = (props) => {
    const StartButton = props.startButton;
    const DonateButton = props.donateButton;
    const LoginButton = props.loginButton;
    const donateFormIsActive = props.donateFormIsActive;
    const loginSectionIsActive = props.loginSectionIsActive;
    const activeSection = donateFormIsActive || loginSectionIsActive

    return (
        <nav className="container container--70">
            <ul className="nav--actions">
                <li>
                    <Button name="Zaloguj" classList={["btn--small"]} handleClick={LoginButton}/>
                </li>
                <li>
                    <Button
                        name="Załóż konto"
                        classList={["btn--small btn--highlighted"]}
                    />
                </li>
            </ul>

            <ul>
                {activeSection && (
                    <li>
                        <Button name="Start" handleClick={StartButton}/>
                    </li>
                )}

                {!activeSection && (
                    <div onClick={() => window.location.replace("/#steps")}>
                        <li>
                            <Button name="O co chodzi?"/>
                        </li>
                    </div>
                )}

                {!activeSection && (
                    <div onClick={() => window.location.replace("/#about-us")}>
                        <li>
                            <Button name="O nas"/>
                        </li>
                    </div>
                )}

                {!activeSection  && (
                    <div onClick={() => window.location.replace("/#help")}>
                        <li>
                            <Button name="Fundacje i organizacje"/>
                        </li>
                    </div>
                )}

                {!activeSection && (
                    <li>
                        <Button name="Przekaż dary" handleClick={DonateButton}/>
                    </li>
                )}
                <div onClick={() => window.location.replace("/#contact")}>
                    <li>
                        <Button name="Kontakt"/>
                    </li>
                </div>
            </ul>
        </nav>
    );
};

export default NavigatorHeader;
