import React from "react";

export default function Banner(props) {
  return (
    <>
      <div className="banner">
        <div className="banner__info__image-banner">
          <img src={props.img} alt="" />
        </div>
      </div>
    </>
  );
}
