import React from "react";
import PropTypes from "prop-types";
const PolicyCard = (props) => {
  const dateOfBirth = props.dateOfBirth;
  console.log("props dateOfBirth", dateOfBirth);

  console.log("dateOfBirth", dateOfBirth.format("dd/mm/yyyy"));

  return (
    <div className="policy-card">
      <div className="policy-card__icon"></div>
      <div className="policy-card__info">
        <div className="policy-card__info__name">Kính Mời Quý Khách</div>
        <div className="policy-card__info__description">
          Tên Khách Hàng: {props.name}
        </div>
        <div className="policy-card__info__description">
          Ngày sinh: {props.dateOfBirth}
        </div>
        <div className="policy-card__info__description">
          Ngày Hết Hạn: {props.name}
        </div>
      </div>
    </div>
  );
};

PolicyCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default PolicyCard;
