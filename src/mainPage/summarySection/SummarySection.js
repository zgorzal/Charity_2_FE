import React from "react";

const SummarySection = (props) => {
  return (
    <section id="stats" className="stats">
      <div className="container container--85">
        <div className="stats--item">
          <em>10</em>
          <h3>Oddanych worków</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius est
            beatae, quod accusamus illum tempora!
          </p>
        </div>

        <div className="stats--item">
          <em>5</em>
          <h3>Przekazanych darów</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
            magnam, sint nihil cupiditate quas quam.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SummarySection;
