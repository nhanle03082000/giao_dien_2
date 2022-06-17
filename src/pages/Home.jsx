import React from "react";

import Helmet from "../components/Helmet";
import HeroSlider from "../components/HeroSlider";
import Section, { SectionTitle, SectionBody } from "../components/Section";
import PolicyCard from "../components/PolicyCard";
import Grid from "../components/Grid";
import ProductCard from "../components/ProductCard";

import heroSliderData from "../assets/fake-data/hero-slider";
import productData from "../assets/fake-data/products";
import Select from "react-select";

const Home = () => {
  const productList = productData.getAllProducts();

  return (
    <Helmet title="Trang chủ">
      {/* hero slider */}
      <HeroSlider
        data={heroSliderData}
        control={true}
        auto={false}
        timeOut={5000}
      />
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
        <SectionTitle>quà tặng</SectionTitle>
        <SectionBody>
          <Grid col={7}>
            <Select
              className="basic-single"
              classNamePrefix="select"
              // defaultValue={colourOptions[0]}
              isClearable={true}
              name="color"
              // options={colourOptions}
            />
            <Select
              className="basic-single"
              classNamePrefix="select"
              // defaultValue={colourOptions[0]}
              isClearable={true}
              name="color"
              // options={colourOptions}
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
