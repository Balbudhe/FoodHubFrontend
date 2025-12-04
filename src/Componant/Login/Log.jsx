import React, { useState } from "react";
import "./Log.css";
import { Link, useNavigate } from "react-router-dom";
import API from "../../Utlis/Axios";
import "./Resposive.css";
import Popupitem from "../Popupsec/Popupitem";
const Log = (props) => {
  const navigate = useNavigate();
  const [userdata, setUserdata] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const [mssg, setMssg] = useState("");
  const [pop, setPop] = useState(false);
  const handelinput = (e) => {
    setUserdata({ ...userdata, [e.target.name]: e.target.value });
  };
  const handelclick = async (e) => {
    e.preventDefault();

    try {
      const ap = await API.post(props.apipath, userdata);
      
      if (props.apipath.includes("login")) {
         setPop(true);
        setMssg("✅ Login sucessfull");
        setTimeout(() => setPop(false), 1000);
        setTimeout(() => navigate("/"), 1000);
        localStorage.setItem("token", ap.data.token);
        localStorage.setItem("user", JSON.stringify(ap.data.user));
        localStorage.setItem("justLoggedIn", "true");
       
      } else if (props.apipath.includes("register")) {
        setPop(true);
        setMssg("✅ Register Suceesfully");
        setTimeout(() => setPop(false), 2000);
        navigate("/login");
      } else if (props.apipath.includes("forgot")) {
        setPop(true);
        setMssg("✅ Sent link Sucessfully");
        setTimeout(() => setPop(false), 2000);
        navigate("/login");
      } else {
        setPop(true);
        setMssg("✅ Rest Sucessfully");
        setTimeout(() => setPop(false), 2000);
      }
    } catch (ex) {
      setPop(true);
      setMssg(ex?.respone?.data?.msg || "❌ Login Error, Try Again");
      setTimeout(() => setPop(false), 2000);
    }
  };

  return (
    <>
     <div className="foodhub-container">
      <div className="bg-overlay"></div>

      <div className="left-food">
        <h1>FoodHub</h1>
        <p>Delivering Happiness on Every Plate 🍽️</p>
      </div>

      <div className="login-card">
        <h2 className="sub">{props.pagename}</h2>
        <form onSubmit={handelclick}>
          <div className="login-item">
            {props.data.map((e, i) => (
              <input
                key={i}
                onChange={handelinput}
                type={e.type}
                required
                name={e.name}
                placeholder={e.placeholder}
              ></input>
            ))}
          </div>

          <div className="forget-sec">
            {props.links && <Link to={"/forgot"}>Forget Password?</Link>}
          </div>
          <div className="login-btn" type="Submit">
            <button>{props.btnname}</button>
          </div>
          <div className="reset-sec">
            {props.links && (
              <>
                <p>Don't have account?</p>
                <Link to={"/register"}>SignIn</Link>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
    {
      pop && <Popupitem msg={mssg} ></Popupitem>
    }
    
    </>
   
  );
};

export default Log;
