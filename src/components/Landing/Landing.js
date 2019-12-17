import React from "react";
import { LandingMeniu } from "./LandingMeniu/LandingMeniu";

import "./landing.styles.css";

export const Landing = () => {
  return (
    <div className="landing">
      <div className="landing__banner">
        <div className="landing__title">
          <h3 className="landing__title--type">Restaurant</h3>
          <h2 className="landing__title--name">PapaBun</h2>
        </div>
      </div>
      <LandingMeniu title="DINNER" timeStart="16:30" timeEnd="22:00" />
    </div>
  );
};
