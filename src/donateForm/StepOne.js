import React from "react";
import Category from "./Category";

const StepOne = (props) => {
  const categories = props.categories;

  return (
    <div data-step="1" className="active">
      <h3>Zaznacz co chcesz oddać:</h3>

      <Category
        categories={categories}
        handleCategoryCheckbox={props.handleCategoryCheckbox}
      />

      <div className="form-group form-group--buttons">
        <button
          type="button"
          className="btn next-step"
          onClick={() => props.handleNextButtonClick(2)}
        >
          Dalej
        </button>
      </div>
    </div>
  );
};

export default StepOne;
