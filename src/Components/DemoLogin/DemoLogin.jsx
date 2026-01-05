import React, { use } from "react";
import AuthContext from "../../AuthContext/Authcontext";
import { useLocation, useNavigate } from "react-router";

const DemoLogin = () => {
  const { demoLogin } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location)
  const handleDemologin = () => {
    demoLogin().then(() => {
      navigate(location?.state || "/");
    });
  };
    console.log("after call",location)
  return (
    <>
      <button onClick={handleDemologin} className="btn btn-outline">
        Demo Login
      </button>
    </>
  );
};

export default DemoLogin;
