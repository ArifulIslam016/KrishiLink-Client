import React from 'react';
import AuthContext from './Authcontext';

const AuthProvider = ({children}) => {
    const email1="Arifulq234@gmail.com"

    const userInfo={email1}
    return (
    
        <AuthContext value={userInfo}>{children}</AuthContext>


    );
};

export default AuthProvider;