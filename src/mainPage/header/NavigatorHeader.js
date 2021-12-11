import React from "react";
import Button from "../../component/Button";

const NavigatorHeader = (props) => {
    const StartButton = props.startButton;
    const DonateButton = props.donateButton;
    const donateFormIsActive = props.donateFormIsActive;

    return (
        <nav className="container container--70">
            <ul className="nav--actions">
                <li>
                    <Button name="Zaloguj" classList={["btn--small"]}/>
                </li>
                <li>
                    <Button
                        name="Załóż konto"
                        classList={["btn--small btn--highlighted"]}
                    />
                </li>
            </ul>

            <ul>
                {donateFormIsActive && (
                    <li>
                        <Button name="Start" handleClick={StartButton}/>
                    </li>
                )}

                {!donateFormIsActive && (
                    <div onClick={() => window.location.replace("/#steps")}>
                        <li>
                            <Button name="O co chodzi?"/>
                        </li>
                    </div>
                )}

                {!donateFormIsActive && (
                    <div onClick={() => window.location.replace("/#about-us")}>
                        <li>
                            <Button name="O nas"/>
                        </li>
                    </div>
                )}

                {!donateFormIsActive && (
                    <div onClick={() => window.location.replace("/#help")}>
                        <li>
                            <Button name="Fundacje i organizacje"/>
                        </li>
                    </div>
                )}

                {!donateFormIsActive && (
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
