import React from "react";
import Button from "../../component/Button";

const NavigatorHeader = (props) => {
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
        <li>
          <Button name="Start" />
        </li>
        <li>
          <Button name="O co chodzi?" />
        </li>
        <li>
          <Button name="O nas" />
        </li>
        <li>
          <Button name="Fundacje i organizacje" />
        </li>
        <li>
          <Button name="Przekaż dary" />
        </li>
        <li>
          <Button name="Kontakt" />
        </li>
      </ul>
    </nav>
  );
};

export default NavigatorHeader;
