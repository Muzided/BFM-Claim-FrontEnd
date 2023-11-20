import "./SmoothSlider.css"

import Data from "../assets/data/smoothSliderData";

const SmoothSlider = () => {
  return (
    <div className="SmoothSliderWrapper">
      <div className="smooth-slider-container">
        {Data?.map((item, i) => (
          <div key={i} className="slider-item">
            <img src={item.icon} alt="slider-img" />
            <h1>{item.text}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmoothSlider;
