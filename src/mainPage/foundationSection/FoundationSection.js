import React from "react";

const FoundationSection = (props) => {
  return (
    <section id="help" className="help">
      <h2>Komu pomagamy?</h2>
      <div className="help--slides active" data-id="1">
        <p>
          W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
          współpracujemy. Możesz sprawdzić czym się zajmują.
        </p>

        <ul className="help--slides-items">
          <li>
            <div className="col">
              <div className="title">Fundacja "Dbam o Zdrowie"</div>
              <div className="subtitle">
                Cel i misja: Pomoc dzieciom z ubogich rodzin.
              </div>
            </div>

            <div className="col">
              <div className="title">Fundacja "A kogo"</div>
              <div className="subtitle">
                Cel i misja: Pomoc wybudzaniu dzieci ze śpiączki.
              </div>
            </div>
          </li>

          <li>
            <div className="col">
              <div className="title">Fundacja “Dla dzieci"</div>
              <div className="subtitle">
                Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji
                życiowej.
              </div>
            </div>
            <div className="col">
              <div className="title">Fundacja “Bez domu”</div>
              <div className="subtitle">
                Cel i misja: Pomoc dla osób nie posiadających miejsca
                zamieszkania
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default FoundationSection;
