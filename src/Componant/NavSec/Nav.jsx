import React from "react";
import "./Nav.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Cart from "../../Pages/Cart";
import Popupitem from "../Popupsec/Popupitem";
import "./Navresponse.css";
const Nav = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [userName, setUsername] = useState("");
  const [namepop, setNamepop] = useState(false);
  const [cartpag, setCartpg] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [searchdrop, setSearchDrop] = useState(false);
  const [mssg, setMssg] = useState("");
  const [searchinput, setSearchInput] = useState("");
  const [pop, setPop] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [menuToggle, setMenuToggle] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const tok = localStorage.getItem("token");
    const userdata = localStorage.getItem("user");
    const justloggedIn = localStorage.getItem("justLoggedIn");
    if (tok && userdata) {
      setIsLogin(true);
      const user = JSON.parse(userdata);
      setUsername(user.name);

      if (justloggedIn === "true") {
        setNamepop(true);
        const timer = setInterval(() => {
          setNamepop(false);
          localStorage.removeItem("justLoggedIn");
        }, 3000);
        return () => clearInterval(timer);
      }
    } else {
      setIsLogin(false);
      setUsername("");
    }
  }, []);

  useEffect(() => {
    if (showConfirm ) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [showConfirm]);
  useEffect(() => {
    if (cartpag) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [cartpag]);
  const closecart = () => {
    setCartpg(false);
  };
  const toggleMenu = () => {
    setMenuToggle(!menuToggle);
  };
  function handellogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLogin(false);
    setUsername("");
    setPop(true);
    setMssg("✅ Logout sucessfully");
    setTimeout(() => navigate("/login"), 2000);
  }

  const handleMenu = () => {
    setDropdown(true);
  };
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        !e.target.closest(".menu-container") &&
        !e.target.closest("#menu-tap")
      ) {
        setDropdown(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);
  useEffect(() => {
    const handleclickout = (e) => {
      if (
        !e.target.closest(".searchbar-sec") &&
        !e.target.closest(".search-items")
      ) {
        setSearchDrop(false);
        setSearchInput("");
      }
    };

    document.addEventListener("click", handleclickout);
    return () => document.removeEventListener("click", handleclickout);
  }, []);
  useEffect(() => {
    const handletoggleclickout = (e) => {
      if (
        !e.target.closest(".mobile-menu-icon") &&
        !e.target.closest(".menu-sec")
      ) {
        setMenuToggle(false);
      }
    };

    document.addEventListener("click", handletoggleclickout);
    return () => document.removeEventListener("click", handletoggleclickout);
  }, []);

  const prod = JSON.parse(localStorage.getItem("searchitem"));
  const filt = prod.filter((ite) =>
    ite.name.toLowerCase().includes(searchinput.toLowerCase())
  );

  function handleClickItem(e) {
    const item = e.currentTarget.dataset.name;
    console.log(item);

    const route = item.toLowerCase().replace(/\s+/g, "");
    navigate(`/${route}`);
  }

  return (
    <>
      <div className="nav-container">
        <div className="logo-sec">
          <img src="https://global.foodhub.com/img/logo-foodhub-white.png"></img>
        </div>
        <div className="searchbar-sec">
          <input
            style={{
              borderBottomLeftRadius: searchdrop ? "0px" : "10px",
              borderBottomRightRadius: searchdrop ? "0px" : "10px",
            }}
            placeholder="Search here"
            value={searchinput}
            onChange={(e) => setSearchInput(e.target.value)}
            onClick={() => setSearchDrop(true)}
          ></input>
          {searchdrop && (
            <div className="search-items">
              {filt.length == 0 ? (
                <div>
                  <p>This Food Is Not Available</p>
                </div>
              ) : (
                filt.map((pro, i) => (
                  <div
                    key={i}
                    className="serch-item"
                    onClick={handleClickItem}
                    data-name={pro.name}
                  >
                    <span>&#8601;</span>
                    <p>{pro.name}</p>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
        <div className="nav-sec">
          <Link to={"/"}>
            <i className="fa-solid fa-house"></i> Home
          </Link>
          <Link to={"/shop"}>
            <i className="fa-solid fa-bag-shopping"></i> Shop
          </Link>

          <p id="cart-p" onClick={() => setCartpg(true)}>
            <i className="fa-solid fa-cart-arrow-down"></i> Cart
          </p>
          <i
            className="fa-solid fa-bars"
            id="menu-tap"
            onClick={handleMenu}
            onDoubleClick={() => setDropdown(false)}
          ></i>
        </div>
        <div className="mobile-menu-icon" onClick={toggleMenu}>
          <i className="fa-solid fa-bars"></i>
        </div>
        <div className="logout-sec">
          {isLogin ? (
            <>
              <div
                className="username-sec"
                style={{ display: namepop ? "block" : "none" }}
              >
                <span>{`Welcome ${userName},👋 Order Here!!`}</span>
              </div>

              <div className="login-sec">
                <button onClick={() => setShowConfirm(true)}>
                  <i className="fa-solid fa-right-from-bracket"></i>
                </button>
              </div>
            </>
          ) : (
            <div className="login-sec">
              <Link to="/login">
                <i className="fa-regular fa-user"></i>
              </Link>
            </div>
          )}
        </div>
      </div>
      {cartpag ? <Cart close={closecart}></Cart> : ""}

      <div className="menu-container">
        {dropdown && (
          <div className="menu-sec slide-down">
            <div className="menu-item">
              <Link to="/aboutus">About Us</Link>
            </div>
            <div className="menu-item">
              <Link to="/contactus">Contact Us</Link>
            </div>
          </div>
        )}
        {menuToggle && (
          <div className="menu-sec">
            <div className="menu-item">
              <Link to="/">Home</Link>
            </div>

            <div className="menu-item">
              <Link to="/shop">Shop</Link>
            </div>

            <p id="cart-p" onClick={() => setCartpg(true)}>
              Cart
            </p>
            <div className="menu-item">
              <Link to="/aboutus">About Us</Link>
            </div>
            <div className="menu-item">
              <Link to="/contactus">Contact Us</Link>
            </div>
          </div>
        )}
      </div>

      {pop && <Popupitem msg={mssg}></Popupitem>}

      {showConfirm && (
        <div className="confirm-modal">
          <div className="confirm-content">
            <p>Do you want to Logout??</p>
            <div className="btns">
              <button onClick={handellogout}>Yes</button>
              <button onClick={() => setShowConfirm(false)}>No</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;
