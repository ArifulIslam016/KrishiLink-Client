import React, { useEffect, useState } from 'react';
import AuthContext from './Authcontext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/FirebaseInitialize';

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading, setLoading]=useState(true)
    const googleProvider=new GoogleAuthProvider()
  const CreateUser=(email,Password,)=>{
    return createUserWithEmailAndPassword(auth,email,Password,)
  }
  const Signin=(email,Password)=>{
return signInWithEmailAndPassword(auth,email,Password)
  }
  const SocialLogin=()=>{
    return signInWithPopup(auth,googleProvider)
  }
  const Signout=()=>{
    return signOut(auth)
  }
  const updateUserProfile=(updatedinfo)=>{
    return updateProfile(auth.currentUser,updatedinfo)
  }
  const forgetPassword=(email)=>{
   return sendPasswordResetEmail(auth,email)
  }
  useEffect(()=>{
  const unsubscribe=  onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser)
        setLoading(false)
    })
    return ()=> unsubscribe
  },[])
    const userInfo={
        CreateUser,
        Signin,
        Signout,
        SocialLogin,
        user,
        updateUserProfile,
        forgetPassword,
        loading
    }
    console.log(user)
    return (
    
        <AuthContext value={userInfo}>{children}</AuthContext>


    );
};

export default AuthProvider;