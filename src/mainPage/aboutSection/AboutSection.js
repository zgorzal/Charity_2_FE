import React from "react";
import signature from "../../images/signature.svg";
import aboutUs from "../../images/about-us.jpg";

const AboutSection = (props) => {
  return (
    <section id="about-us" className="about-us">
      <div className="about-us--text">
        <h2>O nas</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
          vitae animi rem pariatur incidunt libero optio esse quisquam illo
          omnis.
        </p>
        <img
          src={signature}
          className="about-us--text-signature"
          alt="Signature"
        />
      </div>
      <div className="about-us--image">
        <img src={aboutUs} alt="People in circle" />
      </div>
    </section>
  );
};

export default AboutSection;
