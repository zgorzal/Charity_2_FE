import React from "react";

const FoundationSection = (props) => {
  const institutions = [];

  for (var i = 0; i < props.institutions.length - 1; i++) {
    institutions.push(
      <li key={props.institutions[i].id}>
        <div className="col">
          <div className="title">{props.institutions[i].name}</div>
          <div className="subtitle">{props.institutions[i].description}</div>
        </div>
        <div className="col" key={props.institutions[i + 1].id}>
          <div className="title">{props.institutions[i + 1].name}</div>
          <div className="subtitle">
            {props.institutions[i + 1].description}
          </div>
        </div>
      </li>
    );
    i++;
    if (props.institutions.length % 2 !== 0) {
      const i = props.institutions.length - 1;
      institutions.push(
        <li key={props.institutions[i].id}>
          <div className="col">
            <div className="title">{props.institutions[i].name}</div>
            <div className="subtitle">{props.institutions[i].description}</div>
          </div>
        </li>
      );
    }
  }

  return (
    <section id="help" className="help">
      <h2>Komu pomagamy?</h2>
      <div className="help--slides active" data-id="1">
        <p>
          W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
          współpracujemy. Możesz sprawdzić czym się zajmują.
        </p>

        <ul className="help--slides-items">{institutions}</ul>
      </div>
    </section>
  );
};

export default FoundationSection;
