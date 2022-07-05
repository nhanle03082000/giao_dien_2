import React, { useContext, useState, useEffect } from "react";
import Helmet from "../components/Helmet";
import HeroSlider from "../components/HeroSlider";
import Section, { SectionTitle, SectionBody } from "../components/Section";
import PolicyCard from "../components/PolicyCard";
import Grid from "../components/Grid";
import ProductCard from "../components/ProductCard";
//test
import productData from "../assets/fake-data/products";
import Select from "react-select";
import { LocationContext } from "../contexts/LocationContext";
import { createBrowserHistory } from "history";
import Banner from "../components/Banner";
import banner1 from "../assets/images/banner1.png";
import banner2 from "../assets/images/banner2.png";
import banner3 from "../assets/images/banner3_verson3.png";
import { AuthContext } from "../contexts/AuthContext";

const history = createBrowserHistory();
const Home = ({ location }) => {
  // const productList = productData.getAllProducts();

  // const {
  //   productState: { products },
  //   getDataProducts,
  // } = useContext(LocationContext);
  // const [ProductForm, setProductForm] = useState({
  //   pISDN: "",
  //   pMaChiNhanh: "",
  // });
  // const [sdt, setSdt] = useState("");
  // const [dataProduct, setDataProduct] = useState("");
  // console.log("dataProduct", products);
  // const { pISDN, pMaChiNhanh } = ProductForm;
  // useEffect(() => {
  //   const params = new URLSearchParams(location.search);
  //   const q = params.get("pISDN");
  //   setSdt(q);
  // }, []);
  // const onChange = (data) => {
  //   setProductForm({
  //     pISDN: sdt,
  //     pMaChiNhanh: data.value,
  //   });
  // };
  // // nhanle test
  // useEffect(() => {
  //   async function getProduct() {
  //     try {
  //       const newProduct = await getDataProducts(ProductForm);
  //       console.log("new-data", newProduct);
  //       setDataProduct(newProduct);
  //     } catch (error) {
  //       return false;
  //     }
  //     return true;
  //   }
  //   getProduct();
  // }, [pMaChiNhanh]);
  return (
    <Helmet title="Trang chủ">
      {/* hero slider */}
      <Section>
        <HeroSlider control={true} auto={false} timeOut={5000} />
      </Section>

      <Section>
        <SectionBody>
          <SectionBody>
            <Grid
              col={3}
              mdCol={2}
              smCol={1}
              style={{
                paddingTop: "45px",
                borderTop: "3px solid #d1cfcf",
              }}
            >
              <Banner img={banner1} />
              <Banner img={banner2} />
              <Banner img={banner3} />
            </Grid>
            {/* <div className="img-main">
                <Banner img={banner3} />
              </div> */}
          </SectionBody>
        </SectionBody>
      </Section>
      {/* <Section>
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
      </Section> */}
    </Helmet>
  );
};

export default Home;
