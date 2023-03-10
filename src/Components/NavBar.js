import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <div className=" bg-gradient-to-r from-YLBlueDark to-YLBlueLight h-12 lg:h-20 w-screen flex items-center border-b-2 border-[white]">
          <Link to="/" className="flex flex-intial items-end">
            <h1 className="font-headerFont text-[#FFFFFF] text-xl xl:text-2xl font-bold flex-initial ml-5 lg:ml-10">
              YOULETTER
            </h1>
            <h2 className="text-[#F4B942] text-md xl:text-lg font-bold flex-initial ml-1">
              beta
            </h2>
          </Link>
      </div>
    </>
  );
}
