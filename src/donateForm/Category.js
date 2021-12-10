import React from "react";

const Category = (props) => {
    const categories = props.categories.map((category) => (
        <div className="form-group form-group--checkbox" key={category.id}>
            <label>
                <input
                    type="checkbox"
                    name="categories"
                    value="clothes-to-use"
                    checked={category.isSelect}
                    onChange={() => props.handleCategoryCheckbox(category.id)}
                />
                <span className="checkbox"/>
                <span className="description">{category.name}</span>
            </label>
        </div>
    ));

    return <>{categories}</>;
};

export default Category;
