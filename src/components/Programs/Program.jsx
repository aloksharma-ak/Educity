import React from "react";

const Program = ({ pic, icon }) => {
  return (
    <div className="program">
      <img src={pic} alt="Program" />
      <div className="caption">
        {icon.map((e, index) => (
          <div className="caption-content" key={index}>
            <img src={e.icon} alt={e.text} />
            <p>{e.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Program;
