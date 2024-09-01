import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
export const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus=useOnlineStatus();
  //header contain the information and small components of header
  //if no dependency array still useEfect call after every render/component render
  // if D.A is empty/[],then it called at initial render just once
  //if D.A eg. is [btnName],it render whenever the btnName is updated
  useEffect(()=>
  {
    console.log("useeffect");
    
  },[])
  return (
    <div className=" flex  shadow-lg p-2 m-2 justify-between" >
      <div className="w-[100px] ">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All"
        />
      </div>
      <div className="flex-wrap p-2 m-2 items-center font-bold text-custom-yellow">
        <ul className=" flex p-4 gap-5">
          {/* <li className=" hover:text-gray-950">Online Status{onlineStatus?"ON":"OFF"}</li> */}
          <li className=" hover:text-orange-500 "><Link to="/">Home</Link></li>
          <li className=" hover:text-orange-500" > <Link to="/about">AboutUs</Link></li>
          <li className=" hover:text-orange-500"><Link to="/contact">Contact Us</Link></li>
          <li className=" hover:text-orange-500"><Link to ="" >Cart</Link></li>
          <button
            className=" hover:text-orange-500"
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
