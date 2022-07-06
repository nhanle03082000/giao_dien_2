import React, { useRef, useEffect, useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import FormInfor from "./FormInfor";
import AuthPopup from "./AuthPopup";
import logo from "../assets/images/logo-small.png";
import { AuthContext } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";

const mainNav = [
  {
    display: "Trang chủ",
    path: "/",
  },

  // {
  //   display: "Đăng Nhập",
  //   path: "/product",
  // },
];

const Header = () => {
  const history = useHistory();

  const { checkAuth } = useContext(AuthContext);

  const { pathname } = useLocation();
  const activeNav = mainNav.findIndex((e) => e.path === pathname);
  const [recordForEdit, setRecordForEdit] = useState(null);

  const headerRef = useRef(null);
  const [openPopup, setOpenPopup] = useState(false);
  const addOrEdit = async (employee, resetForm) => {
    const dataLogin = await checkAuth(employee);
    console.log("data login usercontexxt", dataLogin);
    history.push({
      pathname: "/product",
    });
    resetForm();
    setRecordForEdit(null);
    setOpenPopup(false);
  };

  const menuLeft = useRef(null);

  const menuToggle = () => menuLeft.current.classList.toggle("active");
  const menuLogin = () => {
    menuToggle();
    setOpenPopup(true);
  };
  return (
    <div className="header" ref={headerRef}>
      <div className="container">
        <div className="header__logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="header__menu">
          <div className="header__menu__mobile-toggle" onClick={menuToggle}>
            <i className="bx bx-menu-alt-left"></i>
          </div>
          <div className="header__menu__left" ref={menuLeft}>
            <div className="header__menu__left__close" onClick={menuToggle}>
              <i className="bx bx-chevron-left"></i>
            </div>
            {mainNav.map((item, index) => (
              <div
                className={`header__menu__item header__menu__left__item ${
                  index === activeNav ? "active" : ""
                }`}
                onClick={menuToggle}
              >
                <Link to={item.path}>
                  <span>{item.display}</span>
                </Link>
              </div>
            ))}
            <div className="header__menu__item header__menu__left__item">
              <span onClick={() => menuLogin()}>Đăng Nhập</span>
            </div>
            <FormInfor
              title="Vui Lòng Điền Thông Tin"
              openPopup={openPopup}
              setOpenPopup={setOpenPopup}
            >
              <AuthPopup recordForEdit={recordForEdit} addOrEdit={addOrEdit} />
            </FormInfor>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
