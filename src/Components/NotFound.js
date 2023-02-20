import React from "react";
import notFoundImage from "../images/notFound.svg";

export default function NotFound() {
  return (
    <div className="flex h-[80vh] w-[100vw] items-center justify-center">
      <img src={notFoundImage} alt="404" className=" h-96"></img>
    </div>
  );
}
