import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";
import Slide from "./Slide";

const Testimonials = () => {
  const slideArr = [
    {
      id: Date.now(),
      pic: user_1,
      name: `William Jackson`,
      title: `Edusity, USA`,
      para: `Choosing to pursue my degree at Edusity was one of the best decisions
          I've ever made. The supportive community, state-of-the-art facilities,
          and commitment to academic excellence have truly exceeded my
          expectations.`,
    },
    {
      id: Date.now(),
      pic: user_2,
      name: `William Jackson`,
      title: `Edusity, USA`,
      para: `Choosing to pursue my degree at Edusity was one of the best decisions
          I've ever made. The supportive community, state-of-the-art facilities,
          and commitment to academic excellence have truly exceeded my
          expectations.`,
    },
    {
      id: Date.now(),
      pic: user_3,
      name: `William Jackson`,
      title: `Edusity, USA`,
      para: `Choosing to pursue my degree at Edusity was one of the best decisions
          I've ever made. The supportive community, state-of-the-art facilities,
          and commitment to academic excellence have truly exceeded my
          expectations.`,
    },
    {
      id: Date.now(),
      pic: user_4,
      name: `William Jackson`,
      title: `Edusity, USA`,
      para: `Choosing to pursue my degree at Edusity was one of the best decisions
          I've ever made. The supportive community, state-of-the-art facilities,
          and commitment to academic excellence have truly exceeded my
          expectations.`,
    },
  ];

  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img src={back_icon} alt="" className="back-btn" onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider}>
          {slideArr.map((slide) => (
            <Slide
              key={slide.id}
              pic={slide.pic}
              name={slide.name}
              title={slide.title}
              para={slide.para}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
