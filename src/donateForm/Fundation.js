import React from "react";

const Fundation = (props) => {
  const fundations = props.fundations.map((fundation) => (
    <div className="form-group form-group--checkbox" key={fundation.id}>
      <label onChange={props.handleFundationRadioButton}>
        <input type="radio" name="organization" value={fundation.id} />
        <span className="checkbox radio"></span>
        <span className="description">
          <div className="title">{fundation.name}</div>
          <div className="subtitle">{fundation.description}</div>
        </span>
      </label>
    </div>
  ));
  return <>{fundations}</>;
};

export default Fundation;
