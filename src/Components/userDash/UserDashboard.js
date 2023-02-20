import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Auth } from "aws-amplify";
import { useNavigate } from "react-router-dom";

export default function UserDashboard() {
  const [user, setUser] = useState(null);
  const [userCalled, setUserCalled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const asyncFunc = async () => {
      try {
        let user = await Auth.currentAuthenticatedUser();
        setUserCalled(true);
        setUser(user);
      } catch {
        setUser(null);
        setUserCalled(true);
      }
    };
    asyncFunc();
  }, []);

  useEffect(() => {
    if (user) {
      console.log(user);
    }
    else if (user == null && userCalled == true){
      console.log("redirecting")
      navigate("/resetpassword");
    }
  }, [user]);

  return (
    <>
      <h1>Dashboard</h1>
    </>
  );
}
