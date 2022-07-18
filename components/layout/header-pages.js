import React, { useState, useEffect } from "react";
import Link from "next/link";
// Import react scroll
import { Link as LinkScroll } from "react-scroll";
import ButtonOutline from "../misc/button-outline.";
import Sign from "./header-sign-in";

const PagesHeader = () => {
  const [activeLink, setActiveLink] = useState(null);
 
  return (
    <>
      <header
        className={
          "fixed top-0 w-full  z-30 bg-white-500 transition-all shadow-md pt-0" 
        }
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          <div className="col-start-1 col-end-2 flex items-center">
          <img
              src="/assets/logo.png"
              className="h-14 w-auto mt-4 lg:mt-2"
              alt=""
            />
          </div>
          <Link href="/">
            <a>خانه</a>
          </Link> 
          <Sign />
        </nav>
      </header>
      {/* Mobile Navigation */}

      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-4 sm:px-8 shadow-t ">
        <div className="bg-white-500 sm:px-3">
        <Link href="/">
          <a>خانه</a>
        </Link> 
        </div>
      </nav>
      {/* End Mobile Navigation */}
    </>
  );
};

export default PagesHeader;
