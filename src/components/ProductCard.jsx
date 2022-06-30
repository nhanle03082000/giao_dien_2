import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "./Button";

import { Link } from "react-router-dom";
import FormInfor from "./FormInfor";
import PopupForm from "./PopupForm";

const ProductCard = (props) => {
  const [descriptionExpand, setDescriptionExpand] = useState(false);

  const [recordForEdit, setRecordForEdit] = useState(null);

  const [openPopup, setOpenPopup] = useState(false);
  const addOrEdit = (employee, resetForm) => {
    // if (employee.id === 0) Service.insertEmployee(employee);
    // else Service.updateEmployee(employee);
    resetForm();
    setRecordForEdit(null);
    setOpenPopup(false);
  };

  const goToCart = () => {
    setOpenPopup(true);
    setRecordForEdit(null);
  };

  return (
    <div className="product-card">
      <div onClick={() => setOpenPopup(true)}>
        <div className="product-card__image">
          <img src={props.img01} alt="" />
          <img src={props.img02} alt="" />
        </div>
      </div>

      <h3 className="product-card__name">{props.name}</h3>
      <span>{props.quantity}</span>
      <div className="product-card__btn">
        <Button
          size="sm"
          icon="bx bx-add-to-queue"
          animate={true}
          onClick={() => setOpenPopup(true)}
        >
          Giữ Quà
        </Button>
      </div>
      <FormInfor
        title="Xác Nhận Thông Tin"
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <PopupForm recordForEdit={recordForEdit} addOrEdit={addOrEdit} />
      </FormInfor>
    </div>
  );
};

ProductCard.propTypes = {
  img01: PropTypes.string.isRequired,
  img02: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default ProductCard;
