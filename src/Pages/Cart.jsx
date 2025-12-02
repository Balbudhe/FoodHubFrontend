import React, { useState, useEffect } from "react";
import "./Cart.css";
import API from "../Utlis/Axios";
import Popupitem from "../Componant/Popupsec/Popupitem";
import "../MediaQuery/ResponCart.css";
const Cart = ({ close }) => {
  const [quantity, setQuantity] = useState([]);
  const [products, setProducts] = useState([]);
  const [showQr, setShowQr] = useState(false);
  const [time, setTime] = useState(3);
  const [showConfirm, setShowConfirm] = useState(false);
  const [showpropmt, setShowPrompt] = useState(false);
  const [payName, setPayName] = useState("");
  const [showemailsec, setShowSetemail] = useState(false);
  const [email, setEmail] = useState("");
  const [mssg, setMssg] = useState("");
  const [pop, setPop] = useState(false);
  const [discount, setDiscount] = useState(0);
  const [discpage, setDiscpage] = useState(false);
  const [discname, setDiscname] = useState("");

  useEffect(() => {
    if (showQr) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [showQr]);
  const fetchprod = async () => {
    try {
      const ap = await API.get("/products");
      setProducts(ap.data);
      setQuantity(Array(ap.data.length).fill(1));
    } catch (e) {
      setPop(true);
      setMssg("failed to load products", e);
    }
  };

  useEffect(() => {
    fetchprod();
  }, []);

  const Increment = (i) => {
    setQuantity((prev) => prev.map((q, index) => (index == i ? q + 1 : q)));
  };

  const Decrement = (i) => {
    setQuantity((prev) =>
      prev.map((q, index) => (index == i && q > 1 ? q - 1 : q))
    );
  };
  const subtotal = products.reduce(
    (tot, item, index) => tot + item.price * quantity[index],
    0
  );

  const total=subtotal-discount;
  const handleDelete = async (id) => {
    try {
      await API.delete(`/products/${id}`);
      // alert("Delete sucesffuly");
      fetchprod();
    } catch (e) {
      console.log("Delete not sucessfully", e);
      alert("delet something wrong");
    }
  };

  function handleProccedPay() {
    setShowQr(true);
  }

  useEffect(() => {
    if (!showQr) return;
    if (time == 0) {
      setShowQr(false);
      setTime(3);
      setShowConfirm(true);
      // const c=confirm("Payment window closed. If paid, please confirm your payment ✅");
    }

    const timer = setTimeout(() => {
      setTime((p) => p - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [showQr, time]);

  async function handleSubmit() {
    try {
      const billItem = products.map((pro, i) => ({
        name: pro.name,
        image: pro.image,
        quantity: quantity[i],
        totl: pro.price * quantity[i],
      }));
      const userdata = localStorage.getItem("user");
      const use = JSON.parse(userdata);
      const billDetail = {
        sentemail: email,
        items: billItem,
        usename: use.name,
        orderid: Math.floor(Math.random() * 10000),
        discounts: discount,
        alltotal:subtotal,
        subtotal: total,
        logo: "https://global.foodhub.com/img/favicon.png",
      };

      await API.post("/bills", billDetail);
      for (const prod of products) {
        await API.delete(`/products/${prod._id}`);
      }
      setPop(true);
      setMssg("✅ Order Placed sucessfully");
      setTimeout(() => setPop(false), 2000);
      setEmail("");
      setShowPrompt(false);
      setShowSetemail(false);
      setDiscount(0);
      setProducts([]);
      setQuantity([]);
    } catch (e) {
      setPop(true);
      setMssg("❌ Error saving bill:", e);
      setTimeout(() => setPop(false), 2000);
    }
  }

  function handleAddCoupan() {
    setDiscpage(true);
  }

  function handleCoupsubmit() {
    if (discname.trim() === "") {
      alert("No name added");
    } else if (discname.trim().toLowerCase() === "ritik") {
     setDiscount(50);
     setDiscpage(false);
    } else {
      alert("Unsuccessful");
      setShowPrompt(false);
    }
  }

  return (
    <>
      <div className="Cart-sec">
        <div className="cart-area">
          <p>Cart Section</p>
          <i className="fa-solid fa-xmark" onClick={close}></i>
        </div>
        <div className="cart-items">
          {products.length === 0 ? (
            <p
              style={{
                textAlign: "center",
                fontSize: "25px",
                marginTop: "3rem",
              }}
            >
              No product added 😕
            </p>
          ) : (
            <table width="100%">
              <thead>
                <tr>
                  <td></td>
                  <td>Image</td>
                  <td>Name</td>
                  <td>Price</td>
                  <td>Quantity</td>
                  <td>Total</td>
                </tr>
              </thead>
              <tbody>
                {products.map((prod, i) => (
                  <tr key={i}>
                    <td>
                      <i
                        className="fa-regular fa-circle-xmark"
                        onClick={() => handleDelete(prod._id)}
                      ></i>
                    </td>
                    <td>
                      <img src={prod.image}></img>
                    </td>
                    <td>{prod.name}</td>
                    <td>₹. {prod.price}</td>
                    <td>
                      <div className="quantity-sec">
                        <button onClick={() => Decrement(i)}>-</button>
                        <p>{quantity[i]}</p>
                        <button onClick={() => Increment(i)}>+</button>
                      </div>
                    </td>
                    <td>{prod.price * quantity[i]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
        <div className="subtot-sec">
          <div className="all-tot">
            <div className="total-sec">
              <span>Total :</span>
              <p>{subtotal}.00</p>
            </div>
            <div className="delivery-se">
              <span>Delivery Charges : </span>
              <p>Free</p>
            </div>
            <div className="discount-sec">
              <span>Discount : </span>
              <p>Rs.{discount ===0 ? 0 : -discount}</p>
            </div>
            <div className="sub-totalse">
              <span>SubTotal : </span>
              <p>Rs. {total}.00</p>
            </div>
          </div>

          {products.length === 0 ? (
            ""
          ) : (
            <div className="proced-btn">
              <button
                style={{ backgroundColor: "rgb(23, 101, 23)" }}
                onClick={handleAddCoupan}
              >
                Add Coupan
              </button>
              <button onClick={handleProccedPay}>Proceed To Pay</button>
            </div>
          )}
        </div>
      </div>

      {showQr && (
        <div className="qrcode-sec">
          <div className="qrcode-items">
            <p>Scan to Pay with Google Pay</p>
            <i
              className="fa-solid fa-xmark qr-close"
              onClick={() => setShowQr(false)}
            ></i>
            <img src="/images/qrcode.jpeg" alt="Google Pay QR" />
            <p style={{ fontSize: "14px", color: "gray" }}>
              {`This window will close automatically in ${time} seconds...`}
            </p>
          </div>
        </div>
      )}

      {showConfirm && (
        <div className="confirm-modal">
          <div className="confirm-content">
            <p>
              Payment window closed. If paid, please confirm your payment ✅
            </p>
            <div className="btns">
              <button
                onClick={() => {
                  setShowConfirm(false);
                  setShowPrompt(true);
                }}
              >
                Yes
              </button>
              <button onClick={() => setShowConfirm(false)}>No</button>
            </div>
          </div>
        </div>
      )}

      {discpage && (
        <div className="confirm-modal">
          <div className="confirm-content">
            <h3>Add Coupan</h3>
            <i
              className="fa-solid fa-xmark qr-close"
              onClick={() => setDiscpage(false)}
            ></i>

            <input
              type="text"
              value={discname}
              onChange={(e) => setDiscname(e.target.value)}
              placeholder="Enter a coupan"
            />
            <div className="btns">
              <button onClick={handleCoupsubmit}>Submit</button>
            </div>
          </div>
        </div>
      )}
      {showpropmt && (
        <div className="confirm-modal">
          <div className="confirm-content">
            <p>After payment, which name is shown?</p>
            <input
              type="text"
              value={payName}
              onChange={(e) => setPayName(e.target.value)}
              placeholder="Enter name"
            />
            <div className="btns">
              <button
                onClick={() => {
                  if (payName.trim() === "") {
                    alert("No name added");
                  } else if (payName.trim().toLowerCase() === "ritik") {
                    setShowSetemail(true);
                    setShowConfirm(false);
                    setShowPrompt(false);
                  } else {
                    alert("Unsuccessful");
                    setShowPrompt(false);
                  }
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {showemailsec && (
        <div className="email-sec">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <div className="emailbox">
              <h2>Submit to order Placed!!</h2>
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email id for the bill"
              ></input>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      )}
      {pop && <Popupitem msg={mssg}></Popupitem>}
    </>
  );
};

export default Cart;
