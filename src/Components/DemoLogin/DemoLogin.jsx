import React, { use } from "react";
import AuthContext from "../../AuthContext/Authcontext";
import { useLocation, useNavigate } from "react-router";

const DemoLogin = () => {
  const { demoLogin } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleDemologin = async () => {
    demoLogin().then(() => {
      navigate(location?.state || "/");
    });
  };
  return (
    <>
      <button onClick={handleDemologin} className="btn btn-outline">
        Demo Login
      </button>
    </>
  );
};

export default DemoLogin;
