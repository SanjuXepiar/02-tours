import React from "react";

export const Tour = ({ tour, removeTour }) => {
  const { image, info, name, price, id } = tour;
  return (
    <div className="tourContainer">
      <div className="imageContainer">
        <img src={image} alt={name} />
        <span>$ {price} </span>
      </div>

      <div className="description">
        <h2>{name} </h2>
        <p> {info}</p>
      </div>
      <button onClick={() => removeTour(id)}>not interested</button>
    </div>
  );
};
