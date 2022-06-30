import React, { useContext, useState, useEffect } from "react";

import PolicyCard from "../components/PolicyCard";
import productData from "../assets/fake-data/products";
import ProductCard from "../components/ProductCard";

import Helmet from "../components/Helmet";
import ProductView from "../components/ProductView";
import Section, { SectionTitle, SectionBody } from "../components/Section";
import Grid from "../components/Grid";
import Select from "react-select";
import { LocationContext } from "../contexts/LocationContext";
import "../components/controls/index.css";
const options = [{ value: "", label: "" }];
const Product = ({ location }) => {
  const productList = productData.getAllProducts();

  const {
    Location: { maTinh },
    getDataLocation,
  } = useContext(LocationContext);
  const [maSoTinh, setmaSoTinh] = useState({
    pIsPhanQuyen: 0,
  });
  const { pIsPhanQuyen } = maSoTinh;
  console.log("maSoTinh", maTinh);
  const [isClearable, setIsClearable] = useState(true);

  const onChange = (data) => {
    // console.log("nhanle data value", data);
    // if (data)
    //   setmaSoTinh({
    //     pISDN: sdt,
    //     pMaChiNhanh: data.value,
    //   });
  };
  // nhanle test
  useEffect(() => {
    async function getData() {
      try {
        const newProduct = await getDataLocation(maSoTinh);
        console.log("new-data", newProduct);
      } catch (error) {
        return false;
      }
      return true;
    }
    getData();
  }, [pIsPhanQuyen]);

  // const option = maTinh.map((item, index)=>{
  //   value : item.mstinh,
  //   label : item.tentinh
  // });

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
                  options={options}
                  onChange={onChange}
                />
              </div>
              <div className="select-child">
                <Select
                  // value={pMaChiNhanh}
                  className="basic-single"
                  classNamePrefix="select"
                  placeholder="Quận"
                  options={options}
                  onChange={onChange}
                />
              </div>
              <div className="select-child">
                <Select
                  // value={pMaChiNhanh}
                  className="basic-single"
                  classNamePrefix="select"
                  placeholder="Cửa Hàng"
                  options={options}
                  onChange={onChange}
                  // isClearable={isClearable}
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
