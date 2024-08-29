import React from "react";
import { Tour } from "./Tour";
export const Tours = ({ tours }) => {
  return (
    <div key={tours.id}>
      <Tour tours={tours} />
    </div>
  );
};
