import React from "react";

import { Link } from "react-router-dom";

import Grid from "./Grid";

import logo from "../assets/images/logo-small.png";

const footerAboutLinks = [
  {
    display: "Facebook",
    path: "https://www.facebook.com/MobiFoneMienTayOfficial/",
  },
  {
    display: "",
    path: "/about",
  },
];

const footerCustomerLinks = [
  {
    display: "",
    path: "/about",
  },
];
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <Grid col={3} mdCol={2} smCol={1} gap={60}>
          <div className="footer__about">
            <Link to="/">
              <img src={logo} className="footer__logo" alt="" />
            </Link>

            <p>CÔNG TY DỊCH VỤ MOBIFONE KHU VỰC 9</p>
            <p>
              Tòa nhà MobiFone, đường Số 22, Khu Công ty XD Số 8, Khu vực 2,
            </p>
          </div>
          <div>
            <div className="footer__title">Tổng Đài Chăm Sóc Khách Hàng</div>
            <div className="footer__content">
              <p>
                Liên hệ hỗ trợ: <strong>9090</strong> hoặc
                <strong>19001090</strong>
              </p>
              <p>
                Hotline <strong>0939144144</strong>
              </p>
            </div>
          </div>
          {/* <div>
            <div className="footer__title">Sản Phẩm Và Dịch vụ</div>
            <div className="footer__content">
              {footerCustomerLinks.map((item, index) => (
                <p key={index}>
                  <Link to={item.path}>{item.display}</Link>
                </p>
              ))}
            </div>
          </div> */}
          <div>
            <div className="footer__title">Liên Kết</div>
            <div className="footer__content">
              {footerAboutLinks.map((item, index) => (
                <p key={index}>
                  <a href={item.path}>{item.display}</a>
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
