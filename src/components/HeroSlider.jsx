import React from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import "./controls/index.css";
import slider1 from "../assets/images/slider/Banner1.png";
import slider2 from "../assets/images/slider/Banner2.png";
import slider3 from "../assets/images/slider/Banner3.png";
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
          <img className="img-style" src={slider1} alt="" />
        </div>
        <div className="img-cc">
          <img className="img-style" src={slider2} alt="" />
        </div>
        <div className="img-cc">
          <img className="img-style" src={slider3} alt="" />
        </div>
      </Slider>
    </div>
  );
};

HeroSlider.propTypes = {
  control: PropTypes.bool,
  auto: PropTypes.bool,
  timeOut: PropTypes.number,
};

export default HeroSlider;
