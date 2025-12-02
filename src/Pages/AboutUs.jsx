import React from "react";
import Nav from "../Componant/NavSec/Nav";
import Foote from "../Componant/Footer/Foote";
import "./AboutUs.css";
import '../MediaQuery/Respabout.css';
import '../MediaQuery/ResponCart.css';
const AboutUs = () => {
  return (
    <>
      <nav>
        <Nav></Nav>
      </nav>
      <section>
        <div className="about-sec ">
          <div className="abouts-item">
            <h3>ABOUT FOODHUB</h3>
            <p>
              Foodhub is an online portal with a wide selection of restaurants
              and takeaways in your local area. At Foodhub, we're passionate
              about connecting you with the best takeaway food around. We're a
              UK-based online food ordering portal that works with over 30,000
              takeaways, with a focus on championing local businesses. While
              we're predominantly based in the UK, our love for great food knows
              no bounds. We've expanded our services to Ireland, Australia, New
              Zealand, and the USA, bringing the same focus on local takeaways
              and fantastic deals to a wider audience.
            </p>

            <p>
              We know you love a good deal, so savings on our app compared to
              international rivals can be up to 30%! Here's the secret sauce;
              our fair price policy helps takeaways save more on commissions,
              allowing them to pass on more savings to you.
            </p>

            <p>
              Plus, there are no hidden charges, so you can order with
              confidence.
            </p>

            <p>
              To place your order, simply select the restaurant or takeaway of
              your choice, browse the menu, and add your items to your cart.
            </p>

            <p>
              Payment is easy and secure and you can save your card details for
              faster checkout in the future.
            </p>

            <p>
              So, next time you're craving a delicious takeaway, look no further
              than Foodhub. We'll connect you with your favourite local flavours
              and help you save money while you're at it.
            </p>

            <p>Same Food - Same Restaurant - Cheaper on Foodhub!</p>

            <p>Got questions? Contact us.</p>
            <br></br>
            <p>
              <b>FAQs</b>
            </p>
            <p>
              <b>Why is Foodhub cheaper?</b>
            </p>
            <p>
              Foodhub avoids flashy and expensive marketing gimmicks, and
              focuses on providing customers with better deals from their local
              takeaways. Our fair price policy helps takeaways save more on
              commissions, and they in turn give you the customers more
              discounts.
            </p>

            <p>
              <b>What kind of cuisines are available on Foodhub?</b>
            </p>
            <p>
              No matter what you are craving, you will find your favourite
              dishes here on Foodhub. Look for pizzas, burgers, tacos and even
              your favourite kebabs.
            </p>

            <p>
              <b>Does Foodhub have any offers or coupon codes?</b>
            </p>
            <p>
              Yes, apart from the offers provided by takeaways Foodhub does
              provide offers and coupon codes. To check out the latest foodhub
              offers and coupon codes available, go here:
              https://foodhub.co.uk/promotions-deals
            </p>

            <p>
              <b>How to add a voucher/coupon code?</b>
            </p>
            <p>
              It is easy to apply a coupon to your order. Add the items to your
              Basket. Make sure that the items that you add are eligible for the
              offer. In the Basket just below the subtotal you will be able to
              see a field "Enter the Coupon Code". Add the coupon code and click
              on Apply to get the offer.
            </p>

            <p>
              <b>I have a takeaway/restaurant, how do I join Foodhub?</b>
            </p>
            <p>
              Foodhub provides an ecosystem of solutions designed to scale your
              restaurant business. And our charges are reasonable, so you can
              save thousands in commissions within a year by choosing Foodhub
              today. Click here to join the Foodhub family:{" "}
              <a
                href="https://foodhubforbusiness.com/partner-with-foodhub/"
                target="_blank"
              >
                Become a Partner
              </a>
            </p>
            <p></p>
          </div>
        </div>
      </section>
      <footer>
        <Foote></Foote>
      </footer>
    </>
  );
};

export default AboutUs;
