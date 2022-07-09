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
          </SectionBody>
        </SectionBody>
      </Section>
    </Helmet>
  );
};

export default Home;
