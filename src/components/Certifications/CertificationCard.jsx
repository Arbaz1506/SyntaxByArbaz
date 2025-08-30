import React from "react";
import dsa from "../../assets/dsa.jpg";
import ibm from "../../assets/ibm.jpg";
import workshop from "../../assets/workshop.jpg";
import python from "../../assets/python.jpg";
import "./CertificationCard.css";

const imageMap = {
  dsa,
  workshop,
  python, 
  ibm,
};

const CertificationCard = ({ title, issuer, date, link, logo }) => {
  const imageSrc = imageMap[logo]; // Match logo string with imageMap

  return (
    <div className="certification-card">
      <img src={imageSrc} alt={title} className="certification-logo" />
      <div className="certification-content">
        <h3>{title}</h3>
        <p>{issuer}</p>
        <p>{date}</p>
        <a href={link} target="_blank" rel="noreferrer">
          View Certificate
        </a>
      </div>
    </div>
  );
};

export default CertificationCard;
