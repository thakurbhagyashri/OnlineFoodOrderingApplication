import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
export const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus=useOnlineStatus();
  //header contain the information and small components of header
  //if no dependency array still useefeect call after every render/component render
  // if D.A is empty/[],then it called at initial render just once
  //if D.A eg. is [btnName],it render whenever the btnName is updated
  useEffect(()=>
  {
    console.log("useeffect");
    
  },[])
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All"
        />
      </div>
      <div className="nav-items">
        <ul><li>Online Status{onlineStatus?"ON":"OFF"}</li>
          <li><Link to="/">Home</Link></li>
          <li> <Link to="/about">AboutUs</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to ="" >Cart</Link></li>
          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
              console.log(btnName);
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};
