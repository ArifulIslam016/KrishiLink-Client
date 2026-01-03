import axios from "axios";

const Instance=axios.create({
    // baseURL:'https://krishi-link-server-one.vercel.app/'
    baseURL:'http://localhost:3000/'
})
import React from 'react';

const useSecureInstance = () => {
    
    return Instance;
};

export default useSecureInstance;