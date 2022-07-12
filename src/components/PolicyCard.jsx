import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
const PolicyCard = (props) => {
  let dateOfBirth = props?.dateOfBirth;
  let dateExpiration = props?.expiration_date;
  let startdate = moment(dateOfBirth).subtract(0, "days").format("DD-MM-YYYY");
  let endDate = moment(dateExpiration).subtract(0, "days").format("DD-MM-YYYY");

  return (
    <div className="policy-card">
      <div className="policy-card__icon"></div>
      <div className="policy-card__info">
        <div className="policy-card__info__name">Kính Mời Quý Khách</div>
        <div className="policy-card__info__description">
          Tên Khách Hàng: {props?.name}
        </div>
        <div className="policy-card__info__description">
          Ngày sinh: {startdate}
        </div>
        <div className="policy-card__info__description">
          Ngày Hết Hạn: {endDate}
        </div>
      </div>
    </div>
  );
};

PolicyCard.propTypes = {
  name: PropTypes.string.isRequired,
};

export default PolicyCard;
