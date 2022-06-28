import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "./Button";

import { Link } from "react-router-dom";

// trang này là tragn sản phảm chính khi người dùng nhần vào sản phảm cho người dùng có thể
const ProductCard = (props) => {
  return (
    <div className="product-card">
      <Link to={`/product/${props.slug}`}>
        <div className="product-card__image">
          <img src={props.img01} alt="" />
          <img src={props.img02} alt="" />
        </div>
        <h3 className="product-card__name">{props.name}</h3>
        <span>{props.quantity}</span>
      </Link>
      <div className="product-card__btn">
        <Button size="sm" icon="bx bx-add-to-queue" animate={true}>
          Giữ Quà
        </Button>
      </div>
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
