import React from "react";

const StepTwo = (props) => {
  return (
    <div data-step="2" className="active">
      <h3>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h3>

      <div className="form-group form-group--inline">
        <label>
          Liczba 60l worków:
          <input
            type="number"
            name="bags"
            step="1"
            min="1"
            value={props.numberOfBags}
            onChange={props.handleInputBags}
          />
        </label>
      </div>

      <div className="form-group form-group--buttons">
        <button
          type="button"
          className="btn prev-step"
          onClick={() => props.handleNextButtonClick(1)}
        >
          Wstecz
        </button>
        <button
          type="button"
          className="btn next-step"
          onClick={() => props.handleNextButtonClick(3)}
        >
          Dalej
        </button>
      </div>
    </div>
  );
};

export default StepTwo;
