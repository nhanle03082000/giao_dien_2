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
      <h3 className="product-card__price">T??n qu??: {props?.data.ten_qua}</h3>
      <div className="product-card__price">
        <span>S??? L?????ng: </span>
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
          Gi??? Qu??
        </Button>
      </div>
      <ModalSuccessComponent
        open={openModal}
        handleClose={handleCloseModal}
        title="Qu?? kh??ch ???? ????ng k?? gi??? qu?? th??nh c??ng."
        titleDesc=" Qu?? kh??ch vui l??ng mang theo CCCD/CMND ?????n c???a h??ng
         ????? nh???n qu?? trong v??ng 48h!"
        titleError="N???u th??ng tin S??? thu?? bao c???a  Qu?? kh??ch ch??a ch??nh x??c, vui l??ng ????ng k?? l???i th??ng tin t???i c???a h??ng MobiFone. "
        titleErrorDes="Tr??n tr???ng c???m ??n qu?? kh??ch ???? s??? d???ng d???ch v??? MobiFone"
      />
      <ModalErrorComponent
        open={openModalError}
        handleClose={handleCloseModal}
        title="Qu?? t???ng ???? h???t qu?? kh??ch vui l??ng ch???n qu?? t???ng kh??c ho???c c???a h??ng kh??c. C???m ??n qu?? kh??ch! "
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
