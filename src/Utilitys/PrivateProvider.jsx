import React, { use } from 'react';
import AuthContext from '../AuthContext/Authcontext';
import { Navigate } from 'react-router';
import LoadingPage from '../Pages/LoadingPage';

const PrivateProvider = ({children}) => {
   
    const {user,loading}=use(AuthContext)
    console.log(loading)
    console.log(user)
if(loading){
    return <LoadingPage></LoadingPage>
}
  if(!user){
        return <Navigate to={'/login'}></Navigate>
    }
    return children
}
export default PrivateProvider;