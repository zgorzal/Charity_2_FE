import React from "react";

const StepFour = (props) => {
  return (
    <div data-step="4" className="active">
      <h3>Podaj adres oraz termin odbioru rzecz przez kuriera:</h3>

      <div className="form-section form-section--columns">
        <div className="form-section--column">
          <h4>Adres odbioru</h4>
          <div className="form-group form-group--inline">
            <label>
              Ulica{" "}
              <input
                type="text"
                name="address"
                onChange={props.handleInputStreet}
                value={props.street}
              />{" "}
            </label>
          </div>

          <div className="form-group form-group--inline">
            <label>
              Miasto{" "}
              <input
                type="text"
                name="city"
                onChange={props.handleInputCity}
                value={props.city}
              />{" "}
            </label>
          </div>

          <div className="form-group form-group--inline">
            <label>
              Kod pocztowy{" "}
              <input
                type="text"
                name="postcode"
                onChange={props.handleInputZipCode}
                value={props.zipCode}
              />
            </label>
          </div>

          <div className="form-group form-group--inline">
            <label>
              Numer telefonu{" "}
              <input
                type="phone"
                name="phone"
                onChange={props.handleInputPhone}
                value={props.phone}
              />
            </label>
          </div>
        </div>

        <div className="form-section--column">
          <h4>Termin odbioru</h4>
          <div className="form-group form-group--inline">
            <label>
              Data{" "}
              <input
                type="date"
                name="data"
                onChange={props.handleInputDate}
                value={props.date}
              />{" "}
            </label>
          </div>

          <div className="form-group form-group--inline">
            <label>
              Godzina{" "}
              <input
                type="time"
                name="time"
                onChange={props.handleInputTime}
                value={props.time}
              />{" "}
            </label>
          </div>

          <div className="form-group form-group--inline">
            <label>
              Uwagi dla kuriera
              <textarea
                name="more_info"
                rows="5"
                onChange={props.handleInputComments}
                defaultValue={props.comments}
              ></textarea>
            </label>
          </div>
        </div>
      </div>
      <div className="form-group form-group--buttons">
        <button
          type="button"
          className="btn prev-step"
          onClick={() => props.handleNextButtonClick(3)}
        >
          Wstecz
        </button>
        <button
          type="button"
          className="btn next-step"
          onClick={() => props.handleNextButtonClick(5)}
        >
          Dalej
        </button>
      </div>
    </div>
  );
};

export default StepFour;
