import React from "react";
import callIcon from "../assets/Vector.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import twitter from "../assets/twitter.png";
import behance from "../assets/behance.png";

const Navbar = () => {
  return (
    <header
      className="h-120 bg-gray-900 lg:
1440px "
    >
      <div className="bg-headerColor h-14 w-full">
        <div className="flex justify-between mx-auto w-1218">
          <div className="w-213 h-7 flex top-4 left-20 relative gap-1 items-center">
            <img src={callIcon} alt="call Icon" className="w-4 h-5" />{" "}
            <p className="text-white font-extrabold">+91 8374902234</p>
          </div>
          <div className="flex gap-1 items-center justify-evenly w-244 h-5 relative top-5">
            <img
              src={facebook}
              alt="social media icon"
              style={{ width: "10.73px", height: "20.04px" }}
            />
            <img
              src={instagram}
              alt="social media icon"
              style={{ width: "15.74px", height: "15.74px" }}
            />
            <img
              src={linkedin}
              alt="social media icon"
              style={{ width: "15.03px", height: "15.74px" }}
            />
            <img
              src={twitter}
              alt="social media icon"
              style={{ width: "17.17px", height: "13.98px" }}
            />
            <img
              src={behance}
              alt="social media icon"
              style={{ width: "17.17px", height: "13.98px" }}
            />
          </div>
        </div>
      </div>
      <div></div>
      <nav></nav>
    </header>
  );
};

export default Navbar;
