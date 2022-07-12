import banner1 from "../assets/images/banner1.png";
import banner2 from "../assets/images/banner2.png";
import banner3 from "../assets/images/banner3_verson3.png";
import Banner from "../components/Banner";
import Grid from "../components/Grid";
import Helmet from "../components/Helmet";
import HeroSlider from "../components/HeroSlider";
import Section, { SectionBody } from "../components/Section";

const Home = () => {
  return (
    <Helmet title="Trang chủ">
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
