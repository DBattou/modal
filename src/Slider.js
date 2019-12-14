import React, { useState } from "react";

import "./Slider.css";
import Card from "./Card";

const Slider = ({ selectFormat, items }) => {
  return (
    <div className={"Slider"}>
      <h1 className="SliderText">SLIDER</h1>
      {items.map(item => (
        <Card
          selectFormat={() => selectFormat(item.id)}
          key={`${item.id}__${item.title}`}
          title={item.title}
          format={item.format}
        ></Card>
      ))}
    </div>
  );
};

export default Slider;
