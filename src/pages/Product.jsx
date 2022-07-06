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
const Product = () => {
  const productList = productData.getAllProducts();
  const {
    Location: { maTinh, maHuyen, dataShop },
    getDataLocation,
    getMaQuan,
    GetShopLocation,
  } = useContext(LocationContext);
  const token = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TOKEN_NAME));

  const userName = token.pResultThueBao;
  console.log(userName);
  const [maSoTinh, setmaSoTinh] = useState({
    pIsPhanQuyen: 0,
  });
  const { pIsPhanQuyen } = maSoTinh;
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
  useEffect(() => {
    async function getData() {
      // console.log("location", location.state.detail);
      try {
        const newDataHuyen = await getDataLocation(maSoTinh);
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
    label: item.shop_name,
  }));

  return (
    <Helmet title="nhale">
      <Section>
        <SectionTitle>Thông Tin Khách Hàng</SectionTitle>
        <Section>
          <SectionBody>
            <Grid col={2} mdCol={2} smCol={1} gap={20}>
              {userName.map((index, data) => (
                <PolicyCard
                  key={data}
                  name={index.hoten}
                  dateOfBirth={index.ngaysinh}
                  description="chúc mừng quý khách nhiều niềm vui trong cuộc sống"
                />
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
