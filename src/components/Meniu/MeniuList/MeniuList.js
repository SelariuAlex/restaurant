import React from "react";
import "./meniuList.css";

export const MeniuList = ({ list }) => {
  console.log(list);

  return (
    <section className="meniu__list">
      {list.map(e => {
        return (
          <div className="meniu__list--item" key={e.id}>
            <p className="meniu__list--cost">
              <span>{e.item}</span> <span>{e.cost}</span>
            </p>
            <p>{e.description}</p>
          </div>
        );
      })}
    </section>
  );
};
