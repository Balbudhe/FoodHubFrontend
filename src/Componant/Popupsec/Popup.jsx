import React, { useState } from "react";
import "./Popup.css";
import Cart from "../../Pages/Cart";
import './ResPopup.css';
const Popup = ({msg,show}) => {
  const [viewcart, setViewcart] = useState(false);

  const closecart=()=>{
    setViewcart(false);
  }
  return (
    <>
    {
      show &&
      <div className="popup-sec">
        <p>{msg}</p>
        <div className="direction-cart">
          <p onClick={() => setViewcart(true)}>View Cart</p>
          <i className="fa-solid fa-bag-shopping"></i>
        </div>
      </div>
    }
      
      {
        viewcart &&
        <Cart close={closecart}></Cart>
      }
    </>
  );
};

export default Popup;
