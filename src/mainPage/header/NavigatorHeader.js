import React from "react";
import Button from "../../component/Button";

const NavigatorHeader = (props) => {
    const StartButton = props.startButton;
    const DonateButton = props.donateButton;
    const LoginButton = props.loginButton;
    const registerButton = props.registerButton
    const donateFormIsActive = props.donateFormIsActive;
    const loginSectionIsActive = props.loginSectionIsActive;
    const registerSectionIsActive = props.registerSectionIsActive
    const activeSection = donateFormIsActive || loginSectionIsActive || registerSectionIsActive
    const login = props.login
    const email = props.email

    return (
        <nav className="container container--70">
            <ul className="nav--actions">
                <li>
                    {login ? <h1> {email} </h1> :
                        <Button name="Zaloguj" classList={["btn--small"]} handleClick={LoginButton}/>}
                </li>
                <li>
                    {!login && (<Button
                        name="Załóż konto"
                        classList={["btn--small btn--highlighted"]}
                        handleClick={registerButton}
                    />)}
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

                {!activeSection && (
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
