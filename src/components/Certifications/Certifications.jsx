import React from "react";
import certificationData from "./CertificationsData.json";
import CertificationCard from "./CertificationCard";
import "./Certifications.css";

const Certifications = () => {
  return (
    <section className="certifications-section" id="certifications">
      <h2>Certifications & Achievement</h2>
      <div className="certifications-grid">
        {certificationData.map((cert) => (
          <CertificationCard
            key={cert.id}
            title={cert.title}
            issuer={cert.issuer}
            date={cert.date}
            link={cert.link}
            logo={cert.logo}
          />
        ))}
      </div>
    </section>
  );
};

export default Certifications;
