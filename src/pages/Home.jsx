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
import { ProductContext } from "../contexts/ProductContext";
import { createBrowserHistory } from "history";
import Banner from "../components/Banner";
import banner1 from "../assets/images/banner1.png";
import banner2 from "../assets/images/banner2.png";
import banner3 from "../assets/images/banner3_1.png";

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
const history = createBrowserHistory();

const Home = ({ location }) => {
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
    <Helmet title="Trang chủ">
      {/* hero slider */}
      <HeroSlider control={true} auto={false} timeOut={5000} />
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
      <Section>
        <SectionBody>
          <Grid col={3} mdCol={2} smCol={1} gap={20}>
            <Banner img={banner1} />
            <Banner img={banner2} />
            <Banner img={banner3} />
          </Grid>
        </SectionBody>
      </Section>
      <Section>
        <SectionTitle>quà tặng</SectionTitle>
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
      {/* end best selling section */}

      {/* new arrival section */}
      {/* <Section>
        <SectionTitle>sản phẩm mới</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {productData.getProducts(8).map((item, index) => (
              <ProductCard
                key={index}
                img01={item.image01}
                img02={item.image02}
                name={item.title}
                price={Number(item.price)}
                slug={item.slug}
              />
            ))}
          </Grid>
        </SectionBody>
      </Section> */}
      {/* end new arrival section */}

      {/* banner */}
      {/* <Section>
        <SectionBody>
          <Link to="/catalog">
            <img src={banner} alt="" />
          </Link>
        </SectionBody>
      </Section> */}
      {/* end banner */}

      {/* popular product section */}
      {/* <Section>
        <SectionTitle>phổ biến</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {productData.getProducts(12).map((item, index) => (
              <ProductCard
                key={index}
                img01={item.image01}
                img02={item.image02}
                name={item.title}
                price={Number(item.price)}
                slug={item.slug}
              />
            ))}
          </Grid>
        </SectionBody>
      </Section> */}
      {/* end popular product section */}
    </Helmet>
  );
};

export default Home;
