import React from "react";
import { useState } from "react";

export default function EmailForm() {
  const [emailField, setEmailField] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const apiBodyData = {
    records: [
      {
        fields: {
          Email: emailField,
        },
      },
    ],
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let data = await fetch(process.env.REACT_APP_AIRTABLE_URL, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-type": "application/json",
          Authorization: process.env.REACT_APP_EMAIL_WAITLIST_AUTH,
        },
        body: JSON.stringify(apiBodyData),
      });
      console.log(data);
      console.log("email sent");
      setEmailSubmitted(true);
    } catch (err) {
      console.log(err);
    }

    // fetch(process.env.REACT_APP_AIRTABLE_URL, {
    //   method: "POST",
    //   mode: "cors",
    //   headers: {
    //     "Content-type": "application/json",
    //     Authorization: process.env.REACT_APP_EMAIL_WAITLIST_AUTH,
    //   },
    //   body: JSON.stringify(apiBodyData),
    // }).then(() => {
    //   console.log("email sent");
    // });

    setEmailField("");
  };

  if (emailSubmitted) {
    return (
      <div className=" text-[#FFBD13] font-headerFont text-sm lg:text rounded-md px-3 py-1 w-1/2 lg:h-12 flex justify-center items-center">
        <h1 className="text-lg lg:text-xl xl:text-2xl 2xl:text-4xl">
          {" "}
          Welcome to the Waitlist!
        </h1>
      </div>
    );
  } else {
    return (
      <>
        <form id="emailForm" onSubmit={handleSubmit} className="w-[100%]">
          <label>
            <input
              placeholder="Enter Email"
              className="m-3 font-headerFont rounded-md px-3 text-sm lg:text-lg py-1 h-8 lg:h-12 w-[80%] xl:w-[60%]"
              type="email"
              required
              value={emailField}
              onChange={(e) => setEmailField(e.target.value)}
            />
          </label>
          <button
            className="bg-[#FFBD13] text-[#000000] font-headerFont text-sm lg:text-lg rounded-md px-3 py-1 w-[80%] xl:w-[60%] 2xl:w-60 h-8 lg:h-12 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 outline ml-1"
            type="submit"
            form="emailForm"
            value="Submit"
          >
            {" "}
            Join the waitlist{" "}
          </button>
        </form>
      </>
    );
  }
}
