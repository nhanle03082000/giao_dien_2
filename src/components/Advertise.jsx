import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
const Advertise = (props) => {
  let productName = props?.product.ten_qua;
  productName = productName.substring(
    productName.search(" "),
    productName.length
  );
  // console.log("productName", productName);

  return (
    <div className="policy-card">
      <div className="policy-card__icon"></div>
      <div className="policy-card__info">
        <div className="policy-card__info__name">
          Chào Mừng Quý Khách Hàng Đến Với Hệ Thống Chọn Quà Trực Tiếp Của
          MobiFone
        </div>
        <div className="policy-card__info__description">
          Tên Quà Tặng: {productName}
        </div>
        <div className="policy-card__info__description"></div>
        <div className="policy-card__info__description"></div>
      </div>
    </div>
  );
};

// Advertise.propTypes = {
//   name: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
// };

export default Advertise;
