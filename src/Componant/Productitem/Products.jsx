import React, { useEffect, useState } from "react";
import "./Product.css";
import API from "../../Utlis/Axios";
import Popup from "../Popupsec/Popup";
import "./Responsiveproduct.css";
const Products = (props) => {
  const [popup, setPopup] = useState(false);
  const [popupmsg, setPopmsg] = useState();
  // const [products,setProducts]=useState([])
  async function handleaddbtn(item) {
    const data = {
      name: item.proname,
      price: item.price,
      image: item.image,
    };
    // setProducts(prev=>[...prev,data]);

    console.log(data);

    try {
      await API.post("/products", data);
      setPopup(true);
      setPopmsg("An item added");
       setTimeout(()=>setPopup(false),5000)
    } catch (e) {
      setPopmsg("Failed to save product");
    }
  }

  return (
    <>
      <div className="restro-sec">
        <p id="restr-p">{props.itemname}</p>
        <span id="descip">{props.description}</span>
        <div className="restroshop-sec">
          <p id="total-p">{`${props.total} Foods to Order`}</p>
          <div className="foods-items">
            {props.data.map((item, i) => (
              <div key={i} className="foods">
                <img src={item.image}></img>
                <div className="descri-sec">
                  <div className="product-name">
                    <p id="pro-name">{item.proname}</p>
                  </div>
                  <div className="price-time">
                    <p id="price">₹. {item.price}</p>
                    {props.time && (
                      <p id="time-p">
                        <i
                          className="fa-solid fa-circle-dot"
                          style={{ color: "#0ad64e", fontSize: "9px" }}
                        ></i>{" "}
                        25-30 mins
                      </p>
                    )}
                  </div>

                  <span id="prod-desc">{item.desc}</span>
                  <div className="addbtn-sec">
                    <button onClick={() => handleaddbtn(item)}>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Popup msg={popupmsg} show={popup}></Popup>
      </div>
      <div className="additional-info"></div>
    </>
  );
};

export default Products;
