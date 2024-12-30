import {StyleSheet, Text, View} from 'react-native';
import React , {Children, createContext, useState} from 'react';

export const AuthContext  = createContext();

export const AuthProvider = ({Children}) => {
    const [isLoading,setIsLoading] = useState(false);
    const [userToken, setUserToken] = useState(null);
    // const[test,setTest]=useState('Test value');
  
  const Login=()=>{
    setUserToken('snskjndckj');
    setIsLoading(false);
  };
  const Logout=()=>{
    setUserToken(null);
    setIsLoading(false);
  };
    return (
    <AuthContext.Provider value={{Login,Logout,isLoading,userToken}}>
    {Children}
    </AuthContext.Provider>
  );
}

