/* eslint-disable jsx-a11y/img-redundant-alt */
import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { LOCAL_STORAGE_TOKEN_NAME } from "../contexts/constant";
import { ProductContext } from "../contexts/ProductContext";
import Button from "./Button";
import image_error from "../assets/images/image_error.png";
const ProductCard = (props) => {
  let token = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TOKEN_NAME));
  let InforUser = token.pResultThueBao;
  let advertise = token.pResultQua;
  const {
    productState: { checkProduct, product },
    receivingGift,
  } = useContext(ProductContext);
  const [imgSrc, setImgSrc] = useState(
    `https://imghstq.mobifone9.vn/quatang/${props?.data.linkanh}`
  );
  const [idProduct, setIdProduct] = useState("");
  const [InforGigt, setInforGigt] = useState({
    pIDThueBao: InforUser[0].id_tb,
    pMaKhoTong: product[0].ma_kho_tong,
    pMaCT: InforUser[0].ma_ct,
    pMaKhoCN: product[0].district_code,
    pMaKhoCH: product[0].ma_kho_ch,
    pMaQua: "",
    pSoLuong: 1,
  });
  console.log("image", props?.data.linkanh);

  const handleError = (e) => {
    console.log("error", e);
    setImgSrc(image_error);
  };
  const submitProducdt = async (e) => {
    if (e) {
      let newObject = { ...InforGigt };
      newObject["pMaQua"] = e;
      console.log("newObject", newObject);

      const newDataGift = await receivingGift(newObject);
      console.log("newDataGift", newDataGift);
    }
  };
  return (
    <div className="product-card">
      <div>
        <div className="product-card__image">
          {/* {/* <img src={props.img01} alt="" /> */}
          <img src={imgSrc} alt="Image Note Found" onError={handleError} />
        </div>
      </div>

      <h3 className="product-card__name">{props?.data.ten_qua}</h3>
      <span>{props?.data.tonkho}</span>
      <span>{props.ma_qua}</span>
      <div className="product-card__btn">
        <Button
          size="sm"
          icon="bx bx-add-to-queue"
          animate={true}
          onClick={() => {
            submitProducdt(props?.data.ma_qua);
          }}
        >
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
