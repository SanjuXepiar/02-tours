import React from "react";

export const Tour = ({ tours }) => {
  return (
    <div className="tourContainer">
      {tours.map((tour) => {
        const { image, info, name, price } = tour;
        return (
          <>
            <div className="imageContainer">
              <img src={image} alt={name} />
            </div>
            <div className="description">
              <h2>{name} </h2>
              <p> {info}</p>
              <span>$ {price} </span>
            </div>
          </>
        );
      })}
    </div>
  );
};
