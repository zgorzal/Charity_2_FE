import React from "react";
import Fundation from "./Fundation";

const StepThree = (props) => {
  return (
    <div data-step="3" className="active">
      <h3>Wybierz organizacje, której chcesz pomóc:</h3>

      <Fundation
        fundations={props.fundations}
        handleFundationRadioButton={props.handleFundationRadioButton}
      />

      <div className="form-group form-group--buttons">
        <button
          type="button"
          className="btn prev-step"
          onClick={() => props.handleNextButtonClick(2)}
        >
          Wstecz
        </button>
        <button
          type="button"
          className="btn next-step"
          onClick={() => props.handleNextButtonClick(4)}
        >
          Dalej
        </button>
      </div>
    </div>
  );
};

export default StepThree;
