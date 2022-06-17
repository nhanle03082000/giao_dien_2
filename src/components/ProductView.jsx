import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/shopping-cart/cartItemsSlide";
import { remove } from "../redux/product-modal/productModalSlice";
import Button from "./Button";
import numberWithCommas from "../utils/numberWithCommas";
import useTable from "./controls/useTable";
import * as Service from "../services/Service";
import FormInfor from "../components/FormInfor";
import PopupForm from "../components/PopupForm";
const headCells = [
  { id: "fullName", label: "Employee Name" },
  { id: "email", label: "Email Address (Personal)" },
  { id: "mobile", label: "Mobile Number" },
  { id: "department", label: "Department" },
  { id: "actions", label: "Actions", disableSorting: true },
];
const ProductView = (props) => {
  const dispatch = useDispatch();

  let product = props.product;

  if (product === undefined)
    product = {
      title: "",
      image01: null,
      image02: null,
      categorySlug: "",
      slug: "",
      description: "",
    };

  const [previewImg, setPreviewImg] = useState(product.image01);

  const [descriptionExpand, setDescriptionExpand] = useState(false);

  const [color, setColor] = useState(undefined);

  const [size, setSize] = useState(undefined);

  const [quantity, setQuantity] = useState(1);

  const [recordForEdit, setRecordForEdit] = useState(null);
  const [records, setRecords] = useState(Service.getAllEmployees());
  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });
  const [openPopup, setOpenPopup] = useState(false);
  const addOrEdit = (employee, resetForm) => {
    if (employee.id == 0) Service.insertEmployee(employee);
    else Service.updateEmployee(employee);
    resetForm();
    setRecordForEdit(null);
    setOpenPopup(false);
    setRecords(Service.getAllEmployees());
  };

  const { TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting } =
    useTable(records, headCells, filterFn);
  useEffect(() => {
    setPreviewImg(product.image01);
    setQuantity(1);
    setColor(undefined);
    setSize(undefined);
  }, [product]);

  const goToCart = () => {
    setOpenPopup(true);
    setRecordForEdit(null);
  };

  return (
    <div className="product">
      <div className="product__images">
        <div className="product__images__list">
          <div
            className="product__images__list__item"
            onClick={() => setPreviewImg(product.image01)}
          >
            <img src={product.image01} alt="" />
          </div>
          <div
            className="product__images__list__item"
            onClick={() => setPreviewImg(product.image02)}
          >
            <img src={product.image02} alt="" />
          </div>
        </div>
        <div className="product__images__main">
          <img src={previewImg} alt="" />
        </div>
        <div
          className={`product-description ${descriptionExpand ? "expand" : ""}`}
        >
          <div className="product-description__title">Chi tiết sản phẩm 1</div>
          <div
            className="product-description__content"
            dangerouslySetInnerHTML={{ __html: product.description }}
          ></div>
          <div className="product-description__toggle">
            <Button
              size="sm"
              onClick={() => setDescriptionExpand(!descriptionExpand)}
            >
              {descriptionExpand ? "Thu gọn" : "Xem thêm"}
            </Button>
          </div>
        </div>
      </div>
      {/* nnhanle */}
      <div className="product__info">
        <h1 className="product__info__title">{product.title}</h1>

        <div className="product__info__item">
          <Button
            size="sm"
            icon="bx bx-add-to-queue"
            animate={true}
            onClick={() => goToCart()}
          >
            Chọn quà
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
      <div
        className={`product-description mobile ${
          descriptionExpand ? "expand" : ""
        }`}
      >
        <div className="product-description__title">Chi tifffffết sản phẩm</div>
        <div
          className="product-description__content"
          dangerouslySetInnerHTML={{ __html: product.description }}
        ></div>
        <div className="product-description__toggle">
          <Button
            size="sm"
            onClick={() => setDescriptionExpand(!descriptionExpand)}
          >
            {descriptionExpand ? "Thu gọn" : "Xem thêm"}
          </Button>
        </div>
      </div>
    </div>
  );
};

ProductView.propTypes = {
  product: PropTypes.object,
};

export default withRouter(ProductView);
