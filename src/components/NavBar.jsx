import React from "react";
import logo from "../assets/BiNNO-Transparent_white.svg";

function NavBar() {
  return (
    <>
      {/*nav bar container*/}
      <div className="flex border border-indigo-500 w-full max-h-20">
        {/* logo container */}
        <div className="grow border border-blue-500 max-w-60">
          <img
            src={logo}
            alt="logo"
            className="max-h-20"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="itemContainer"></div>
      </div>
    </>
  );
}

export default NavBar;
