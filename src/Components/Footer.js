import React from "react";
import intstagramIcon from "../images/instagramIcon.svg";
import tikTokIcon from "../images/tikTokIcon.svg";
import twitterIcon from "../images/twitter.svg";

export default function Footer() {
  return (
    <>
      <div className="bg-altbackground w-[100vw] flex flex-col">
        <div className="  h-40 flex justify-center">
          <div className="flex justify-between w-[80vw] lg:w-[20vw] mt-10 items-top">
            <div className="flex flex-col">
              <h3 className="font-headerFont text-white text-xl mb-2">
                Follow Us
              </h3>
              <div className="flex justify-between">
                <img
                  src={intstagramIcon}
                  alt="Instagram Icon"
                  className="h-6"
                ></img>
                <img src={tikTokIcon} alt="tiktok Icon" className="h-6"></img>
                <img src={twitterIcon} alt="twitter Icon" className="h-6"></img>
              </div>
            </div>
            <div className="flex flex-col">
              <h3 className="font-headerFont text-white text-xl mb-1">Links</h3>
              <div className="flex justify-between flex-col">
                <h3 className="font-bodyFont text-primarytext">
                  Terms and Services
                </h3>
                <h3 className="font-bodyFont text-primarytext">
                  Unsuscribe
                </h3>
              </div>
            </div>
          </div>
        </div>
        <h3 className="mb-4 font-bodyFont text-primarytext">
          © 2023 YouLetter, Inc. All Rights Reserved.
        </h3>
      </div>
    </>
  );
}
