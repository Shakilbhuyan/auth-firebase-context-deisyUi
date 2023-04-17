import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';


export const authContext = createContext(null);

const auth = getAuth(app);

const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
// Register
    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    };
   // Login
    const signIn = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    };
    // SignOut
    const logOut = ()=>{
       return signOut(auth);
    }
// Observe auth state change
    useEffect(() =>{
      const  unsubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('auth state change', currentUser)
            setUser(currentUser)
            setLoading(false);
        });
        return ()=>{
            unsubscribe()
        }
    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut
    }
    return (
        <authContext.Provider value = {authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProviders;