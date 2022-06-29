// import React, { useRef, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";

// import logo from "../assets/images/logo-small.png";

// const mainNav = [
//   {
//     display: "Trang chủ",
//     path: "/",
//   },
//   // {
//   //   display: "Sản phẩm",
//   //   path: "/catalog",
//   // },
//   // {
//   //   display: "Phụ kiện",
//   //   path: "/accessories",
//   // },
//   {
//     display: "Liên hệ",
//     path: "/contact",
//   },
// ];

// const Header = () => {
//   const { pathname } = useLocation();
//   const activeNav = mainNav.findIndex((e) => e.path === pathname);

//   const headerRef = useRef(null);

//   //   useEffect(() => {
//   //     window.addEventListener("scroll", () => {
//   //       if (
//   //         document.body.scrollTop > 80 ||
//   //         document.documentElement.scrollTop > 80
//   //       ) {
//   //         headerRef.current.classList.add("shrink");
//   //       } else {
//   //         headerRef.current.classList.remove("shrink");
//   //       }
//   //     });
//   //     return () => {
//   //       window.removeEventListener("scroll");
//   //     };
//   //   }, []);

//   const menuLeft = useRef(null);

//   const menuToggle = () => menuLeft.current.classList.toggle("active");

//   return (
//     <div className="header" ref={headerRef}>
//       <div className="container">
//         <div className="header__logo">
//           <Link to="/">
//             <img src={logo} alt="" />
//           </Link>
//         </div>
//         <div className="header__menu">
//           <div className="header__menu__mobile-toggle" onClick={menuToggle}>
//             <i className="bx bx-menu-alt-left"></i>
//           </div>
//           <div className="header__menu__left" ref={menuLeft}>
//             {mainNav.map((item, index) => (
//               <div
//                 key={index}
//                 className={`header__menu__item header__menu__left__item ${
//                   index === activeNav ? "active" : ""
//                 }`}
//                 onClick={menuToggle}
//               >
//                 <Link to={item.path}>
//                   <span>{item.display}</span>
//                 </Link>
//               </div>
//             ))}
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;

import React, { useRef, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import FormInfor from "./FormInfor";
import AuthPopup from "./AuthPopup";
import logo from "../assets/images/logo-small.png";

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
  const { pathname } = useLocation();
  const activeNav = mainNav.findIndex((e) => e.path === pathname);
  const [recordForEdit, setRecordForEdit] = useState(null);

  const headerRef = useRef(null);
  const [openPopup, setOpenPopup] = useState(false);
  const addOrEdit = (employee, resetForm) => {
    // if (employee.id === 0) Service.insertEmployee(employee);
    // else Service.updateEmployee(employee);
    resetForm();
    setRecordForEdit(null);
    setOpenPopup(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

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
    // <div className="header" ref={headerRef}>
    //   <div className="container">
    //     <div className="header__logo">
    //       <Link to="/">
    //         <img src={logo} alt="" />
    //       </Link>
    //     </div>
    //     <div className="header__menu">
    //       <div className="header__menu__mobile-toggle" onClick={menuToggle}>
    //         <div className="hear__menubar">
    //           <i className="bx bx-menu-alt-left"></i>
    //         </div>
    //       </div>
    //       <div className="header__menu__left" ref={menuLeft}>
    //         <div className="header__menu__left__close" onClick={menuToggle}>
    //           <i className="bx bx-chevron-left"></i>
    //         </div>
    //         {mainNav.map((item, index) => (
    //           <div
    //             key={index}
    //             className={`header__menu__item header__menu__left__item ${
    //               index === activeNav ? "active" : ""
    //             }`}
    //             onClick={menuToggle}
    //           >
    //             <Link to={item.path}>
    //               <span>{item.display}</span>
    //             </Link>
    //           </div>
    //         ))}
    //       </div>
    //       {/* <div className="header__menu__right">
    //         <div className="header__menu__left" ref={menuLeft}>
    //           <div className="header__menu__left__close" onClick={menuToggle}>
    //             <i className="bx bx-chevron-left"></i>
    //           </div>
    //           {mainNav.map((item, index) => (
    //             <div
    //               key={index}
    //               className={`header__menu__item header__menu__left__item ${
    //                 index === activeNav ? "active" : ""
    //               }`}
    //               onClick={menuToggle}
    //             >
    //               <Link to={item.path}>
    //                 <span>{item.display}</span>
    //               </Link>
    //             </div>
    //           ))}
    //         </div>
    //       </div> */}
    //     </div>
    //   </div>
    // </div>
  );
};

export default Header;
