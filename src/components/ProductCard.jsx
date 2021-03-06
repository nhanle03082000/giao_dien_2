/* eslint-disable jsx-a11y/img-redundant-alt */
import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { LOCAL_STORAGE_TOKEN_NAME } from "../contexts/constant";
import { ProductContext } from "../contexts/ProductContext";
import Button from "./Button";
import image_error from "../assets/images/image_error.png";
import ModalSuccessComponent from "./modal/ModalSuccess.component";
import ModalErrorComponent from "./modal/ModalError.component";
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
  const [openModal, setOpenModal] = useState(false);
  const [openModalError, setOpenModalError] = useState(false);
  const [InforGigt, setInforGigt] = useState({
    pIDThueBao: InforUser[0].id_tb,
    pMaKhoTong: product[0].ma_kho_tong,
    pMaCT: InforUser[0].ma_ct,
    pMaKhoCN: product[0].district_code,
    pMaKhoCH: product[0].ma_kho_ch,
    pMaQua: "",
    pSoLuong: 1,
  });

  const handleError = (e) => {
    setImgSrc(image_error);
  };
  const submitProducdt = async (e) => {
    if (e) {
      let newObject = { ...InforGigt };
      newObject["pMaQua"] = e;

      const newDataGift = await receivingGift(newObject);
      console.log("newDataGift", newDataGift);
      if (newDataGift.status === 1) {
        setOpenModal(true);
      } else {
        setOpenModalError(true);
      }
    }
  };
  const handleCloseModal = () => {
    setOpenModalError(false);
    setOpenModal(false);
  };
  return (
    <div className="product-card">
      <div>
        <div className="product-card__image">
          {/* {/* <img src={props.img01} alt="" /> */}
          <img src={imgSrc} alt="Image Note Found" onError={handleError} />
        </div>
      </div>
      {/* <h3 className="product-card__name">{props?.data.ten_qua}</h3> */}
      <h3 className="product-card__price">Tên quà: {props?.data.ten_qua}</h3>
      <div className="product-card__price">
        <span>Số Lượng: </span>
        {props?.data.tonkho}
      </div>
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
      <ModalSuccessComponent
        open={openModal}
        handleClose={handleCloseModal}
        title="Quý khách đã đăng ký giữ quà thành công."
        titleDesc=" Quý khách vui lòng mang theo CCCD/CMND đến cửa hàng
         để nhận quà trong vòng 48h!"
        titleError="Nếu thông tin Số thuê bao của  Quý khách chưa chính xác, vui lòng đăng ký lại thông tin tại cửa hàng MobiFone. "
        titleErrorDes="Trân trọng cảm ơn quý khách đã sử dụng dịch vụ MobiFone"
      />
      <ModalErrorComponent
        open={openModalError}
        handleClose={handleCloseModal}
        title="Quà tặng đã hết quý khách vui lòng chọn quà tặng khác hoặc cửa hàng khác. Cảm ơn quý khách! "
      ></ModalErrorComponent>
    </div>
  );
};

// ProductCard.propTypes = {
// img01: PropTypes.string.isRequired,
// img02: PropTypes.string.isRequired,
// name: PropTypes.string.isRequired,
// slug: PropTypes.string.isRequired,
// };

export default ProductCard;
