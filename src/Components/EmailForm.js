import React from "react";
import { useState } from "react";

export default function EmailForm() {
  const [emailField, setEmailField] = useState("");

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

  return (
    <>
      <form id="emailForm" onSubmit={handleSubmit}>
        <label>
          <input
            placeholder="Enter Email"
            className="m-3 font-headerFont rounded-md px-3 text-sm lg:text-lg py-1 h-8 lg:h-12 w-[80%] lg:w-[60%]"
            type="email"
            required
            value={emailField}
            onChange={(e) => setEmailField(e.target.value)}
          />
        </label>
        <button
          className="bg-secondary text-white font-headerFont text-sm lg:text rounded-md px-3 py-1 w-[80%] lg:w-60 h-8 lg:h-12"
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
