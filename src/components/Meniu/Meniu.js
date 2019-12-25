import React from "react";
import { MeniuList } from "./MeniuList/MeniuList";
import { meniuList } from "./meniuList";

export const Meniu = () => {
  return (
    <div>
      <MeniuList list={meniuList} />
    </div>
  );
};
