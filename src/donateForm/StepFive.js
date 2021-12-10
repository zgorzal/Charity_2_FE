import React from "react";

const API_POST_ADD_DONATION = "https://zgorzalcharity.herokuapp.com/donation";

const StepFive = (props) => {

    const categoriesId = []

    props.summary.categories.forEach((category) => {
        if (category.isSelect) {
            categoriesId.push(category.id)
        }
    })

    const AddDonationForm = () => {
        fetch(API_POST_ADD_DONATION, {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                quantity: props.summary.numberOfBags,
                categoriesId: categoriesId,
                institutionId: props.summary.selectFundationId,
                street: props.summary.street,
                city: props.summary.city,
                zipCode: props.summary.zipCode,
                pickUpDate: props.summary.date,
                pickUpTime: props.summary.time,
                pickUpComment: props.summary.comments,
            }),
        })
            .then((response) => {
                if (response.ok) {
                    return response;
                }
                throw Error(response.status);
            })
            .then((response) => response.json())
            .then((data) => {
            })
            .catch((error) => console.log(error));
    };

    return (
        <div data-step="5" className="active">
            <h3>Podsumowanie Twojej darowizny</h3>

            <div className="summary">
                <div className="form-section">
                    <h4>Oddajesz:</h4>
                    <ul>
                        <li>
                            <span className="icon icon-bag"/>
                            <span className="summary--text">
                Ilość worków: {props.summary.numberOfBags}
              </span>
                        </li>

                        <li>
                            <span className="icon icon-hand"/>
                            <span className="summary--text">
                Fundacja: {props.summary.selectFundationName}
              </span>
                        </li>
                    </ul>
                </div>

                <div className="form-section form-section--columns">
                    <div className="form-section--column">
                        <h4>Adres odbioru:</h4>
                        <ul>
                            <li>{props.summary.street}</li>
                            <li>{props.summary.city}</li>
                            <li>{props.summary.zipCode}</li>
                            <li>{props.summary.phone}</li>
                        </ul>
                    </div>

                    <div className="form-section--column">
                        <h4>Termin odbioru:</h4>
                        <ul>
                            <li>{props.summary.date}</li>
                            <li>{props.summary.time}</li>
                            <li>{props.summary.comments}</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="form-group form-group--buttons">
                <button
                    type="button"
                    className="btn prev-step"
                    onClick={() => props.handleNextButtonClick(4)}
                >
                    Wstecz
                </button>
                <button
                    type="button"
                    className="btn next-step"
                    onClick={AddDonationForm}
                >
                    Potwierdzam
                </button>
            </div>
        </div>
    );
};

export default StepFive;
