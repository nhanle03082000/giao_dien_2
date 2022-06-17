// import React, { useEffect, useState, useCallback } from "react";
// import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

// import Button from "./Button";

// const HeroSlider = (props) => {
//   const data = props.data;

//   const timeOut = props.timeOut ? props.timeOut : 3000;

//   const [activeSlide, setActiveSlide] = useState(0);

//   const nextSlide = useCallback(() => {
//     const index = activeSlide + 1 === data.length ? 0 : activeSlide + 1;
//     setActiveSlide(index);
//   }, [activeSlide, data]);

//   const prevSlide = () => {
//     const index = activeSlide - 1 < 0 ? data.length - 1 : activeSlide - 1;
//     setActiveSlide(index);
//   };

//   useEffect(() => {
//     if (props.auto) {
//       const slideAuto = setInterval(() => {
//         nextSlide();
//       }, timeOut);
//       return () => {
//         clearInterval(slideAuto);
//       };
//     }
//   }, [nextSlide, timeOut, props]);

//   return (
//     <div className="hero-slider">
//       {data.map((item, index) => (
//         <HeroSliderItem
//           key={index}
//           item={item}
//           active={index === activeSlide}
//         />
//       ))}
//       {props.control ? (
//         <div className="hero-slider__control">
//           <div className="hero-slider__control__item" onClick={prevSlide}>
//             <i className="bx bx-chevron-left"></i>
//           </div>
//           <div className="hero-slider__control__item">
//             <div className="index">
//               {activeSlide + 1}/{data.length}
//             </div>
//           </div>
//           <div className="hero-slider__control__item" onClick={nextSlide}>
//             <i className="bx bx-chevron-right"></i>
//           </div>
//         </div>
//       ) : null}
//     </div>
//   );
// };

// HeroSlider.propTypes = {
//   data: PropTypes.array.isRequired,
//   control: PropTypes.bool,
//   auto: PropTypes.bool,
//   timeOut: PropTypes.number,
// };

// const HeroSliderItem = (props) => (
//   <div className={`hero-slider__item ${props.active ? "active" : ""}`}>
//     <div className="hero-slider__item__image">
//       <img src={props.item.img} alt="" />
//     </div>
//   </div>
// );

// export default HeroSlider;

import React, { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "./index.css";
import Button from "./Button";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#c7d2d6" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#c7d2d6" }}
      onClick={onClick}
    />
  );
}

const HeroSlider = (props) => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SamplePrevArrow />,
    prevArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="container">
      <Slider {...settings}>
        <div className="img-cc">
          <img
            className="img-style"
            src="https://cskh.mobifone.vn/quatang/images/BannerKimCuong.jpg"
          />
        </div>
        <div className="img-cc">
          <img
            className="img-style"
            src="https://cskh.mobifone.vn/quatang/images/BannerKimCuong.jpg"
          />
        </div>
        {/* <div>
            <img src="http://placekitten.com/g/400/200" />
          </div>
          <div>
            <img src="http://placekitten.com/g/400/200" />
          </div> */}
      </Slider>
    </div>
  );
};

HeroSlider.propTypes = {
  data: PropTypes.array.isRequired,
  control: PropTypes.bool,
  auto: PropTypes.bool,
  timeOut: PropTypes.number,
};

// const HeroSliderItem = (props) => (
//   <div className={`hero-slider__item ${props.active ? "active" : ""}`}>
//     <div className="hero-slider__item__image">
//       <img src={props.item.img} alt="" />
//     </div>
//   </div>
// );

export default HeroSlider;
