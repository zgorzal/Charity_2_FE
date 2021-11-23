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
          <Button name="Zaloguj" classList={["btn--small"]} />
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
            <Button name="Start" handleClick={StartButton} />
          </li>
        )}

        {!donateFormIsActive && (
          <li>
            <Button name="O co chodzi?" />
          </li>
        )}

        {!donateFormIsActive && (
          <li>
            <Button name="O nas" />
          </li>
        )}

        {!donateFormIsActive && (
          <li>
            <Button name="Fundacje i organizacje" />
          </li>
        )}

        {!donateFormIsActive && (
          <li>
            <Button name="Przekaż dary" handleClick={DonateButton} />
          </li>
        )}

        <li>
          <Button name="Kontakt" />
        </li>
      </ul>
    </nav>
  );
};

export default NavigatorHeader;
