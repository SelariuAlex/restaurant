import React from "react";
import "./landingMeniu.styles.css";

export const LandingMeniu = ({ title, timeStart, timeEnd }) => {
  return (
    <div className="landingMeniu">
      <section className="landingMeniu__card landingMeniu__card--right">
        <h3>MENIU</h3>
        <h2>{title}</h2>
        <h4>
          {timeStart} - {timeEnd}
        </h4>
      </section>
    </div>
  );
};
