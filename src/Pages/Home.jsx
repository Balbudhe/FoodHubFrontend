import React from "react";
import Nav from "../Componant/NavSec/Nav";
import "./Home.css";
import Foote from "../Componant/Footer/Foote";
import { useNavigate } from "react-router-dom";
import '../MediaQuery/Resphome.css';
const Home = () => {
  const location= useNavigate();
  const products = [
    {
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Biryani.png",
        name:"Biryani"
    },
    {
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Burger.png",
      name:"Burger"
    },
    {
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Pizza.png",
        name:"Pizza"
    },
    {
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Noodles.png",
        name:"Noodles"
    },
    {
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Rolls.png",
        name:"Rolls"
    },
    {
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Paratha.png",
        name:"Paratha"
    },
    {
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Khichdi.png",
        name:"Khichdi"
    },
    {
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Tea.png",
        name:"Tea"
    },
    {
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Idli.png",
        name:"Idli"
    },
    {
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Cake.png",
        name:"Cake"
    },
    {
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Shake.png",
        name:"Shake"
    },
    {
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Dosa.png",
        name:"Dosa"
    },
  ];

  localStorage.setItem("searchitem",JSON.stringify(products));
 
  function handleclick(e) {
    if (e.target.name == "Delivery") location("/fooddelivery")
    else location("/dinneout")
  }

  function handleprodClick(e){
    const route=e.target.dataset.name.toLowerCase().replace(/\s+/g,"");
    location(`/${route}`);
    console.log(e.target.name);
    
  }
  return (
    <div>
      <nav>
        <Nav></Nav>
      </nav>
      <div className="Home-section">
        <div className="courusel-view">
          <div className="home-item">
            <div className="home-image">
              <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"></img>
            </div>
            <div className="headline-sec">
              <div className="head-sec">
                <p>
                  Order food & groceries. Discover best restaurants. FoodHub it!
                </p>
              </div>
              <div className="head-item">
                <img
                  onClick={handleclick}
                  name="Delivery"
                  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png"
                ></img>
                <img
                  onClick={handleclick}
                  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png"
                ></img>
              </div>
            </div>
            <div className="home-image1">
              <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"></img>
            </div>
          </div>
        </div>
        <div className="product-sect">
          <div className="food-opt">
            <h2>Order our best food options</h2>
            <div className="products">
              {products.map((pro, i) => (
                <img key={i} src={pro.image} onClick={handleprodClick} data-name={pro.name}></img>
              ))}
            </div>
          </div>
          
          <div className="scanner-sec">
            <p>Download our App to Get exclusive discounts</p>
            <img src="https://global.foodhub.com/img/foodhub-download-app.webp"></img>
          </div>
        </div>
      </div>
      <footer>
        <Foote></Foote>
      </footer>
    </div>
  );
};

export default Home;
