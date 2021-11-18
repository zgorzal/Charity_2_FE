import React from "react";
import facebook from "../../images/icon-facebook.svg";
import instagram from "../../images/icon-instagram.svg";

const Footer = (props) => {
  return (
    <footer>
      <div id="contact" className="contact">
        <h2>Skontaktuj się z nami</h2>
        <h3>Formularz kontaktowy</h3>
        <form className="form--contact">
          <div className="form-group form-group--50">
            <input type="text" name="name" placeholder="Imię" />
          </div>
          <div className="form-group form-group--50">
            <input type="text" name="surname" placeholder="Nazwisko" />
          </div>

          <div className="form-group">
            <textarea
              name="message"
              placeholder="Wiadomość"
              rows="1"
            ></textarea>
          </div>

          <button className="btn" type="submit">
            Wyślij
          </button>
        </form>
      </div>
      <div className="bottom-line">
        <span className="bottom-line--copy">Copyright &copy; 2018</span>
        <div className="bottom-line--icons">
          <a href="https://www.facebook.com/" className="btn btn--small">
            <img src={facebook} alt="facebook" />
          </a>
          <a href="https://www.instagram.com/" className="btn btn--small">
            <img src={instagram} alt="instagram" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
