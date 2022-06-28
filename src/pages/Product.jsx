import React, { useContext, useState, useEffect } from "react";

import PolicyCard from "../components/PolicyCard";
import productData from "../assets/fake-data/products";
import ProductCard from "../components/ProductCard";

import Helmet from "../components/Helmet";
import ProductView from "../components/ProductView";
import Section, { SectionTitle, SectionBody } from "../components/Section";
import Grid from "../components/Grid";
import Select from "react-select";
import { ProductContext } from "../contexts/ProductContext";

const options = [
  { value: "AGI", label: "T. An Giang" },
  { value: "BLI", label: "T. Bạc Liêu" },
  { value: "BTR", label: "T. Bến Tre" },
  { value: "CMA", label: "T. Cà Mau" },
  { value: "HGI", label: "T. Hậu Giang" },
  { value: "KGI", label: "T. Kiên Giang" },
  { value: "PQU", label: "T. Phú Quốc" },
  { value: "STR", label: "T. Sóc Trăng" },
  { value: "TGI", label: "T. Tiền Giang" },
  { value: "TVI", label: "T. Trà Vinh" },
  { value: "VLO", label: "T. Vĩnh Long" },
  { value: "DTH", label: "T. Đồng Tháp" },
  { value: "CTH", label: "T. Cần Thơ" },
];
const Product = ({ location }) => {
  const productList = productData.getAllProducts();

  const {
    productState: { products },
    getDataProducts,
  } = useContext(ProductContext);
  const [ProductForm, setProductForm] = useState({
    pISDN: "",
    pMaChiNhanh: "",
  });
  const [sdt, setSdt] = useState("");
  const [dataProduct, setDataProduct] = useState("");
  console.log("dataProduct", products);
  const { pISDN, pMaChiNhanh } = ProductForm;
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const q = params.get("pISDN");
    setSdt(q);
  }, []);
  const onChange = (data) => {
    setProductForm({
      pISDN: sdt,
      pMaChiNhanh: data.value,
    });
  };
  // nhanle test
  useEffect(() => {
    async function getProduct() {
      try {
        const newProduct = await getDataProducts(ProductForm);
        console.log("new-data", newProduct);
        setDataProduct(newProduct);
      } catch (error) {
        return false;
      }
      return true;
    }
    getProduct();
  }, [pMaChiNhanh]);

  return (
    <Helmet title="nhale">
      {/* <Section>
        <SectionBody>
          <ProductView product={product} />
        </SectionBody>
      </Section> */}

      <Section>
        <SectionTitle>quà tặng</SectionTitle>
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
          <Grid col={7}>
            <Select
              // value={pMaChiNhanh}
              className="basic-single"
              classNamePrefix="select"
              placeholder=" Thành Phố "
              options={options}
              onChange={onChange}
            />
          </Grid>
        </SectionBody>

        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
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
