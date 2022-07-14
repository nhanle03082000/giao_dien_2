import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import "../components/controls/index.css";

const PolicyCard = (props) => {
  let dateOfBirth = props?.dateOfBirth;
  let dateExpiration = props?.expiration_date;
  let startdate = moment(dateOfBirth).subtract(0, "days").format("DD-MM-YYYY");
  let endDate = moment(dateExpiration).subtract(0, "days").format("DD-MM-YYYY");
  return (
    <div className="policy-card">
      {/* <div className="policy-card__icon"></div> */}
      <div className="policy-card__info">
        {/* <div className="policy-card__info__name">Kính Mời Quý Khách</div> */}
        <div className="policy-card__info__description">
          Kính Mời Quý Khách{" "}
          <span className="description-span">{props?.name}</span>, ngày sinh:
          <span className="description-span"> {startdate} </span>
          chọn các quà tặng bên dưới
        </div>
        {/* <div className="policy-card__info__description">
          Ngày sinh: {startdate}
        </div>
        <div className="policy-card__info__description">
          Ngày Hết Hạn: {endDate}
        </div> */}
      </div>
    </div>
  );
};

PolicyCard.propTypes = {
  name: PropTypes.string.isRequired,
};

export default PolicyCard;
