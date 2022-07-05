import React, { useContext, useState, useEffect } from "react";

import PolicyCard from "../components/PolicyCard";
import productData from "../assets/fake-data/products";
import ProductCard from "../components/ProductCard";
import { useLocation } from "react-router-dom";
import Helmet from "../components/Helmet";
import Section, { SectionTitle, SectionBody } from "../components/Section";
import Grid from "../components/Grid";
import Select from "react-select";
import { LocationContext } from "../contexts/LocationContext";
import "../components/controls/index.css";
const Product = () => {
  const location = useLocation();
  const productList = productData.getAllProducts();
  const {
    Location: { maTinh, maHuyen, dataShop },
    getDataLocation,
    getMaQuan,
    GetShopLocation,
  } = useContext(LocationContext);
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

  const [data, setData] = useState({
    city: "",
    district: "",
    shop: "",
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
      console.log("location", location.state.detail);
      try {
        const newDataHuyen = await getDataLocation(maSoTinh);
      } catch (error) {
        return false;
      }
      return true;
    }
    getData();
  }, [location]);
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
              <PolicyCard name="jjj" description="{item.description}" />
              <PolicyCard
                name="Chào mừng quý khách đến với hệ thống quà tặng của mobifon"
                description="chúc mừng quý khách nhiều niềm vui trong cuộc sống"
              />
            </Grid>
          </SectionBody>
        </Section>
        <SectionBody>
          <SectionTitle>Quà Tặng</SectionTitle>
          <Grid col={0}>
            <div className="select-main">
              <div className="select-child">
                <Select
                  // value={pMaChiNhanh}
                  className="basic-single"
                  classNamePrefix="select"
                  placeholder="Thành Phố"
                  options={mappOptions}
                  // onChange={(value, action) => {
                  //   hanldeChange(value, action);
                  // }}
                  onChange={onChange}
                  // value={mappOptions}
                  name="city"
                />
              </div>
              <div className="select-child">
                <Select
                  // value={pMaChiNhanh}
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
                  // value={pMaChiNhanh}
                  className="basic-single"
                  classNamePrefix="select"
                  placeholder="Cửa Hàng"
                  options={OptionListShop}
                  // onChange={onChange}
                  // isClearable={isClearable}
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
