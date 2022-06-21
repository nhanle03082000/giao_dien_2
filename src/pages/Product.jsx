import React from "react";

import Helmet from "../components/Helmet";
import Section, { SectionBody } from "../components/Section";
import ProductView from "../components/ProductView";

import productData from "../assets/fake-data/products";

const Product = (props) => {
  const product = productData.getProductBySlug(props.match.params.slug);
  // đay   là tragn khi người dùng nhắn vào hình ảnh sản phẩm

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  return (
    <Helmet title={product.title}>
      <Section>
        <SectionBody>
          <ProductView product={product} />
        </SectionBody>
      </Section>
    </Helmet>
  );
};

export default Product;
