import React from "react";
import "./Programs.css";
import Program from "./Program";
import program_1 from "../../assets/program-1.png";
import program_2 from "../../assets/program-2.png";
import program_3 from "../../assets/program-3.png";
import program_icon_1 from "../../assets/program-icon-1.png";
import program_icon_2 from "../../assets/program-icon-2.png";
import program_icon_3 from "../../assets/program-icon-3.png";

const Programs = () => {
  const programs = [
    { pic: program_1, icon: { icon: program_icon_1, text: 'Graduation Degree' } },
    { pic: program_2, icon: { icon: program_icon_2, text: 'Masters Degree' } },
    { pic: program_3, icon: { icon: program_icon_3, text: 'Post Graduation' } },
  ];

  return (
    <div className="programs">
      {programs.map((program, index) => (
        <Program key={index} pic={program.pic} icon={[program.icon]} />
      ))}
    </div>
  );
};

export default Programs;
