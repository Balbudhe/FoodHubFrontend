import React, { useState } from "react";
import Nav from "../Componant/NavSec/Nav";
import Foote from "../Componant/Footer/Foote";
import "./Contactus.css";
import API from "../Utlis/Axios";
const ContactUs = () => {
  const [contctDetail, setContctDetail] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleinput = (e) => {
    setContctDetail({ ...contctDetail, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      if(contctDetail.name==="" || contctDetail.email==="" || contctDetail===""){
        alert("Add something")
      }
      else{

        await API.post("/contactdata", contctDetail);
        console.log("sucessfull");
        setContctDetail({
          name: "",
          email: "",
          message: "",
        });
      }
    } catch (e) {
      console.log("Error to sent mail", e);
    }
  };
  return (
    <>
      <nav>
        <Nav></Nav>
      </nav>
      <section>
        <div className="contact-sec">
          <div className="contact-parts">
            <h1>Customer Support</h1>
            <h3>Email:support@foodhub.in</h3>
            <h2>Corporate Office</h2>
            <p>
              No. 55, Sy No. 8-14, Ground Floor, I&J Block, Embassy TechVillage,
              Outer Ring Road, Devarbisanahalli, Bengaluru 560 103, Karnataka,
              India, Corporate Identity Number: L74110KA2013PLC096530
              Registration Number: 096530
            </p>
            <div className="contct-img">
              <img src="https://www.swiggy.com/corporate/wp-content/uploads/2024/10/yoga-day-2.webp"></img>
            </div>
          </div>
          <div className="Messaging-center">
            <h2>Get in Touch</h2>
            <img src="https://www.swiggy.com/corporate/wp-content/uploads/2024/10/Sandwich-1-1194x1536.webp"></img>
            <div className="contact-input">
              <input
                type="text"
                onChange={handleinput}
                required
                value={contctDetail.name}
                name="name"
                placeholder="Enter your name"
              ></input>
              <input
                type="text"
                onChange={handleinput}
                value={contctDetail.email}
                name="email"
                placeholder="Enter your email"
              ></input>
              <textarea
                onChange={handleinput}
                value={contctDetail.message}
                name="message"
                placeholder="Enter Message"
              ></textarea>
              <button onClick={handleSubmit}>Submit</button>
            </div>
          </div>
        </div>
        <div className="scanner-sec1">
          <p>Download our App to Get exclusive discounts</p>
          <img src="https://global.foodhub.com/img/foodhub-download-app.webp"></img>
        </div>
      </section>
      <footer>
        <Foote></Foote>
      </footer>
    </>
  );
};

export default ContactUs;
