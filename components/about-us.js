import React from "react";
import Image from "next/image";
// import Testimoni from "./Testimoni";
import ButtonPrimary from "./misc/button-primary";
import ButtonOutline from "./misc/button-outline.";
import Maps from "../public/assets/HugeGlobal.svg";
import ContactUs from "./contact-us";

const AboutUs = () => {
  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
      id="aboutUs"
    >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        
        <div className="flex flex-col w-full my-16">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed w-9/12 sm:w-6/12 lg:w-4/12 mx-auto">
           درباره ما{" "}
          </h3>
          <p className="leading-normal  mx-auto my-2 w-10/12 sm:w-7/12 lg:w-6/12">
           شرکت با بیش از ...
          </p>
          <div className="py-12 w-full px-8 mt-16">
            <Maps className="w-full h-auto" />
          </div>
          
        </div>
        <div className="flex flex-col w-full my-16" id="contactUs">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12 sm: lg:w-4/12 mx-auto">
            تماس با ما{" "}
          </h3>
          <p className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12">
           فرم تماس با ما 
          </p>
          <div className="relative w-full mt-16">
            <div className="rounded-xl  py-4 sm:py-2 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500">
              <div className="flex flex-col text-right w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0 ">
                <h5 className="text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
                 فرم تماس
                </h5>
                <p>اطلاعات فرم را تکمیل کنید تا در اسرع وقت با شما تماس گرفته شود</p>
              </div>
              <ContactUs />
            </div>
            <div
              className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0"
              style={{ filter: "blur(114px)" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
