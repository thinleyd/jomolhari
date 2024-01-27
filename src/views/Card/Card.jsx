import React from "react";
import "./Card.css";

const Card = ({ imageSrc, heading, detail, color }) => {
  return (
    <div className="card" style={{ borderColor: color, backgroundImage: `url(${imageSrc})`  }}>
      {/* <img src={require("assets/img/daniel-olahh.jpg")} alt="" /> */}
      {/* <span>{heading}</span>
      <span>{detail}</span> */}
      {/* <button className="c-button">LEARN MORE</button> */}
    </div>
  );
};

export default Card;
