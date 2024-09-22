import React from "react";

const Slide = ({ pic, name, title, para }) => {
  return (
    <li>
      <div className="slide">
        <div className="user-info">
          <img src={pic} alt="" />
          <div>
            <h3>{name}</h3>
            <span>{title}</span>
          </div>
        </div>
        <p>{para}</p>
      </div>
    </li>
  );
};

export default Slide;
