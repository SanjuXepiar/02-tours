import React from "react";

export const Tour = ({ image, info, name, price, id, removeTour }) => {
  return (
    <div className="tourContainer">
      <div className="imageContainer">
        <img src={image} alt={name} />
      </div>
      <div className="description">
        <h2>{name} </h2>
        <p> {info}</p>
        <span>$ {price} </span>
      </div>
      <button onClick={() => removeTour(id)}>not interested</button>
    </div>
  );
};
