import React from "react";

import { Link } from "react-router-dom";

import Grid from "./Grid";

import logo from "../assets/images/logo-small.png";

const footerAboutLinks = [
  {
    display: "Facebook",
    path: "https://www.facebook.com/profile.php?id=100010329734351",
  },
  {
    display: "Youtube",
    path: "/about",
  },
];

const footerCustomerLinks = [
  {
    display: "Chính sách bảo hành",
    path: "/about",
  },
];
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <Grid col={4} mdCol={2} smCol={1} gap={60}>
          <div className="footer__about">
            <Link to="/">
              <img src={logo} className="footer__logo" alt="" />
            </Link>

            <p>CÔNG TY DỊCH VỤ MOBIFONE KHU VỰC 9</p>
            <p>
              Tòa nhà MobiFone, đường Số 22, Khu Công ty XD Số 8, Khu vực 2,
            </p>
            <p>mobifonemientay@mobifone.vn</p>
          </div>
          <div>
            <div className="footer__title">Chăm Sóc Khách Hàng</div>
            <div className="footer__content">
              <p>
                Liên Hệ Hỗ Trợ <strong>0123456789</strong>
              </p>
              <p>
                Góp ý, khiếu nại <strong>0123456789</strong>
              </p>
            </div>
          </div>
          <div>
            <div className="footer__title">Sản Phẩm Và Dịch vụ</div>
            <div className="footer__content">
              {footerCustomerLinks.map((item, index) => (
                <p key={index}>
                  <Link to={item.path}>{item.display}</Link>
                </p>
              ))}
            </div>
          </div>
          <div>
            <div className="footer__title">Liên Kết</div>
            <div className="footer__content">
              {footerAboutLinks.map((item, index) => (
                <p key={index}>
                  <Link to={item.path}>{item.display}</Link>
                </p>
              ))}
            </div>
          </div>
        </Grid>
      </div>
    </footer>
  );
};

export default Footer;
