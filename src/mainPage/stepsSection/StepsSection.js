import React from "react";
import Button from "../../component/Button";

const StepsSection = (props) => {
  return (
    <section id="steps" className="steps">
      <h2>Wystarczą 4 proste kroki</h2>

      <div className="steps--container">
        <div className="steps--item">
          <span className="icon icon--hands"></span>
          <h3>Wybierz rzeczy</h3>
          <p>ubrania, zabawki, sprzęt i inne</p>
        </div>
        <div className="steps--item">
          <span className="icon icon--arrow"></span>
          <h3>Spakuj je</h3>
          <p>skorzystaj z worków na śmieci</p>
        </div>
        <div className="steps--item">
          <span className="icon icon--glasses"></span>
          <h3>Zdecyduj komu chcesz pomóc</h3>
          <p>wybierz zaufane miejsce</p>
        </div>
        <div className="steps--item">
          <span className="icon icon--courier"></span>
          <h3>Zamów kuriera</h3>
          <p>kurier przyjedzie w dogodnym terminie</p>
        </div>
      </div>

      <Button name="Załóż konto" classList={["btn--large btn--highlighted"]} />
    </section>
  );
};

export default StepsSection;
