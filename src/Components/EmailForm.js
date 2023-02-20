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

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://api.airtable.com/v0/appSHNyKIRPfxWh3r/tblu2aNtNlJRwZaqn", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-type": "application/json",
        Authorization:
          "Bearer pattVvD1XATs2iunz.b8940e6daeb84f34ac233725763b47799e76b9765cacb702b013c0c47192e0d9",
      },
      body: JSON.stringify(apiBodyData),
    }).then(() => {
      console.log("email sent");
    });

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
