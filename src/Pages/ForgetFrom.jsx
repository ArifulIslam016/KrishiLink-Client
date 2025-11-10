import React, { use } from 'react';
import { useLocation, useNavigate } from 'react-router';
import AuthContext from '../AuthContext/Authcontext';
import toast from 'react-hot-toast';

const ForgetFrom = () => {
    const location=useLocation()
    const navigate=useNavigate()
    const {forgetPassword}=use(AuthContext)
    const handleForget=(e)=>{
        e.preventDefault()
        const email=e.target.email.value;
        forgetPassword(email).then(
            ()=>{ toast.success("Reset link hasbeen sent to you mail!")
             navigate()
            window.open("https://mail.google.com", "_blank", "noopener,noreferrer");
}
        )
    }
    return (
         <div className="hero bg-base-200 min-h-screen ">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="text-2xl font-bold text-gray-700 text-center pt-13  ">
         Forget Password
        </h1>
        <div className="card-body">
          <form onSubmit={handleForget}>
            <fieldset className="fieldset">
                     
              <label className="label text-lg text-black font-semibold">
                Email
              </label>
              <input
                type="email"
                className="input"
                placeholder="Email"
                name="email"
                defaultValue={location?.state}
             ></input>

              {/* <div>
              <a className="link link-hover">Forgot password?</a>
            </div> */}
              <button className="btn btn-neutral mt-4">Foget Now</button>
              <button type='button' onClick={()=>navigate(-1)} className="btn btn-neutral mt-4">Back</button>
            </fieldset>
          </form>
        
        </div>
      </div>
    </div>
    );
};

export default ForgetFrom;