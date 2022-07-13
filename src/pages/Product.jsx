import CircularProgress from "@material-ui/core/CircularProgress";
import { useContext, useEffect, useState } from "react";
import Select from "react-select";
import productData from "../assets/fake-data/products";
import Advertise from "../components/Advertise";
import "../components/controls/index.css";
import Grid from "../components/Grid";
import Helmet from "../components/Helmet";
import ModalSuccessComponent from "../components/modal/ModalSuccess.component";
import PolicyCard from "../components/PolicyCard";
import ProductCard from "../components/ProductCard";
import Section, {
  SectionBody,
  SectionTitle,
  SectionTitleProduct,
} from "../components/Section";
import { LOCAL_STORAGE_TOKEN_NAME } from "../contexts/constant";
import { LocationContext } from "../contexts/LocationContext";
import { ProductContext } from "../contexts/ProductContext";
import Button from "../components/Button";

const Product = () => {
  const {
    productState: { product },
    checkInventory,
  } = useContext(ProductContext);
  console.log("product trang chính ", product);
  const {
    Location: { maTinh, maHuyen, dataShop },
    getDataLocation,
    getMaQuan,
    GetShopLocation,
  } = useContext(LocationContext);
  const [openModal, setOpenModal] = useState(false);
  let token = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TOKEN_NAME));
  let InforUser = token.pResultThueBao;
  let advertise = token.pResultQua;
  const [maSoTinh, setmaSoTinh] = useState({
    pIsPhanQuyen: 0,
  });
  const [dataHuyen, setdataHuyen] = useState({
    pMsTinh: "",
    pPhanLoai: "",
  });
  const [listShop, setListShop] = useState({
    pMaTinh: "",
    pMaHuyen: "",
    pLoai: 2,
    pIsPhanQuyen: 0,
    pShopName: "",
  });
  const [inforProduct, setInforProduct] = useState({
    pMaChiNhanh: InforUser[0].matinh,
    pMaCuaHang: "",
    pMaCT: InforUser[0].ma_ct,
    pIDThueBao: InforUser[0].id_tb,
  });
  const [loading, setLoading] = useState(true);
  const onChange = (data) => {
    if (data)
      setdataHuyen({
        pMsTinh: data.value,
        pPhanLoai: 1,
      });
    setListShop({ pMaTinh: data.name });
  };
  const onChangeDistrict = (data) => {
    setListShop({ ...listShop, pMaHuyen: data.name });
  };
  const onChangeListShop = async (data) => {
    if (data) {
      setInforProduct({ ...inforProduct, pMaCuaHang: data.shop_code });
    }
  };
  useEffect(() => {
    async function getData() {
      try {
        const newDataHuyen = await getDataLocation(maSoTinh);
        const newDataProduct = await checkInventory(inforProduct);
        console.log("newDataProduct", newDataProduct);
        if (newDataProduct) {
          setLoading(false);
        }
      } catch (error) {
        return false;
      }
      return true;
    }
    getData();
  }, [inforProduct, maSoTinh]);
  useEffect(() => {
    async function getDataHuyen() {
      try {
        const newMaHuyen = await getMaQuan(dataHuyen);
      } catch (error) {
        return false;
      }
      return true;
    }
    getDataHuyen();
  }, [dataHuyen]);
  useEffect(() => {
    async function getDataShop() {
      try {
        const newListShop = await GetShopLocation(listShop);
      } catch (error) {
        return false;
      }
      return true;
    }
    getDataShop();
  }, [maSoTinh, listShop, dataHuyen]);
  const mappOptions = maTinh.map((item, index) => ({
    value: item.mstinh,
    label: item.tentinh,
    name: item.matinh,
  }));
  const OptionHuyen = maHuyen.map((item, index) => ({
    value: item.mshuyen,
    label: item.tenhuyen,
    name: item.mahuyen,
  }));

  const OptionListShop = dataShop.map((item, index) => ({
    value: item.shop_id,
    shop_code: item.shop_code,
    label: item.shop_name.substring(0, item.shop_name.indexOf("(") - 1),
  }));
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const showListsProduct = product.map((e, index) => {
    return (
      <Grid item lg={3}>
        <ProductCard data={e} />
      </Grid>
    );
  });

  return (
    <Helmet title="nhale">
      <Section>
        <SectionTitle>Thông Tin Khách Hàng</SectionTitle>
        <Section>
          <SectionBody>
            <Grid col={2} mdCol={2} smCol={1} gap={20}>
              {InforUser.map((index, data) => (
                <PolicyCard
                  key={data}
                  name={index.hoten}
                  dateOfBirth={index.ngaysinh}
                  expiration_date={index.ngay_hethan}
                  description="chúc mừng quý khách nhiều niềm vui trong cuộc sống"
                />
              ))}
              {advertise.map((data, index) => (
                <Advertise key={index} product={data} />
              ))}
            </Grid>
          </SectionBody>
        </Section>
        <SectionBody>
          <SectionTitle>Quà Tặng</SectionTitle>
          <SectionTitleProduct>CHỌN CỬA HÀNG ĐẾN NHẬN QUÀ:</SectionTitleProduct>
          <h3 className="">
            Tên Cửa Hàng:{" "}
            {product.length === 0 ? <></> : <span>{product[0].shop_name}</span>}
          </h3>
          <Grid col={0}>
            <div className="select-main">
              <div className="select-child">
                <Select
                  className="basic-single"
                  classNamePrefix="select"
                  placeholder="Thành Phố"
                  options={mappOptions}
                  onChange={onChange}
                  name="city"
                />
              </div>
              <div className="select-child">
                <Select
                  className="basic-single"
                  classNamePrefix="select"
                  placeholder="Quận"
                  options={OptionHuyen}
                  onChange={onChangeDistrict}
                  name="district"
                />
              </div>
              <div className="select-child">
                <Select
                  className="basic-single"
                  classNamePrefix="select"
                  placeholder="Cửa Hàng"
                  options={OptionListShop}
                  name="shop"
                  onChange={onChangeListShop}
                />
              </div>
              <div className="product_btn">
                <Button size="sm">Chọn</Button>
              </div>
            </div>
          </Grid>
        </SectionBody>

        <SectionBody>
          {loading ? (
            <div className="no-product">
              <CircularProgress color="primary" />
            </div>
          ) : product.length === 0 ? (
            <div className="no-product">
              <span>Vui lòng chọn thông tin tỉnh, huyện và tên cửa hàng</span>
            </div>
          ) : (
            <Grid col={4} mdCol={2} smCol={1} gap={30}>
              {showListsProduct}
            </Grid>
          )}
        </SectionBody>
      </Section>
      <ModalSuccessComponent
        open={openModal}
        handleClose={handleCloseModal}
        title="Số điện thoại hoặc mã quà tặng không chính xác!"
        // handleClickHome={handleClickHome}
      />
      .
    </Helmet>
  );
};

export default Product;
