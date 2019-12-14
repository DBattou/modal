import React from "react";
import "./Card.css";

const Card = ({ selectFormat, title, format }) => {
  return (
    <div className="Card">
      <h1>{title}</h1>
      <button className="ModalButton" onClick={selectFormat}>
        SELECT FORMAT
      </button>
      <h2>Format : {format ? format : ""}</h2>
    </div>
  );
};

export default Card;
