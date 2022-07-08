import { useContext, useEffect, useState } from "react";
import Select from "react-select";
import productData from "../assets/fake-data/products";
import Grid from "../components/Grid";
import Helmet from "../components/Helmet";
import PolicyCard from "../components/PolicyCard";
import ProductCard from "../components/ProductCard";
import Section, { SectionBody, SectionTitle } from "../components/Section";
import { LOCAL_STORAGE_TOKEN_NAME } from "../contexts/constant";
import { LocationContext } from "../contexts/LocationContext";
import "../components/controls/index.css";
import Advertise from "../components/Advertise";
import { ProductContext } from "../contexts/ProductContext";
const Product = () => {
  const productList = productData.getAllProducts();
  const {
    productState: { product },
    checkInventory,
    receivingGift,
  } = useContext(ProductContext);
  console.log("product payload", product);
  const {
    Location: { maTinh, maHuyen, dataShop },
    getDataLocation,
    getMaQuan,
    GetShopLocation,
  } = useContext(LocationContext);
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
    pMaCuaHang: "4VLO00082",
    pMaCT: InforUser[0].ma_ct,
    pIDThueBao: InforUser[0].id_tb,
  });
  const [InforGigt, setInforGigt] = useState({
    pIDThueBao: 11142358,
    pMaKhoTong: "22_KHODVKT",
    pMaCT: "22_DVKT_TEST01",
    pMaKhoCN: "VLO",
    pMaKhoCH: "4VLO00082",
    pMaQua: "KB24TKT92298",
    pSoLuong: 1,
  });
  const onChange = (data) => {
    if (data)
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
    const newDataProduct = await checkInventory(inforProduct);
    console.log("newdataproduct", newDataProduct);
  };
  useEffect(() => {
    async function getData() {
      try {
        const newDataHuyen = await getDataLocation(maSoTinh);
        const newDataGift = await receivingGift(InforGigt);
      } catch (error) {
        return false;
      }
      return true;
    }
    getData();
  }, []);
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
            </div>
          </Grid>
        </SectionBody>

        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={30}>
            {productList.map((item, index) => (
              <ProductCard
                key={index}
                img01={item.image01}
                img02={item.image02}
                name={item.title}
                slug={item.slug}
              />
            ))}
          </Grid>
        </SectionBody>
      </Section>
    </Helmet>
  );
};

export default Product;
