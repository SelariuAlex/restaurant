import React from "react";
import "./landingMeniu.styles.css";

export const LandingMeniu = ({
  title,
  timeStart,
  timeEnd,
  description,
  meniu,
  right
}) => {
  return (
    <div className={`landingMeniu ${meniu}`}>
      <section className={`landingMeniu__card ${right}`}>
        <h3>MENIU</h3>
        <h2>{title}</h2>
        <h4>
          {timeStart} - {timeEnd}
        </h4>
        <p className="landingMeniu__card--description">{description}</p>
      </section>
    </div>
  );
};
