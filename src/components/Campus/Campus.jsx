import React from "react";
import "./Campus.css";
import Image from "./Image";
import gallery_1 from "../../assets/gallery-1.png";
import gallery_2 from "../../assets/gallery-2.png";
import gallery_3 from "../../assets/gallery-3.png";
import gallery_4 from "../../assets/gallery-4.png";
import white_arrow from "../../assets/white-arrow.png";

const Campus = () => {
  const galleryArr = [gallery_1, gallery_2, gallery_3, gallery_4];

  return (
    <div className="campus">
      <div className="gallery">
        {galleryArr.map((pic, index) => (
          <Image key={index} img={pic} />
        ))}
      </div>
      <button className="btn dark-btn">See more here <img src={white_arrow} alt="" /></button>
    </div>
  );
};

export default Campus;
