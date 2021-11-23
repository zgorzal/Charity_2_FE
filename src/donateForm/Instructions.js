import React from "react";

const Instructions = (props) => {
  const step = props.step;
  let info = "";
  if (step === 3) {
    info = "Wybierz jedną, do której trafi Twoja przesyłka.";
  } else if (step === 4) {
    info = "Podaj adres oraz termin odbioru rzeczy.";
  } else {
    info =
      "Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.";
  }

  return (
    <div className="form--steps-instructions">
      <div className="form--steps-container">
        <h3>Ważne!</h3>
        <p className="active">{info}</p>
      </div>
    </div>
  );
};

export default Instructions;
