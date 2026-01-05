import React, { use } from 'react';
import AuthContext from '../AuthContext/Authcontext';
import { Navigate, useLocation } from 'react-router';
import LoadingPage from '../Pages/LoadingPage';

const PrivateProvider = ({children}) => {
   const location=useLocation()
    const {user,loading}=use(AuthContext)
if(loading){
    return <LoadingPage></LoadingPage>
}
  if(!user){
        return <Navigate state={location.pathname} to={'/login'}></Navigate>
    }
    return children
}
export default PrivateProvider;