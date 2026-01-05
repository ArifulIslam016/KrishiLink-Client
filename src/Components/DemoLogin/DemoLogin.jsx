import React, { use } from "react";
import AuthProvider from "../../AuthContext/AuthProvider";

const DemoLogin = () => {
  const { demoLogin } = use(AuthProvider);
  return (
    <>
      <button onClick={demoLogin} className="btn btn-neutral mt-4">Register</button>
    </>
  );
};

export default DemoLogin;
