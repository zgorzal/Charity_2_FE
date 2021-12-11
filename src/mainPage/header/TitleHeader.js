import React from "react";

const TitleHeader = (props) => {
    const donateFormIsActive = props.donateFormIsActive;
    const loginSectionIsActive = props.loginSectionIsActive;
    let title;
    if (donateFormIsActive) {
        title = (
            <div className="slogan--item">
                <h1>
                    Oddaj rzeczy, których już nie chcesz
                    <br/>
                    <span className="uppercase">potrzebującym</span>
                </h1>

                <div className="slogan--steps">
                    <div className="slogan--steps-title">Wystarczą 4 proste kroki:</div>
                    <ul className="slogan--steps-boxes">
                        <li>
                            <div>
                                <em>1</em>
                                <span>Wybierz rzeczy</span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <em>2</em>
                                <span>Spakuj je w worki</span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <em>3</em>
                                <span>Wybierz fundację</span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <em>4</em>
                                <span>Zamów kuriera</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    } else if (loginSectionIsActive) {
        title = null
    } else {
        title = (
            <div className="slogan--item">
                <h1>
                    Zacznij pomagać!
                    <br/>
                    Oddaj niechciane rzeczy w zaufane ręce
                </h1>
            </div>
        );
    }
    return <div className="slogan container container--90">{title}</div>;
};

export default TitleHeader;
