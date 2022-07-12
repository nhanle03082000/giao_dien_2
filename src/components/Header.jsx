import { useContext, useRef, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import logo from "../assets/images/logo-small.png";
import ModalErrorComponent from "../components/modal/ModalError.component";
import { AuthContext } from "../contexts/AuthContext";
import { LOCAL_STORAGE_TOKEN_NAME } from "../contexts/constant";
import AuthPopup from "./AuthPopup";
import FormInfor from "./FormInfor";
import LoadingComponent from "./loading/Loading.component";
const mainNav = [
  {
    display: "Trang chủ",
    path: "/",
  },
];

const Header = () => {
  let token = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TOKEN_NAME));
  const history = useHistory();
  const { checkAuth, logoutUser } = useContext(AuthContext);
  const { pathname } = useLocation();
  const activeNav = mainNav.findIndex((e) => e.path === pathname);
  const [recordForEdit, setRecordForEdit] = useState(null);
  const headerRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const addOrEdit = async (employee, resetForm) => {
    setIsLoading(true);
    const dataLogin = await checkAuth(employee);
    console.log("dataLogin", dataLogin);
    if (dataLogin.pResultQua) {
      history.push({
        pathname: "/product",
      });
    } else if (dataLogin.status === 0) {
      setOpenPopup(false);
      setOpenModal(true);
    }
    resetForm();
    setRecordForEdit(null);
    setOpenPopup(false);
    setIsLoading(false);
  };

  const menuLeft = useRef(null);

  const menuToggle = () => menuLeft.current.classList.toggle("active");
  const menuLogin = () => {
    menuToggle();
    setOpenPopup(true);
  };
  const handleLogut = (props) => {
    console.log("props header", props);
    menuToggle();
    logoutUser("hello nhanle");
    history.push({
      pathname: "/",
    });
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const handleClickHome = () => {
    setOpenModal(false);
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
                key={index}
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
            {token ? (
              <div className="header__menu__item header__menu__left__item">
                <span onClick={() => handleLogut("nhanle")}>Đăng Xuất</span>
              </div>
            ) : (
              <div className="header__menu__item header__menu__left__item">
                <span onClick={() => menuLogin()}>Đăng Nhập</span>
              </div>
            )}
            {isLoading ? <LoadingComponent /> : ""}
            <FormInfor
              title="Vui Lòng Điền Thông Tin"
              openPopup={openPopup}
              setOpenPopup={setOpenPopup}
            >
              <AuthPopup recordForEdit={recordForEdit} addOrEdit={addOrEdit} />
            </FormInfor>
            <ModalErrorComponent
              open={openModal}
              handleClose={handleCloseModal}
              title="Số điện thoại hoặc mã quà tặng không chính xác!"
              handleClickHome={handleClickHome}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
