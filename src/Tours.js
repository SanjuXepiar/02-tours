import React from "react";
import { Tour } from "./Tour";
export const Tours = ({ tours, removeTour }) => {
  return tours.map((tour) => (
    <div>
      <Tour key={tour.id} tour={tour} removeTour={removeTour} />
    </div>
  ));
};
