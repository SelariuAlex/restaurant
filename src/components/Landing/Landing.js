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
      <div className="landing__separator">
        <h2>Special Offers</h2>
        <div className="underline"></div>
      </div>
      <LandingMeniu
        title="LUNCH"
        timeStart="11:00"
        timeEnd="14:00"
        description="Lunch course is popular with Bagna Cauda, ​​where you can get plenty of fresh vegetables. Panini lunch, pasta lunch and meat lunch can be enjoyed according to the season. From the appetizer Bagna Cauda to the main and dessert, forget the hustle and bustle of the day and spend a relaxing time with your close friends."
        right="landingMeniu__card--left"
        meniu="landingMeniu--lunch"
      />
      <LandingMeniu
        title="DINNER"
        timeStart="16:30"
        timeEnd="22:00"
        description="You can enjoy an Italian-based dinner course in a calm and warm atmosphere. We offer 5-7 types of courses at reasonable prices for each season.
        Wines selected mainly from Italy are also available at all times, so you can relax and enjoy your meal."
        right="landingMeniu__card--right"
        meniu="landingMeniu--dinner"
      />
      <LandingMeniu
        title="ALL"
        timeStart="11:00"
        timeEnd="22:00"
        description="From the set menu to the a la carte menus, such as fish plate with a long-run popular menu on one plate and panini plate with a wide variety of panini as its main menu, we have prepared original menus that can only be tasted beautifully."
        right="landingMeniu__card--left"
        meniu="landingMeniu--all"
      />
    </div>
  );
};
